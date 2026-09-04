# Setup — one-time steps

## 1. GitHub (you do this)
1. Create a new **empty** repo on github.com (no README, no .gitignore — just empty).
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your new repo's URL>
   git push -u origin main
   ```
3. On GitHub: repo → Settings → Pages → Source = **GitHub Actions**.
4. Repo → Settings → Secrets and variables → Actions → add two secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   (values from your Supabase project — see below)

After that, every push to `main` auto-builds and deploys to your GitHub Pages URL.

## 2. Supabase (Claude does this once the connector is on)
- New project, run `supabase/migrations/0001_init.sql`
- Create a public storage bucket named `audio`, upload the book's mp3s
- Enable magic-link email auth

## 3. Local testing (optional)
Copy `.env.example` to `.env`, fill in the same two values, then:
```
npm install
npm run dev
```
