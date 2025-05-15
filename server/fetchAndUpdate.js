/* eslint-disable no-undef */
import fetch from "node-fetch";
// import cron from "node-cron";

//List of symbols
const symbols = [
    '^GSPC',        //S&P 500
    '^IXIC',        //Nasdaq Composite
    '^DJI',         //Dow Jones
    '^RUT',         //Russell 2000
    '^STOXX',       //Stoxx 600
    '^FTSE',        //FTSE 100
    '^GDAXI',       //DAX
    '^FCHI',        //CAC 40
    '^SSMI',        //SMI
    'FTSEMIB.MI',   //Milano Borsa
    '^IBEX',        //IBEX 35
    '^N225',        //Nikkei 225
    '^HSI',         //Hang Seng
    '000001.SS',    //Shanghai Composite
    '^KS11',        //Kospi Composite
    '^AXJO',        //ASX 200
    '^NZ50',        //NZX 50
    '^BSESN',       //BSE Sensex
    '^VIX',          //CBOE Volatility
    'DX-Y.NYB',     //US Dollar Index
    'EURUSD=X',     //EUR/USD
    'GBPUSD=X',     //GBP/USD
    'JPY=X',        //USD/JPY
    'CHFUSD=X',     //CHF/USD
    'CNH=X',        //CNH/USD
    'BTC-USD',      //Bitcoin
    'MSFT',         //Microsoft
    'AAPL',         //Apple
    'NVDA',         //Nvidia
    'AMZN',         //Amazon
    'GOOG',         //Alphabet
    'META',         //Meta
    'TSLA',         //Tesla
    'NFLX',         //Netflix
    'VOO',          //S&P 500
    'QQQM',         //Nasdaq 100
    'IWM',          //Russell 2000
    'VTI',          //Total US Stock
    'VT',           //Total World
    'VEU',          //Total World ex-Usa
    'IBIT',         //Bitcoin
    'BND',          //Total Bond Market
    'GLD',          //Gold Bullion
    'DGS3MO',       //US T-Bill 3-months
    'DGS2',         //US T-Note 2-years
    'DGS10',        //US T-Note 10-years
    'DGS30'         //US T-Bond 30-years
];

const endpoints = symbols.map(symbol => `http://localhost:4000/api/yahoo/${symbol}`);

Promise.all(
  endpoints.map(async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(`Updated: ${url}`, json);
  })
).then(() => {
  console.log("All data fetched and stored.");
  process.exit(0);
}).catch(err => {
  console.error("Error during update:", err);
});

//Cron
// Run at 14:00 UTC (9:00 AM New York) on weekdays
// cron.schedule("30 12 * * 1-5", async () => {
//   console.log("⏳ Running scheduled data fetch...");
//   await fetchAndSaveAllData();
//   console.log("✅ Scheduled data fetch complete.");
// });

// // Keep the scheduler process alive
// console.log("📅 fetchAndUpdate scheduler running...");
