import './App.css'
import { yahooSymbols, fredSymbols } from "./api/symbols";
import { fetchYahooData, fetchFredData } from "./api/fetchApiData";
import { FINANCIAL_DATA } from "./resources/financialData";
import Table from "./components/Table";

//Yahoo Finance
const yahooApiData = {};
for (const symbol of yahooSymbols) {
  yahooApiData[symbol] = await fetchYahooData(symbol);
}

//FRED Federal Reserve Bank of St. Louis
const fredApiData = {};
for (const symbol of fredSymbols) {
  fredApiData[symbol] = await fetchFredData(symbol);
}

console.log('Yahoo API:', yahooApiData);
console.log('FRED API:', fredApiData);

//Functions
const getYTD = (closingPrice, yearOpen) => {
  return closingPrice / yearOpen * 100 - 100;
}

const getPercentage = (closingPrice, previousClose) => {
  return closingPrice / previousClose * 100 - 100;
}

//Content
// const futures = [
//   { name: "S&P 500", value: FINANCIAL_DATA.SP500.value, changePer: FINANCIAL_DATA.SP500.changePer },
//   { name: "Dow Jones", value: FINANCIAL_DATA.DOWJONES.value, changePer: FINANCIAL_DATA.DOWJONES.changePer },
//   { name: "Nasdaq 100", value: FINANCIAL_DATA.NASDAQ100.value, changePer: FINANCIAL_DATA.NASDAQ100.changePer },
//   { name: "Russell 2000", value: FINANCIAL_DATA.RUSSELL.value, changePer: FINANCIAL_DATA.RUSSELL.changePer },
//   { name: "Oro", value: FINANCIAL_DATA.GOLD.value, changePer: FINANCIAL_DATA.GOLD.changePer },
//   { name: "Petróleo crudo", value: FINANCIAL_DATA.OIL.value, changePer: FINANCIAL_DATA.OIL.changePer },
// ]

// console.log("API DATA:", apiData);

const openingTable = [
  { category: "indices", name: "S&P 500", value: yahooApiData['^GSPC'].closingPrice, percentage: getPercentage(yahooApiData['^GSPC'].closingPrice, yahooApiData['^GSPC'].previousClose), yearToDate: getYTD(yahooApiData['^GSPC'].closingPrice, FINANCIAL_DATA.yearOpen['^GSPC'])},
  { category: "indices", name: "Nasdaq Composite", value: yahooApiData['^IXIC'].closingPrice, percentage: getPercentage(yahooApiData['^IXIC'].closingPrice, yahooApiData['^IXIC'].previousClose), yearToDate: getYTD(yahooApiData['^IXIC'].closingPrice, FINANCIAL_DATA.yearOpen['^IXIC'])},
  { category: "indices", name: "Dow Jones", value: yahooApiData['^DJI'].closingPrice, percentage: getPercentage(yahooApiData['^DJI'].closingPrice, yahooApiData['^DJI'].previousClose), yearToDate: getYTD(yahooApiData['^DJI'].closingPrice, FINANCIAL_DATA.yearOpen['^DJI'])},
  { category: "indices", name: "Russell 2000", value: yahooApiData['^RUT'].closingPrice, percentage: getPercentage(yahooApiData['^RUT'].closingPrice, yahooApiData['^RUT'].previousClose), yearToDate: getYTD(yahooApiData['^RUT'].closingPrice, FINANCIAL_DATA.yearOpen['^RUT'])},
  { category: "indices", name: "Stoxx 600", value: yahooApiData['^STOXX'].closingPrice, percentage: getPercentage(yahooApiData['^STOXX'].closingPrice, yahooApiData['^STOXX'].previousClose), yearToDate: getYTD(yahooApiData['^STOXX'].closingPrice, FINANCIAL_DATA.yearOpen['^STOXX'])},
  { category: "indices", name: "Volatilidad", value: yahooApiData['^VIX'].closingPrice, percentage: getPercentage(yahooApiData['^VIX'].closingPrice, yahooApiData['^VIX'].previousClose), yearToDate: getYTD(yahooApiData['^VIX'].closingPrice, FINANCIAL_DATA.yearOpen['^VIX'])},
  { category: "currencies", name: "US Dollar Index", value: yahooApiData['DX-Y.NYB'].closingPrice, percentage: getPercentage(yahooApiData['DX-Y.NYB'].closingPrice, yahooApiData['DX-Y.NYB'].previousClose), yearToDate: getYTD(yahooApiData['DX-Y.NYB'].closingPrice, FINANCIAL_DATA.yearOpen['DX-Y.NYB'])},
  { category: "bonds", name: "US Treasury Note - 10Y", yield: parseFloat(fredApiData.DGS10.closingYield), change: parseFloat(fredApiData.DGS10.closingYield) - parseFloat(fredApiData.DGS10.previousYield), yearToDate: parseFloat(fredApiData.DGS10.closingYield) - FINANCIAL_DATA.T10Y.yearOpen},
  { category: "commodities", name: "Oro", value: FINANCIAL_DATA.XAUUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.XAUUSD.currentValue, FINANCIAL_DATA.XAUUSD.prevClose), yearToDate: getYTD(FINANCIAL_DATA.XAUUSD.currentValue, FINANCIAL_DATA.XAUUSD.yearOpen)},
  { category: "commodities", name: "Petróleo - WTI", value: FINANCIAL_DATA.WTI.currentValue, percentage: getPercentage(FINANCIAL_DATA.WTI.currentValue, FINANCIAL_DATA.WTI.prevClose), yearToDate: getYTD(FINANCIAL_DATA.WTI.currentValue, FINANCIAL_DATA.WTI.yearOpen)},
  { category: "currencies", name: "Bitcoin", value: yahooApiData['BTC-USD'].closingPrice, percentage: getPercentage(yahooApiData['BTC-USD'].closingPrice, yahooApiData['BTC-USD'].previousClose), yearToDate: getYTD(yahooApiData['BTC-USD'].closingPrice, FINANCIAL_DATA.yearOpen['BTC-USD'])}
]

