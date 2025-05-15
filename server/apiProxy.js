/* eslint-disable no-undef */
/* eslint-env node */

// apiProxy.js
import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

// Load API keys from .env file
dotenv.config();

const app = express();
const PORT = 4000;
// eslint-disable-next-line no-undef
// const FRED_API_KEY = process.env.FRED_API_KEY;

app.use(cors());

// --------- Utility to Save Daily Data ---------
const filePath = path.join(process.cwd(), "public", "dailyData.json");

function saveToLocalJson(symbol, newEntry) {
  let data = {};

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath);
    data = JSON.parse(raw);
  }

  if (!data[symbol]) {
    data[symbol] = [];
  }

  const exists = data[symbol].some(entry => entry.date === newEntry.date);
  if (!exists) {
    data[symbol].push(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

// --------- Yahoo Finance Route ---------
app.get("/api/yahoo/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=5d&interval=1d`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Yahoo Finance API error");

    const json = await response.json();
    const result = json.chart.result?.[0];
    if (!result) return res.status(404).json({ error: "No result data" });

    const timestamps = result.timestamp;
    const closes = result.indicators.quote[0].close;

    // Get latest valid close
    const lastIndex = closes.length - 1;
    const date = new Date(timestamps[lastIndex] * 1000).toISOString().split("T")[0];
    const value = closes[lastIndex];

    if (value !== null) {
      const entry = { date, value: parseFloat(value) };
      saveToLocalJson(symbol, entry);
      res.json(entry);
      console.log(`Fetched Yahoo data for ${symbol}:`, { date, value });
    } else {
      res.status(404).json({ error: "Latest value is null" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Yahoo Finance data" });
  }
});

// // --------- FRED Route ---------
// app.get("/api/fred/:seriesId", async (req, res) => {
//   const { seriesId } = req.params;
//   const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${FRED_API_KEY}&file_type=json&limit=1&sort_order=desc`;

//   try {
//     console.log("FRED URL:", url);
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("FRED API error");

//     const data = await response.json();
//     const [latest] = data.observations;

//     if (!latest || latest.value === ".") {
//       return res.status(404).json({ error: "No valid FRED observation" });
//     }

//     const entry = {
//       date: latest.date,
//       value: parseFloat(latest.value),
//     };

//     saveToLocalJson(seriesId, entry);
//     res.json(entry);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch FRED data" });
//   }
// });

// --------- Start Server ---------
app.listen(PORT, () => {
  console.log(`API Proxy server running at http://localhost:${PORT}`);
});
