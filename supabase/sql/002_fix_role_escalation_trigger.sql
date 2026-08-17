-- ============================================================
-- Fix: prevent_self_role_escalation() blocked ALL user_type updates
-- done outside of an authenticated app session (service_role key,
-- direct edits in Supabase Studio's table editor, etc.), because
-- auth.uid() is NULL in those contexts and the trigger treated
-- "no session" the same as "non-admin session". Only intervene when
-- there IS an authenticated, non-admin actor.
-- Safe to re-run.
-- ============================================================

create or replace function public.prevent_self_role_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.user_type is distinct from old.user_type
     and auth.uid() is not null
     and not public.is_admin() then
    new.user_type := old.user_type;
  end if;
  return new;
end;
$$;