// const indicesUS = [
//   { name: "S&P 500", value: FINANCIAL_DATA.US500.currentValue, percentage: getPercentage(FINANCIAL_DATA.US500), yearToDate: getYTD(FINANCIAL_DATA.US500)},
//   { name: "Nasdaq Composite", value: FINANCIAL_DATA.US100.currentValue, percentage: getPercentage(FINANCIAL_DATA.US100), yearToDate: getYTD(FINANCIAL_DATA.US100)},
//   { name: "Dow Jones Industrial Average", value: FINANCIAL_DATA.US30.currentValue, percentage: getPercentage(FINANCIAL_DATA.US30), yearToDate: getYTD(FINANCIAL_DATA.US30)},
//   { name: "Russell 2000", value: FINANCIAL_DATA.RUT.currentValue, percentage: getPercentage(FINANCIAL_DATA.RUT), yearToDate: getYTD(FINANCIAL_DATA.RUT)},
//   { name: "Stoxx 600", value: FINANCIAL_DATA.SXXP.currentValue, percentage: getPercentage(FINANCIAL_DATA.SXXP), yearToDate: getYTD(FINANCIAL_DATA.SXXP)},
//   { name: "Volatilidad", value: FINANCIAL_DATA.VIX.currentValue, percentage: getPercentage(FINANCIAL_DATA.VIX), yearToDate: getYTD(FINANCIAL_DATA.VIX)}
// ]

