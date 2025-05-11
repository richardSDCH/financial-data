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
const openingTable = [
  { category: "indices", name: "S&P 500", value: yahooApiData['^GSPC'].closingPrice, percentage: getPercentage(yahooApiData['^GSPC'].closingPrice, yahooApiData['^GSPC'].previousClose), yearToDate: getYTD(yahooApiData['^GSPC'].closingPrice, FINANCIAL_DATA.yearOpen['^GSPC'])},
  { category: "indices", name: "Nasdaq Composite", value: yahooApiData['^IXIC'].closingPrice, percentage: getPercentage(yahooApiData['^IXIC'].closingPrice, yahooApiData['^IXIC'].previousClose), yearToDate: getYTD(yahooApiData['^IXIC'].closingPrice, FINANCIAL_DATA.yearOpen['^IXIC'])},
  { category: "indices", name: "Dow Jones", value: yahooApiData['^DJI'].closingPrice, percentage: getPercentage(yahooApiData['^DJI'].closingPrice, yahooApiData['^DJI'].previousClose), yearToDate: getYTD(yahooApiData['^DJI'].closingPrice, FINANCIAL_DATA.yearOpen['^DJI'])},
  { category: "indices", name: "Russell 2000", value: yahooApiData['^RUT'].closingPrice, percentage: getPercentage(yahooApiData['^RUT'].closingPrice, yahooApiData['^RUT'].previousClose), yearToDate: getYTD(yahooApiData['^RUT'].closingPrice, FINANCIAL_DATA.yearOpen['^RUT'])},
  { category: "indices", name: "Stoxx 600", value: yahooApiData['^STOXX'].closingPrice, percentage: getPercentage(yahooApiData['^STOXX'].closingPrice, yahooApiData['^STOXX'].previousClose), yearToDate: getYTD(yahooApiData['^STOXX'].closingPrice, FINANCIAL_DATA.yearOpen['^STOXX'])},
  { category: "indices", name: "Volatilidad", value: yahooApiData['^VIX'].closingPrice, percentage: getPercentage(yahooApiData['^VIX'].closingPrice, yahooApiData['^VIX'].previousClose), yearToDate: getYTD(yahooApiData['^VIX'].closingPrice, FINANCIAL_DATA.yearOpen['^VIX'])},
  { category: "indices", name: "US Dollar Index", value: yahooApiData['DX-Y.NYB'].closingPrice, percentage: getPercentage(yahooApiData['DX-Y.NYB'].closingPrice, yahooApiData['DX-Y.NYB'].previousClose), yearToDate: getYTD(yahooApiData['DX-Y.NYB'].closingPrice, FINANCIAL_DATA.yearOpen['DX-Y.NYB'])},
  { category: "bonds", name: "US Treasury Note - 10Y", yield: parseFloat(fredApiData.DGS10.closingYield), change: parseFloat(fredApiData.DGS10.closingYield) - parseFloat(fredApiData.DGS10.previousYield), yearToDate: parseFloat(fredApiData.DGS10.closingYield) - FINANCIAL_DATA.T10Y.yearOpen},
  { category: "commodities", name: "Oro", value: FINANCIAL_DATA.XAUUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.XAUUSD.currentValue, FINANCIAL_DATA.XAUUSD.prevClose), yearToDate: getYTD(FINANCIAL_DATA.XAUUSD.currentValue, FINANCIAL_DATA.XAUUSD.yearOpen)},
  { category: "commodities", name: "Petróleo - WTI", value: FINANCIAL_DATA.WTI.currentValue, percentage: getPercentage(FINANCIAL_DATA.WTI.currentValue, FINANCIAL_DATA.WTI.prevClose), yearToDate: getYTD(FINANCIAL_DATA.WTI.currentValue, FINANCIAL_DATA.WTI.yearOpen)},
  { category: "commodities", name: "Bitcoin", value: yahooApiData['BTC-USD'].closingPrice, percentage: getPercentage(yahooApiData['BTC-USD'].closingPrice, yahooApiData['BTC-USD'].previousClose), yearToDate: getYTD(yahooApiData['BTC-USD'].closingPrice, FINANCIAL_DATA.yearOpen['BTC-USD'])}
]

