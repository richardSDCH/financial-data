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
  { category: "indices", name: "VIX - Volatilidad", value: yahooApiData['^VIX'].closingPrice, percentage: getPercentage(yahooApiData['^VIX'].closingPrice, yahooApiData['^VIX'].previousClose), yearToDate: getYTD(yahooApiData['^VIX'].closingPrice, FINANCIAL_DATA.yearOpen['^VIX'])},
  { category: "indices", name: "US Dollar Index", value: yahooApiData['DX-Y.NYB'].closingPrice, percentage: getPercentage(yahooApiData['DX-Y.NYB'].closingPrice, yahooApiData['DX-Y.NYB'].previousClose), yearToDate: getYTD(yahooApiData['DX-Y.NYB'].closingPrice, FINANCIAL_DATA.yearOpen['DX-Y.NYB'])},
  { category: "bonds", name: "US Treasury Note - 10Y", yield: parseFloat(fredApiData.DGS10.closingYield), change: parseFloat(fredApiData.DGS10.closingYield) - parseFloat(fredApiData.DGS10.previousYield), yearToDate: parseFloat(fredApiData.DGS10.closingYield) - FINANCIAL_DATA.T10Y.yearOpen},
  { category: "commodities", name: "Oro", value: FINANCIAL_DATA.XAUUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.XAUUSD.currentValue, FINANCIAL_DATA.XAUUSD.prevClose), yearToDate: getYTD(FINANCIAL_DATA.XAUUSD.currentValue, FINANCIAL_DATA.XAUUSD.yearOpen)},
  { category: "commodities", name: "Petróleo - West Texas", value: FINANCIAL_DATA.WTI.currentValue, percentage: getPercentage(FINANCIAL_DATA.WTI.currentValue, FINANCIAL_DATA.WTI.prevClose), yearToDate: getYTD(FINANCIAL_DATA.WTI.currentValue, FINANCIAL_DATA.WTI.yearOpen)},
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
  { category: "indices", name: "ASX 200 - Australia", value: yahooApiData['^AXJO'].closingPrice, percentage: getPercentage(yahooApiData['^AXJO'].closingPrice, yahooApiData['^AXJO'].previousClose), yearToDate: getYTD(yahooApiData['^AXJO'].closingPrice, FINANCIAL_DATA.yearOpen['^AXJO'])},
  { category: "indices", name: "NZX 50 - Nueva Zelanda", value: yahooApiData['^NZ50'].closingPrice, percentage: getPercentage(yahooApiData['^NZ50'].closingPrice, yahooApiData['^NZ50'].previousClose), yearToDate: getYTD(yahooApiData['^NZ50'].closingPrice, FINANCIAL_DATA.yearOpen['^NZ50'])},
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
  { category: "currencies", name: "USD/JPY", value: yahooApiData['JPY=X'].closingPrice, percentage: getPercentage(yahooApiData['JPY=X'].closingPrice, yahooApiData['JPY=X'].previousClose), yearToDate: getYTD(yahooApiData['JPY=X'].closingPrice, FINANCIAL_DATA.yearOpen['JPY=X'])},
  { category: "currencies", name: "GBP/USD", value: yahooApiData['GBPUSD=X'].closingPrice, percentage: getPercentage(yahooApiData['GBPUSD=X'].closingPrice, yahooApiData['GBPUSD=X'].previousClose), yearToDate: getYTD(yahooApiData['GBPUSD=X'].closingPrice, FINANCIAL_DATA.yearOpen['GBPUSD=X'])},
  { category: "currencies", name: "CHF/USD", value: yahooApiData['CHFUSD=X'].closingPrice, percentage: getPercentage(yahooApiData['CHFUSD=X'].closingPrice, yahooApiData['CHFUSD=X'].previousClose), yearToDate: getYTD(yahooApiData['CHFUSD=X'].closingPrice, FINANCIAL_DATA.yearOpen['CHFUSD=X'])},
  { category: "currencies", name: "USD/CNH", value: yahooApiData['CNH=X'].closingPrice, percentage: getPercentage(yahooApiData['CNH=X'].closingPrice, yahooApiData['CNH=X'].previousClose), yearToDate: getYTD(yahooApiData['CNH=X'].closingPrice, FINANCIAL_DATA.yearOpen['CNH=X'])}
]