// const indicesEurope = [
//   { category: "indices", name: "FTSE 100 - Londres", value: FINANCIAL_DATA.FTSE.currentValue, percentage: getPercentage(FINANCIAL_DATA.FTSE), yearToDate: getYTD(FINANCIAL_DATA.FTSE)},
//   { category: "indices", name: "DAX - Frankfurt", value: FINANCIAL_DATA.DAX.currentValue, percentage: getPercentage(FINANCIAL_DATA.DAX), yearToDate: getYTD(FINANCIAL_DATA.DAX)},
//   { category: "indices", name: "CAC40 - Paris", value: FINANCIAL_DATA.CAC40.currentValue, percentage: getPercentage(FINANCIAL_DATA.CAC40), yearToDate: getYTD(FINANCIAL_DATA.CAC40)},
//   { category: "indices", name: "SMI - Zurich", value: FINANCIAL_DATA.SMI.currentValue, percentage: getPercentage(FINANCIAL_DATA.SMI), yearToDate: getYTD(FINANCIAL_DATA.SMI)},
//   { category: "indices", name: "FTSE MIB - Milán", value: FINANCIAL_DATA.FTSEMIB.currentValue, percentage: getPercentage(FINANCIAL_DATA.FTSEMIB), yearToDate: getYTD(FINANCIAL_DATA.FTSEMIB)},
//   { category: "indices", name: "IBEX 35 - Madrid", value: FINANCIAL_DATA.IBEX.currentValue, percentage: getPercentage(FINANCIAL_DATA.IBEX), yearToDate: getYTD(FINANCIAL_DATA.IBEX)}
// ]

// const indicesAsia = [
//   { category: "indices", name: "Nikkei 225 - Tokyo", value: FINANCIAL_DATA.NI225.currentValue, percentage: getPercentage(FINANCIAL_DATA.NI225), yearToDate: getYTD(FINANCIAL_DATA.NI225)},
//   { category: "indices", name: "Hang Seng - Hong Kong", value: FINANCIAL_DATA.HSI.currentValue, percentage: getPercentage(FINANCIAL_DATA.HSI), yearToDate: getYTD(FINANCIAL_DATA.HSI)},
//   { category: "indices", name: "SSE Composite - Shanghai", value: FINANCIAL_DATA.SSE.currentValue, percentage: getPercentage(FINANCIAL_DATA.SSE), yearToDate: getYTD(FINANCIAL_DATA.SSE)},
//   { category: "indices", name: "KOSPI Composite - Seúl", value: FINANCIAL_DATA.KOSPI.currentValue, percentage: getPercentage(FINANCIAL_DATA.KOSPI), yearToDate: getYTD(FINANCIAL_DATA.KOSPI)},
//   { category: "indices", name: "ASX 200 - Sydney", value: FINANCIAL_DATA.ASX.currentValue, percentage: getPercentage(FINANCIAL_DATA.ASX), yearToDate: getYTD(FINANCIAL_DATA.ASX)},
//   { category: "indices", name: "NZX 50 - Wellington", value: FINANCIAL_DATA.NZX.currentValue, percentage: getPercentage(FINANCIAL_DATA.NZX), yearToDate: getYTD(FINANCIAL_DATA.NZX)},
//   { category: "indices", name: "BSE Sensex - Bombay", value: FINANCIAL_DATA.SENSEX.currentValue, percentage: getPercentage(FINANCIAL_DATA.SENSEX), yearToDate: getYTD(FINANCIAL_DATA.SENSEX)}
// ]

// const bonds = [
//   { category: "bonds", name: "US Treasury Bill - 3M", yield: FINANCIAL_DATA.T3M.yield, change: FINANCIAL_DATA.T3M.change, yearToDate: FINANCIAL_DATA.T3M.yield - FINANCIAL_DATA.T3M.yearOpen },
//   { category: "bonds", name: "US Treasury Note - 2Y", yield: FINANCIAL_DATA.T2Y.yield, change: FINANCIAL_DATA.T2Y.change, yearToDate: FINANCIAL_DATA.T2Y.yield - FINANCIAL_DATA.T2Y.yearOpen },
//   { category: "bonds", name: "US Treasury Note - 10Y", yield: FINANCIAL_DATA.T10Y.yield, change: FINANCIAL_DATA.T10Y.change, yearToDate: FINANCIAL_DATA.T10Y.yield - FINANCIAL_DATA.T10Y.yearOpen },
//   { category: "bonds", name: "US Treasury Bond - 30Y", yield: FINANCIAL_DATA.T30Y.yield, change: FINANCIAL_DATA.T30Y.change, yearToDate: FINANCIAL_DATA.T30Y.yield - FINANCIAL_DATA.T30Y.yearOpen },
// ]

