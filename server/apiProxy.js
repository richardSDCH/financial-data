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

// --------- Start Server ---------
app.listen(PORT, () => {
  console.log(`API Proxy server running at http://localhost:${PORT}`);
});
