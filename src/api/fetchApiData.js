// src/api/fetchApiData.js

// //Yahoo Finance
// export async function fetchYahooData(symbol) {
//   const res = await fetch(`http://localhost:4000/api/yahoo/${symbol}`);
//   const json = await res.json();
//   const previousClose = json.chart?.result?.[0].meta.chartPreviousClose;
//   const closingPrice = json.chart?.result?.[0].meta.regularMarketPrice;
  
//   return { previousClose, closingPrice };
// }

// //FRED Federal Reserve Bank of St. Louis
// export async function fetchFredData(symbol) {
//   const res = await fetch(`http://localhost:4000/api/fred/${symbol}`);
//   const json = await res.json();
//   const previousYield = json.observations?.[1].value;
//   const closingYield = json.observations?.[0].value;
  
//   return { previousYield, closingYield};
// }

// fetchApiData.js
export async function getLocalDailyData() {
  const res = await fetch("/dailyData.json");
  if (!res.ok) throw new Error("Failed to load daily data");
  return await res.json();
}


