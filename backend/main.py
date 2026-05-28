from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="Bayanihan Quest API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

SUPABASE_URL: str | None = os.getenv("SUPABASE_URL")
SUPABASE_KEY: str | None = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY) if SUPABASE_URL and SUPABASE_KEY else None

sample_quests = [
    {
        "id": 1,
        "title": "Clean Sweep",
        "category": "Map 1",
        "objective": "Collect 10 trash items around the barangay.",
        "reward_money": 250,
        "reward_reputation": 15,
        "status": "starter",
    },
    {
        "id": 2,
        "title": "Community Pantry Drive",
        "category": "CWTS",
        "objective": "Collect 5 chicken and 5 coconut for relief meal packs.",
        "reward_money": 300,
        "reward_reputation": 30,
        "status": "unlocked_after_clean_sweep",
    },
    {
        "id": 3,
        "title": "Road Cleanup",
        "category": "Map 2",
        "objective": "Collect 8 trash items along the road map.",
        "reward_money": 180,
        "reward_reputation": 10,
        "status": "repeatable",
    },
]


def require_supabase():
    if supabase is None:
        raise HTTPException(
            status_code=503,
            detail="Supabase is not configured. Add SUPABASE_URL and SUPABASE_KEY to enable live dashboard data.",
        )
    return supabase


@app.get("/")
def health_check():
    return {"status": "ok", "message": "Bayanihan Quest API is ready."}


@app.get("/quests")
def get_quests():
    return sample_quests


@app.get("/community/summary")
def get_community_summary():
    return {
        "starting_money": 100,
        "starting_stamina": 100,
        "starting_trash_capacity": 25,
        "barangay_fund_goal": 2000,
        "ranks": ["Volunteer", "Team Leader", "Community Officer"],
        "store_items": [
            {"name": "Gloves", "cost": 100, "effect": "Cleaning uses less stamina."},
            {"name": "Energy Drink", "cost": 30, "effect": "Restores 40 stamina."},
            {"name": "Trash Bag", "cost": 60, "effect": "Adds 10 trash capacity."},
        ],
        "message": "Clean, help, earn, upgrade, and serve the barangay.",
    }


@app.get("/sensor/latest")
def get_latest_sensor():
    db = require_supabase()
    try:
        res = db.table("soil").select("*").order("created_at", desc=True).limit(1).execute()
        if not res.data:
            raise HTTPException(status_code=404, detail="No sensor data found.")
        return res.data[0]
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@app.get("/sensor/history")
def get_sensor_history(limit: int = 30):
    db = require_supabase()
    if limit > 100:
        limit = 100
    try:
        res = db.table("soil").select("*").order("created_at", desc=True).limit(limit).execute()
        return res.data
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@app.get("/status/latest")
def get_latest_status():
    db = require_supabase()
    try:
        res = db.table("algo").select("*").order("created_at", desc=True).limit(1).execute()
        if not res.data:
            raise HTTPException(status_code=404, detail="No status data found.")
        return res.data[0]
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@app.get("/dashboard/latest")
def get_dashboard_latest():
    db = require_supabase()
    try:
        soil_res = db.table("soil").select("*").order("created_at", desc=True).limit(1).execute()
        algo_res = db.table("algo").select("*").order("created_at", desc=True).limit(1).execute()

        return {
            "sensor": soil_res.data[0] if soil_res.data else None,
            "status": algo_res.data[0] if algo_res.data else None,
            "community": get_community_summary(),
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
