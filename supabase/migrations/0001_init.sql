-- Hungarian learning app — single-user schema
-- Adapted from the Wordwell spec's card/progress/review_log pattern,
-- simplified: no teacher/student split, just one learner.

create table if not exists lessons (
  id            text primary key,       -- e.g. 'intro-1', 'u1-d1'
  unit          int not null,           -- 0 = pronunciation intro, 1..15 = book units
  day           int not null,           -- day within the unit
  title_hu      text,
  title_en      text,
  dialogue      jsonb,                  -- [{speaker, hu, en}, ...]
  order_index   int not null,           -- overall sequence across the whole course
  created_at    timestamptz default now()
);

create table if not exists tracks (
  id            uuid primary key default gen_random_uuid(),
  lesson_id     text references lessons(id) on delete cascade,
  label         text not null,          -- e.g. "Dialogue 1", "Vocabulary"
  storage_path  text not null,          -- path inside the 'audio' storage bucket
  sort_order    int default 0
);

create table if not exists cards (
  id            uuid primary key default gen_random_uuid(),
  lesson_id     text references lessons(id) on delete set null,
  hu            text not null,
  en            text not null,
  created_at    timestamptz default now(),
  unique (hu, en)
);

create table if not exists progress (
  id             uuid primary key default gen_random_uuid(),
  card_id        uuid references cards(id) on delete cascade unique,
  ease           real default 2.5,
  interval_days  int default 0,
  repetitions    int default 0,
  due_date       date default current_date,
  last_reviewed  timestamptz
);

create table if not exists review_log (
  id            uuid primary key default gen_random_uuid(),
  card_id       uuid references cards(id) on delete cascade,
  rating        int not null,           -- 2 = don't know, 3 = kind of, 5 = know it (SM-2 quality)
  reviewed_at   timestamptz default now()
);

create table if not exists course_state (
  id                  int primary key default 1,
  current_lesson_id   text references lessons(id),
  constraint single_row check (id = 1)
);
insert into course_state (id, current_lesson_id) values (1, null)
  on conflict (id) do nothing;

-- RLS: this app has exactly one user (Alberto, via magic-link auth).
-- Any authenticated session may read/write everything.
alter table lessons enable row level security;
alter table tracks enable row level security;
alter table cards enable row level security;
alter table progress enable row level security;
alter table review_log enable row level security;
alter table course_state enable row level security;

create policy "authenticated full access" on lessons for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on tracks for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on cards for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on progress for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on review_log for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on course_state for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