const indicesEurope = [
  { category: "indices", name: "FTSE 100 - Londres", value: yahooApiData['^FTSE'].closingPrice, percentage: getPercentage(yahooApiData['^FTSE'].closingPrice, yahooApiData['^FTSE'].previousClose), yearToDate: getYTD(yahooApiData['^FTSE'].closingPrice, FINANCIAL_DATA.yearOpen['^FTSE'])},
  { category: "indices", name: "DAX - Frankfurt", value: yahooApiData['^GDAXI'].closingPrice, percentage: getPercentage(yahooApiData['^GDAXI'].closingPrice, yahooApiData['^GDAXI'].previousClose), yearToDate: getYTD(yahooApiData['^GDAXI'].closingPrice, FINANCIAL_DATA.yearOpen['^GDAXI'])},
  { category: "indices", name: "CAC40 - Paris", value: yahooApiData['^FCHI'].closingPrice, percentage: getPercentage(yahooApiData['^FCHI'].closingPrice, yahooApiData['^FCHI'].previousClose), yearToDate: getYTD(yahooApiData['^FCHI'].closingPrice, FINANCIAL_DATA.yearOpen['^FCHI'])},
  { category: "indices", name: "SMI - Zurich", value: yahooApiData['^SSMI'].closingPrice, percentage: getPercentage(yahooApiData['^SSMI'].closingPrice, yahooApiData['^SSMI'].previousClose), yearToDate: getYTD(yahooApiData['^SSMI'].closingPrice, FINANCIAL_DATA.yearOpen['^SSMI'])},
  { category: "indices", name: "FTSE MIB - Milán", value: yahooApiData['FTSEMIB.MI'].closingPrice, percentage: getPercentage(yahooApiData['FTSEMIB.MI'].closingPrice, yahooApiData['FTSEMIB.MI'].previousClose), yearToDate: getYTD(yahooApiData['FTSEMIB.MI'].closingPrice, FINANCIAL_DATA.yearOpen['FTSEMIB.MI'])},
  { category: "indices", name: "IBEX 35 - Madrid", value: yahooApiData['^IBEX'].closingPrice, percentage: getPercentage(yahooApiData['^IBEX'].closingPrice, yahooApiData['^IBEX'].previousClose), yearToDate: getYTD(yahooApiData['^IBEX'].closingPrice, FINANCIAL_DATA.yearOpen['^IBEX'])}
]

const indicesAsia = [
  { category: "indices", name: "Nikkei 225 - Tokyo", value: yahooApiData['^N225'].closingPrice, percentage: getPercentage(yahooApiData['^N225'].closingPrice, yahooApiData['^N225'].previousClose), yearToDate: getYTD(yahooApiData['^N225'].closingPrice, FINANCIAL_DATA.yearOpen['^N225'])},
  { category: "indices", name: "Hang Seng - Hong Kong", value: yahooApiData['^HSI'].closingPrice, percentage: getPercentage(yahooApiData['^HSI'].closingPrice, yahooApiData['^HSI'].previousClose), yearToDate: getYTD(yahooApiData['^HSI'].closingPrice, FINANCIAL_DATA.yearOpen['^HSI'])},
  { category: "indices", name: "SSE Composite - Shanghai", value: yahooApiData['000001.SS'].closingPrice, percentage: getPercentage(yahooApiData['000001.SS'].closingPrice, yahooApiData['000001.SS'].previousClose), yearToDate: getYTD(yahooApiData['000001.SS'].closingPrice, FINANCIAL_DATA.yearOpen['000001.SS'])},
  { category: "indices", name: "KOSPI Composite - Seúl", value: yahooApiData['^KS11'].closingPrice, percentage: getPercentage(yahooApiData['^KS11'].closingPrice, yahooApiData['^KS11'].previousClose), yearToDate: getYTD(yahooApiData['^KS11'].closingPrice, FINANCIAL_DATA.yearOpen['^KS11'])},
  { category: "indices", name: "ASX 200 - Sydney", value: yahooApiData['^AXJO'].closingPrice, percentage: getPercentage(yahooApiData['^AXJO'].closingPrice, yahooApiData['^AXJO'].previousClose), yearToDate: getYTD(yahooApiData['^AXJO'].closingPrice, FINANCIAL_DATA.yearOpen['^AXJO'])},
  { category: "indices", name: "NZX 50 - Wellington", value: yahooApiData['^NZ50'].closingPrice, percentage: getPercentage(yahooApiData['^NZ50'].closingPrice, yahooApiData['^NZ50'].previousClose), yearToDate: getYTD(yahooApiData['^NZ50'].closingPrice, FINANCIAL_DATA.yearOpen['^NZ50'])},
  { category: "indices", name: "BSE Sensex - Bombay", value: yahooApiData['^BSESN'].closingPrice, percentage: getPercentage(yahooApiData['^BSESN'].closingPrice, yahooApiData['^BSESN'].previousClose), yearToDate: getYTD(yahooApiData['^BSESN'].closingPrice, FINANCIAL_DATA.yearOpen['^BSESN'])}
]

