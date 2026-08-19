-- ============================================================
-- OVA Periodontitis: Admin panel — change user roles + delete users
-- Run this once in Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- Safe to re-run: every statement drops-then-recreates, nothing here
-- touches existing data.
--
-- Rules implemented:
--   - Admin and master can both change any user's role and delete any user.
--   - Neither can change or delete their OWN row from the admin panel
--     (avoids accidental self-lockout/self-deletion; role promotion to
--     master still goes through Studio/service_role, as before).
--   - Only master can change the master account's role or delete it.
--     An admin who is not master is blocked at the trigger level, not
--     just hidden in the UI, so this holds even if someone calls the
--     API directly.
-- ============================================================

-- 1) Helper: is the currently authenticated user specifically master?
create or replace function public.is_master()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
    and user_type = 'master'
  );
$$;

-- 2) Guard: only master may modify or delete the master profile row.
--    Fires on both UPDATE and DELETE of public.profiles.
create or replace function public.protect_master_account()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if TG_OP = 'DELETE' then
    if old.user_type = 'master' and not public.is_master() then
      raise exception 'Solo el master puede eliminar la cuenta master';
    end if;
    return old;
  end if;

  if old.user_type = 'master' and new.user_type is distinct from old.user_type and not public.is_master() then
    raise exception 'Solo el master puede cambiar el rol de la cuenta master';
  end if;
  return new;
end;
$$;

drop trigger if exists protect_master_before_update on public.profiles;
create trigger protect_master_before_update
  before update on public.profiles
  for each row execute procedure public.protect_master_account();

drop trigger if exists protect_master_before_delete on public.profiles;
create trigger protect_master_before_delete
  before delete on public.profiles
  for each row execute procedure public.protect_master_account();

-- 3) RLS: allow admin/master to update any profile (role changes).
--    prevent_self_role_escalation (001) still blocks non-admins from
--    touching their own user_type; protect_master_account (above)
--    blocks non-master admins from touching the master row.
drop policy if exists "Admins can update any profile" on public.profiles;
create policy "Admins can update any profile"
  on public.profiles for update
  using (public.is_admin())
  with check (public.is_admin());

-- 4) Full user deletion. This can't be done from the browser with the
--    anon/authenticated key — deleting the auth.users row requires
--    elevated privilege, which is exactly what a security definer
--    function (owned by postgres) provides. Explicit ordered deletes
--    (not relying on ON DELETE CASCADE) so this works regardless of
--    how the FKs were originally set up.
create or replace function public.admin_delete_user(target_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target_role text;
begin
  if not public.is_admin() then
    raise exception 'No autorizado';
  end if;

  if target_user_id = auth.uid() then
    raise exception 'No puedes eliminar tu propia cuenta desde este panel';
  end if;

  select user_type into target_role from public.profiles where id = target_user_id;

  if target_role = 'master' and not public.is_master() then
    raise exception 'Solo el master puede eliminar la cuenta master';
  end if;

  delete from public.test_attempts where user_id = target_user_id;
  delete from public.user_progress where user_id = target_user_id;
  delete from public.profiles where id = target_user_id;
  delete from auth.users where id = target_user_id;
end;
$$;

grant execute on function public.admin_delete_user(uuid) to authenticated;
