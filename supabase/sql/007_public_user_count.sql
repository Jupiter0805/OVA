-- ============================================================
-- OVA Periodontitis: public registered-user count for the landing page
-- Run this once in Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- Safe to re-run: create or replace, nothing here touches existing data.
--
-- profiles RLS only lets a user see their own row (admins see all), so
-- an anonymous visitor can't count rows directly. This security definer
-- function exposes ONLY the total number — no emails, names or ids.
-- ============================================================

create or replace function public.get_user_count()
returns bigint
language sql
security definer
stable
set search_path = public
as $$
  select count(*) from public.profiles;
$$;

grant execute on function public.get_user_count() to anon, authenticated;