// const forex = [
//   { category: "currencies", name: "EUR/USD", value: FINANCIAL_DATA.EURUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.EURUSD), yearToDate: getYTD(FINANCIAL_DATA.EURUSD)},
//   { category: "currencies", name: "USD/JPY", value: FINANCIAL_DATA.USDJPY.currentValue, percentage: getPercentage(FINANCIAL_DATA.USDJPY), yearToDate: getYTD(FINANCIAL_DATA.USDJPY)},
//   { category: "currencies", name: "GBP/USD", value: FINANCIAL_DATA.GBPUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.GBPUSD), yearToDate: getYTD(FINANCIAL_DATA.GBPUSD)},
// ]

// const commodities = [
//   { category: "commodities", name: "Oro spot", value: FINANCIAL_DATA.XAUUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.XAUUSD), yearToDate: getYTD(FINANCIAL_DATA.XAUUSD)},
//   { category: "commodities", name: "Petróleo crudo - West Texas", value: FINANCIAL_DATA.WTI.currentValue, percentage: getPercentage(FINANCIAL_DATA.WTI), yearToDate: getYTD(FINANCIAL_DATA.WTI)},
//   { category: "commodities", name: "Petróleo crudo - Brent", value: FINANCIAL_DATA.BRENT.currentValue, percentage: getPercentage(FINANCIAL_DATA.BRENT), yearToDate: getYTD(FINANCIAL_DATA.BRENT)},
// ]

// const magnificent7 = [
//   { category: "M7", name: "Microsoft", symbol: "MSFT", value: FINANCIAL_DATA.MSFT.currentValue, percentage: getPercentage(FINANCIAL_DATA.MSFT), yearToDate: getYTD(FINANCIAL_DATA.MSFT)},
//   { category: "M7", name: "Apple", symbol: "AAPL", value: FINANCIAL_DATA.AAPL.currentValue, percentage: getPercentage(FINANCIAL_DATA.AAPL), yearToDate: getYTD(FINANCIAL_DATA.AAPL)},
//   { category: "M7", name: "Nvdia", symbol: "NVDA", value: FINANCIAL_DATA.NVDA.currentValue, percentage: getPercentage(FINANCIAL_DATA.NVDA), yearToDate: getYTD(FINANCIAL_DATA.NVDA)},
//   { category: "M7", name: "Amazon", symbol: "AMZN", value: FINANCIAL_DATA.AMZN.currentValue, percentage: getPercentage(FINANCIAL_DATA.AMZN), yearToDate: getYTD(FINANCIAL_DATA.AMZN)},
//   { category: "M7", name: "Alphabet", symbol: "GOOG", value: FINANCIAL_DATA.GOOG.currentValue, percentage: getPercentage(FINANCIAL_DATA.GOOG), yearToDate: getYTD(FINANCIAL_DATA.GOOG)},
//   { category: "M7", name: "Meta", symbol: "META", value: FINANCIAL_DATA.META.currentValue, percentage: getPercentage(FINANCIAL_DATA.META), yearToDate: getYTD(FINANCIAL_DATA.META)},
//   { category: "M7", name: "Tesla", symbol: "TSLA", value: FINANCIAL_DATA.TSLA.currentValue, percentage: getPercentage(FINANCIAL_DATA.TSLA), yearToDate: getYTD(FINANCIAL_DATA.TSLA)},
//   { category: "M7", name: "Netflix", symbol: "NFLX", value: FINANCIAL_DATA.NFLX.currentValue, percentage: getPercentage(FINANCIAL_DATA.NFLX), yearToDate: getYTD(FINANCIAL_DATA.NFLX)}
// ]


export default function App() {

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <Table category="indices" title="" data={openingTable}/>
        {/* <Table category="indices" title="Indices Europa" data={indicesEurope}/>
        <Table category="indices" title="Indices Asia" data={indicesAsia}/>
        <Table category="bonds" title="Bonos" data={bonds} />
        <Table category="currencies" title="Forex" data={forex} />
        <Table category="M7" title="Las Magníficas 7+ " data={magnificent7} /> */}
      </div>
    </>
  )
}

