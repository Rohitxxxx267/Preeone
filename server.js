import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

// HOME ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("🔥 Force-Win Backend Running Successfully");
});

// API ROUTE
const API_BASE = "https://draw.ar-lottery01.com/WinGo/WinGo_";

app.get("/api/results/:game", async (req, res) => {
  try {
    const game = req.params.game;
    const url = `${API_BASE}${game}/GetHistoryIssuePage.json?t=${Date.now()}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.json({ error: true });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
