import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const API_BASE = "https://draw.ar-lottery01.com/WinGo/WinGo_";

// Proxy API (secure backend call)
app.get("/api/results/:game", async (req, res) => {
  try {
    const game = req.params.game;
    const url = `${API_BASE}${game}/GetHistoryIssuePage.json?t=${Date.now()}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.json({ error: true, message: "API fetch failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Force-Win running on port " + PORT);
});