const bonds = [
  { category: "bonds", name: "US Treasury Bill - 3M", yield: fredApiData.DGS3MO.closingYield, change: fredApiData.DGS3MO.closingYield - fredApiData.DGS3MO.previousYield, yearToDate: fredApiData.DGS3MO.closingYield - FINANCIAL_DATA.T3M.yearOpen },
  { category: "bonds", name: "US Treasury Note - 2Y", yield: fredApiData.DGS2.closingYield, change: fredApiData.DGS2.closingYield - fredApiData.DGS2.previousYield, yearToDate: fredApiData.DGS2.closingYield - FINANCIAL_DATA.T2Y.yearOpen },
  { category: "bonds", name: "US Treasury Note - 10Y", yield: fredApiData.DGS10.closingYield, change: fredApiData.DGS10.closingYield - fredApiData.DGS10.previousYield, yearToDate: fredApiData.DGS10.closingYield - FINANCIAL_DATA.T10Y.yearOpen },
  { category: "bonds", name: "US Treasury Bond - 30Y", yield: fredApiData.DGS30.closingYield, change: fredApiData.DGS30.closingYield - fredApiData.DGS30.previousYield, yearToDate: fredApiData.DGS30.closingYield - FINANCIAL_DATA.T30Y.yearOpen },
]

const forex = [
  { category: "currencies", name: "EUR/USD", value: yahooApiData['EURUSD=X'].closingPrice, percentage: getPercentage(yahooApiData['EURUSD=X'].closingPrice, yahooApiData['EURUSD=X'].previousClose), yearToDate: getYTD(yahooApiData['EURUSD=X'].closingPrice, FINANCIAL_DATA.yearOpen['EURUSD=X'])},
  { category: "currencies", name: "USD/JPY", value: yahooApiData['GBPUSD=X'].closingPrice, percentage: getPercentage(yahooApiData['GBPUSD=X'].closingPrice, yahooApiData['GBPUSD=X'].previousClose), yearToDate: getYTD(yahooApiData['GBPUSD=X'].closingPrice, FINANCIAL_DATA.yearOpen['GBPUSD=X'])},
  { category: "currencies", name: "GBP/USD", value: yahooApiData['JPY=X'].closingPrice, percentage: getPercentage(yahooApiData['JPY=X'].closingPrice, yahooApiData['JPY=X'].previousClose), yearToDate: getYTD(yahooApiData['JPY=X'].closingPrice, FINANCIAL_DATA.yearOpen['JPY=X'])},
  { category: "currencies", name: "CHF/USD", value: yahooApiData['CHFUSD=X'].closingPrice, percentage: getPercentage(yahooApiData['CHFUSD=X'].closingPrice, yahooApiData['CHFUSD=X'].previousClose), yearToDate: getYTD(yahooApiData['CHFUSD=X'].closingPrice, FINANCIAL_DATA.yearOpen['CHFUSD=X'])},
  { category: "currencies", name: "USD/CNH", value: yahooApiData['CNH=X'].closingPrice, percentage: getPercentage(yahooApiData['CNH=X'].closingPrice, yahooApiData['CNH=X'].previousClose), yearToDate: getYTD(yahooApiData['CNH=X'].closingPrice, FINANCIAL_DATA.yearOpen['CNH=X'])}
]

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
        <Table category="indices" title="Indices Europa" data={indicesEurope}/>
        <Table category="indices" title="Indices Asia" data={indicesAsia}/>
        <Table category="bonds" title="Bonos" data={bonds} />
        <Table category="currencies" title="Forex" data={forex} />
        {/* <Table category="M7" title="Las Magníficas 7+ " data={magnificent7} /> */}
      </div>
    </>
  )
}