const magnificent7 = [
  { category: "M7", name: "Microsoft", symbol: "MSFT", value: yahooApiData['MSFT'].closingPrice, percentage: getPercentage(yahooApiData['MSFT'].closingPrice, yahooApiData['MSFT'].previousClose), yearToDate: getYTD(yahooApiData['MSFT'].closingPrice, FINANCIAL_DATA.yearOpen['MSFT'])},
  { category: "M7", name: "Apple", symbol: "AAPL", value: yahooApiData['AAPL'].closingPrice, percentage: getPercentage(yahooApiData['AAPL'].closingPrice, yahooApiData['AAPL'].previousClose), yearToDate: getYTD(yahooApiData['AAPL'].closingPrice, FINANCIAL_DATA.yearOpen['AAPL'])},
  { category: "M7", name: "Nvdia", symbol: "NVDA", value: yahooApiData['NVDA'].closingPrice, percentage: getPercentage(yahooApiData['NVDA'].closingPrice, yahooApiData['NVDA'].previousClose), yearToDate: getYTD(yahooApiData['NVDA'].closingPrice, FINANCIAL_DATA.yearOpen['NVDA'])},
  { category: "M7", name: "Amazon", symbol: "AMZN", value: yahooApiData['AMZN'].closingPrice, percentage: getPercentage(yahooApiData['AMZN'].closingPrice, yahooApiData['AMZN'].previousClose), yearToDate: getYTD(yahooApiData['AMZN'].closingPrice, FINANCIAL_DATA.yearOpen['AMZN'])},
  { category: "M7", name: "Alphabet", symbol: "GOOG", value: yahooApiData['GOOG'].closingPrice, percentage: getPercentage(yahooApiData['GOOG'].closingPrice, yahooApiData['GOOG'].previousClose), yearToDate: getYTD(yahooApiData['GOOG'].closingPrice, FINANCIAL_DATA.yearOpen['GOOG'])},
  { category: "M7", name: "Meta", symbol: "META", value: yahooApiData['META'].closingPrice, percentage: getPercentage(yahooApiData['META'].closingPrice, yahooApiData['META'].previousClose), yearToDate: getYTD(yahooApiData['META'].closingPrice, FINANCIAL_DATA.yearOpen['META'])},
  { category: "M7", name: "Tesla", symbol: "TSLA", value: yahooApiData['TSLA'].closingPrice, percentage: getPercentage(yahooApiData['TSLA'].closingPrice, yahooApiData['TSLA'].previousClose), yearToDate: getYTD(yahooApiData['TSLA'].closingPrice, FINANCIAL_DATA.yearOpen['TSLA'])},
  { category: "M7", name: "Netflix", symbol: "NFLX", value: yahooApiData['NFLX'].closingPrice, percentage: getPercentage(yahooApiData['NFLX'].closingPrice, yahooApiData['NFLX'].previousClose), yearToDate: getYTD(yahooApiData['NFLX'].closingPrice, FINANCIAL_DATA.yearOpen['NFLX'])}
]

const etfs = [
  { category: "etfs", name: "VOO", exposure: "S&P 500", value: yahooApiData['VOO'].closingPrice, percentage: getPercentage(yahooApiData['VOO'].closingPrice, yahooApiData['VOO'].previousClose), yearToDate: getYTD(yahooApiData['VOO'].closingPrice, FINANCIAL_DATA.yearOpen['VOO'])},
  { category: "etfs", name: "QQQM", exposure: "Nasdaq 100", value: yahooApiData['QQQM'].closingPrice, percentage: getPercentage(yahooApiData['QQQM'].closingPrice, yahooApiData['QQQM'].previousClose), yearToDate: getYTD(yahooApiData['QQQM'].closingPrice, FINANCIAL_DATA.yearOpen['QQQM'])},
  { category: "etfs", name: "IWM", exposure: "Russell 2000", value: yahooApiData['IWM'].closingPrice, percentage: getPercentage(yahooApiData['IWM'].closingPrice, yahooApiData['IWM'].previousClose), yearToDate: getYTD(yahooApiData['IWM'].closingPrice, FINANCIAL_DATA.yearOpen['IWM'])},
  { category: "etfs", name: "VTI", exposure: "Total US Stock", value: yahooApiData['VTI'].closingPrice, percentage: getPercentage(yahooApiData['VTI'].closingPrice, yahooApiData['VTI'].previousClose), yearToDate: getYTD(yahooApiData['VTI'].closingPrice, FINANCIAL_DATA.yearOpen['VTI'])},
  { category: "etfs", name: "VT", exposure: "Total world", value: yahooApiData['VT'].closingPrice, percentage: getPercentage(yahooApiData['VT'].closingPrice, yahooApiData['VT'].previousClose), yearToDate: getYTD(yahooApiData['VT'].closingPrice, FINANCIAL_DATA.yearOpen['VT'])},
  { category: "etfs", name: "VEU", exposure: "Total world ex-USA", value: yahooApiData['VEU'].closingPrice, percentage: getPercentage(yahooApiData['VEU'].closingPrice, yahooApiData['VEU'].previousClose), yearToDate: getYTD(yahooApiData['VEU'].closingPrice, FINANCIAL_DATA.yearOpen['VEU'])},
  { category: "etfs", name: "IBIT", exposure: "Bitcoin", value: yahooApiData['IBIT'].closingPrice, percentage: getPercentage(yahooApiData['IBIT'].closingPrice, yahooApiData['IBIT'].previousClose), yearToDate: getYTD(yahooApiData['IBIT'].closingPrice, FINANCIAL_DATA.yearOpen['IBIT'])},
  { category: "etfs", name: "BND", exposure: "Total US bond market", value: yahooApiData['BND'].closingPrice, percentage: getPercentage(yahooApiData['BND'].closingPrice, yahooApiData['BND'].previousClose), yearToDate: getYTD(yahooApiData['BND'].closingPrice, FINANCIAL_DATA.yearOpen['BND'])},
  { category: "etfs", name: "GLD", exposure: "Oro", value: yahooApiData['GLD'].closingPrice, percentage: getPercentage(yahooApiData['GLD'].closingPrice, yahooApiData['GLD'].previousClose), yearToDate: getYTD(yahooApiData['GLD'].closingPrice, FINANCIAL_DATA.yearOpen['GLD'])}
]

export default function App() {

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <Table category="indices" title="" data={openingTable}/>
        <Table category="indices" title="Indices Europa" data={indicesEurope}/>
        <Table category="indices" title="Indices Asia" data={indicesAsia}/>
        <Table category="bonds" title="Bonos" data={bonds} />
        <Table category="currencies" title="Forex" data={forex} />
        <Table category="M7" title="Las Magníficas 7+ " data={magnificent7} />
        <Table category="etfs" title="ETFs" data={etfs} />
      </div>
    </>
  )
}

