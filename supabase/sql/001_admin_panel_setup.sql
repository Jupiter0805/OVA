-- ============================================================
-- OVA Periodontitis: Admin panel setup
-- Run this once in Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- Safe to re-run: every statement drops-then-recreates, nothing here
-- touches existing data.
-- ============================================================

-- 1) Auto-create a profiles row for every new signup, mirroring
--    auth.users into public.profiles (student by default). Without
--    this, only users who already have a profiles row show up in the
--    admin panel's user list.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2) Helper: is the currently authenticated user an admin or master?
--    security definer so it can read profiles even from inside a
--    profiles RLS policy without recursing into that same policy.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
    and user_type in ('admin', 'master')
  );
$$;

-- 3) Prevent privilege escalation: a non-admin can never change their
--    own user_type via a direct API call, even though they may be
--    able to update other columns on their own profile row.
create or replace function public.prevent_self_role_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.user_type is distinct from old.user_type and not public.is_admin() then
    new.user_type := old.user_type;
  end if;
  return new;
end;
$$;

drop trigger if exists prevent_role_escalation on public.profiles;
create trigger prevent_role_escalation
  before update on public.profiles
  for each row execute procedure public.prevent_self_role_escalation();

-- 4) RLS: make sure it's on (no-op if already enabled).
alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.test_attempts enable row level security;

-- 5) Admin policies (additive - existing self-access policies, if
--    any, are untouched; RLS policies are OR'd together).
drop policy if exists "Admins can view all profiles" on public.profiles;
create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Admins can view all progress" on public.user_progress;
create policy "Admins can view all progress"
  on public.user_progress for select
  using (public.is_admin());

drop policy if exists "Admins can delete any progress" on public.user_progress;
create policy "Admins can delete any progress"
  on public.user_progress for delete
  using (public.is_admin());

drop policy if exists "Admins can view all attempts" on public.test_attempts;
create policy "Admins can view all attempts"
  on public.test_attempts for select
  using (public.is_admin());

drop policy if exists "Admins can delete any attempt" on public.test_attempts;
create policy "Admins can delete any attempt"
  on public.test_attempts for delete
  using (public.is_admin());

-- 6) One-time backfill: create profile rows for any existing
--    auth.users that predate the trigger above.
insert into public.profiles (id, email, full_name)
select u.id, u.email, u.raw_user_meta_data->>'full_name'
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null
on conflict (id) do nothing;
