# Bayanihan Quest

Bayanihan Quest is a redesigned website for the existing Windows Forms game in `C:\Users\manal\source\repos\bayanihanquest_v1`. The content now follows the actual game structure: barangay cleanup, road cleanup, pantry ingredients, money, stamina, reputation, store upgrades, daily missions, community projects, events, mini-games, and save/load progress.

## Improved Structure

- `frontend/` - Vite + React website with a dark game-inspired UI
- `backend/` - FastAPI service with community quest endpoints and preserved legacy dashboard endpoints

## Frontend Highlights

- Modern dark interface with vibrant green, blue, and gold accents
- Quest cards based on Clean Sweep, Community Pantry Drive, and Road Cleanup
- Rewritten content based on the Barangay Captain, Map 1, Map 2, Sari-Sari Store, CWTS mini-games, and community fund systems
- Responsive navigation and mobile-friendly layouts
- Developers section updated with the Bayanihan Quest team

## Developers

- Matthew Manalang
- Juan Marco Aguilar
- Edrian Manalo Guno
- Dave Lorenz Ignacio
- Prince Russel Araneta

## Game Content Reflected

- Clean Sweep: collect 10 trash around the barangay for P250 and 15 reputation
- Community Pantry Drive: collect 5 chicken and 5 coconut for P300 and 30 reputation
- Road Cleanup: collect 8 trash on Map 2 for P180 and 10 reputation
- Store: gloves, energy drink, and trash bag upgrades
- Projects: streetlights, waste bins, and community garden
- Mini-games: waste sorting quiz and budget allocation quiz
- Events: flood preparedness cleanup, emergency pantry packing, and volunteer mobilization

## Suggested Website Features

- Read the game's saved progress and display live HUD values on the website
- Add a downloadable game build and controls guide
- Add screenshots for Map 1, Map 2, store, projects, NPC requests, and mini-games
- Add a changelog for future game updates

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Set `SUPABASE_URL` and `SUPABASE_KEY` in a `.env` file to enable the preserved live Supabase endpoints.

## Deploy to Vercel (Frontend)

This repo is a monorepo (`frontend/` + `backend/`). Vercel will deploy the Vite site from `frontend/`.

### Option A: Deploy via this repo config (recommended)

1. Push this folder to GitHub.
2. In Vercel: **Add New Project** → import the repo.
3. Deploy (the root [vercel.json](vercel.json) is set up to build `frontend/`).

### Option B: Configure in Vercel UI

If you prefer not to use `vercel.json`:

- **Root Directory**: `frontend`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Note: the Python service in `backend/` is not deployed by default to Vercel in this setup.
