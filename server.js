const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

// 🔥 MAIN API (Plans Proxy)
app.get("/api/plans", async (req, res) => {
  try {

    // 👉 यहाँ अपनी real plans API डालो
    const apiUrl = "https://wingo.oss-ap-southeast-7.aliyuncs.com/WinGo_30_data";

    const response = await axios.get(apiUrl);

    const rawData = response.data;

    // 🧠 convert into usable format (example structure)
    let plans = [];

    // ⚠️ NOTE: actual API format ke hisab se adjust hoga
    for (let i = 0; i < 10; i++) {
      plans.push({
        prediction: Math.random() > 0.5 ? "BIG" : "SMALL",
        rate: Math.floor(Math.random() * 40) + 60
      });
    }

    res.json(plans);

  } catch (err) {
    res.status(500).json({ error: "API failed", msg: err.message });
  }
});

// 🚀 START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
