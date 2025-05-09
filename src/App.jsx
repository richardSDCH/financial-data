import './App.css'
import { FINANCIAL_DATA } from "./resources/financialData";
import Table from "./components/Table";

//Functions
const getYTD = (data) => {
  return data.currentValue / data.yearOpen * 100 - 100;
}

const getPercentage = (data) => {
  return data.currentValue / data.prevClose * 100 - 100;
}

//Content
const futures = [
  { name: "S&P 500", value: FINANCIAL_DATA.SP500.value, changePer: FINANCIAL_DATA.SP500.changePer },
  { name: "Dow Jones", value: FINANCIAL_DATA.DOWJONES.value, changePer: FINANCIAL_DATA.DOWJONES.changePer },
  { name: "Nasdaq 100", value: FINANCIAL_DATA.NASDAQ100.value, changePer: FINANCIAL_DATA.NASDAQ100.changePer },
  { name: "Russell 2000", value: FINANCIAL_DATA.RUSSELL.value, changePer: FINANCIAL_DATA.RUSSELL.changePer },
  { name: "Oro", value: FINANCIAL_DATA.GOLD.value, changePer: FINANCIAL_DATA.GOLD.changePer },
  { name: "Petróleo crudo", value: FINANCIAL_DATA.OIL.value, changePer: FINANCIAL_DATA.OIL.changePer },
]

const indicesUS = [
  { name: "S&P 500", value: FINANCIAL_DATA.US500.currentValue, percentage: getPercentage(FINANCIAL_DATA.US500), yearToDate: getYTD(FINANCIAL_DATA.US500)},
  { name: "Nasdaq Composite", value: FINANCIAL_DATA.US100.currentValue, percentage: getPercentage(FINANCIAL_DATA.US100), yearToDate: getYTD(FINANCIAL_DATA.US100)},
  { name: "Dow Jones Industrial Average", value: FINANCIAL_DATA.US30.currentValue, percentage: getPercentage(FINANCIAL_DATA.US30), yearToDate: getYTD(FINANCIAL_DATA.US30)},
  { name: "Russell 2000", value: FINANCIAL_DATA.RUT.currentValue, percentage: getPercentage(FINANCIAL_DATA.RUT), yearToDate: getYTD(FINANCIAL_DATA.RUT)}
]

const indicesEurope = [
  { name: "Stoxx 600 - Unión Europea", value: FINANCIAL_DATA.SXXP.currentValue, percentage: getPercentage(FINANCIAL_DATA.SXXP), yearToDate: getYTD(FINANCIAL_DATA.SXXP)},
  { name: "FTSE 100 - Reino Unido", value: FINANCIAL_DATA.FTSE.currentValue, percentage: getPercentage(FINANCIAL_DATA.FTSE), yearToDate: getYTD(FINANCIAL_DATA.FTSE)},
  { name: "DAX - Alemania", value: FINANCIAL_DATA.DAX.currentValue, percentage: getPercentage(FINANCIAL_DATA.DAX), yearToDate: getYTD(FINANCIAL_DATA.DAX)},
  { name: "CAC40 - Francia", value: FINANCIAL_DATA.CAC40.currentValue, percentage: getPercentage(FINANCIAL_DATA.CAC40), yearToDate: getYTD(FINANCIAL_DATA.CAC40)},
  { name: "SMI - Suiza", value: FINANCIAL_DATA.SMI.currentValue, percentage: getPercentage(FINANCIAL_DATA.SMI), yearToDate: getYTD(FINANCIAL_DATA.SMI)},
  { name: "FTSE MIB - Italia", value: FINANCIAL_DATA.FTSEMIB.currentValue, percentage: getPercentage(FINANCIAL_DATA.FTSEMIB), yearToDate: getYTD(FINANCIAL_DATA.FTSEMIB)},
  { name: "IBEX 35 - España", value: FINANCIAL_DATA.IBEX.currentValue, percentage: getPercentage(FINANCIAL_DATA.IBEX), yearToDate: getYTD(FINANCIAL_DATA.IBEX)}
]

const indicesAsia = [
  { name: "Nikkei 225 - Japón", value: FINANCIAL_DATA.NI225.currentValue, percentage: getPercentage(FINANCIAL_DATA.NI225), yearToDate: getYTD(FINANCIAL_DATA.NI225)},
  { name: "Hang Seng - Hong Kong", value: FINANCIAL_DATA.HSI.currentValue, percentage: getPercentage(FINANCIAL_DATA.HSI), yearToDate: getYTD(FINANCIAL_DATA.HSI)},
  { name: "Shanghai Composite - China", value: FINANCIAL_DATA.SSE.currentValue, percentage: getPercentage(FINANCIAL_DATA.SSE), yearToDate: getYTD(FINANCIAL_DATA.SSE)},
  { name: "KOSPI Composite - Corea del Sur", value: FINANCIAL_DATA.KOSPI.currentValue, percentage: getPercentage(FINANCIAL_DATA.KOSPI), yearToDate: getYTD(FINANCIAL_DATA.KOSPI)},
  { name: "ASX 200 - Australia", value: FINANCIAL_DATA.ASX.currentValue, percentage: getPercentage(FINANCIAL_DATA.ASX), yearToDate: getYTD(FINANCIAL_DATA.ASX)},
  { name: "NZX 50 - Nueva Zelanda", value: FINANCIAL_DATA.NZX.currentValue, percentage: getPercentage(FINANCIAL_DATA.NZX), yearToDate: getYTD(FINANCIAL_DATA.NZX)},
  { name: "BSE Sensex - India", value: FINANCIAL_DATA.SENSEX.currentValue, percentage: getPercentage(FINANCIAL_DATA.SENSEX), yearToDate: getYTD(FINANCIAL_DATA.SENSEX)}
]

const bonds = [
  { name: "US Treasury Bill - 3M", yield: FINANCIAL_DATA.T3M.yield, change: FINANCIAL_DATA.T3M.change },
  { name: "US Treasury Note - 2Y", yield: FINANCIAL_DATA.T2Y.yield, change: FINANCIAL_DATA.T2Y.change },
  { name: "US Treasury Note - 10Y", yield: FINANCIAL_DATA.T10Y.yield, change: FINANCIAL_DATA.T10Y.change },
  { name: "US Treasury Bond - 30Y", yield: FINANCIAL_DATA.T30Y.yield, change: FINANCIAL_DATA.T30Y.change },
]

const forex = [
  { name: "US Dollar Index", value: FINANCIAL_DATA.DXY.currentValue, percentage: getPercentage(FINANCIAL_DATA.DXY), yearToDate: getYTD(FINANCIAL_DATA.DXY)},
  { name: "EUR/USD", value: FINANCIAL_DATA.EURUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.EURUSD), yearToDate: getYTD(FINANCIAL_DATA.EURUSD)},
  { name: "USD/JPY", value: FINANCIAL_DATA.USDJPY.currentValue, percentage: getPercentage(FINANCIAL_DATA.USDJPY), yearToDate: getYTD(FINANCIAL_DATA.USDJPY)},
  { name: "GBP/USD", value: FINANCIAL_DATA.GBPUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.GBPUSD), yearToDate: getYTD(FINANCIAL_DATA.GBPUSD)},
  { name: "Bitcoin", value: FINANCIAL_DATA.BTC.currentValue, percentage: getPercentage(FINANCIAL_DATA.BTC), yearToDate: getYTD(FINANCIAL_DATA.BTC)}
]

const commodities = [
  { name: "Oro spot", value: FINANCIAL_DATA.XAUUSD.currentValue, percentage: getPercentage(FINANCIAL_DATA.XAUUSD), yearToDate: getYTD(FINANCIAL_DATA.XAUUSD)},
  { name: "Petróleo crudo - West Texas", value: FINANCIAL_DATA.WTI.currentValue, percentage: getPercentage(FINANCIAL_DATA.WTI), yearToDate: getYTD(FINANCIAL_DATA.WTI)},
  { name: "Petróleo crudo - Brent", value: FINANCIAL_DATA.BRENT.currentValue, percentage: getPercentage(FINANCIAL_DATA.BRENT), yearToDate: getYTD(FINANCIAL_DATA.BRENT)},
]

const magnificent7 = [
  { name: "Microsoft - MSFT", value: FINANCIAL_DATA.MSFT.currentValue, percentage: getPercentage(FINANCIAL_DATA.MSFT), yearToDate: getYTD(FINANCIAL_DATA.MSFT), marketCap: FINANCIAL_DATA.MSFT.marketCap},
  { name: "Apple - AAPL", value: FINANCIAL_DATA.AAPL.currentValue, percentage: getPercentage(FINANCIAL_DATA.AAPL), yearToDate: getYTD(FINANCIAL_DATA.AAPL), marketCap: FINANCIAL_DATA.AAPL.marketCap},
  { name: "Nvdia - NVDA", value: FINANCIAL_DATA.NVDA.currentValue, percentage: getPercentage(FINANCIAL_DATA.NVDA), yearToDate: getYTD(FINANCIAL_DATA.NVDA), marketCap: FINANCIAL_DATA.NVDA.marketCap},
  { name: "Amazon - AMZN", value: FINANCIAL_DATA.AMZN.currentValue, percentage: getPercentage(FINANCIAL_DATA.AMZN), yearToDate: getYTD(FINANCIAL_DATA.AMZN), marketCap: FINANCIAL_DATA.AMZN.marketCap},
  { name: "Alphabet - GOOG", value: FINANCIAL_DATA.GOOG.currentValue, percentage: getPercentage(FINANCIAL_DATA.GOOG), yearToDate: getYTD(FINANCIAL_DATA.GOOG), marketCap: FINANCIAL_DATA.GOOG.marketCap},
  { name: "Meta - META", value: FINANCIAL_DATA.META.currentValue, percentage: getPercentage(FINANCIAL_DATA.META), yearToDate: getYTD(FINANCIAL_DATA.META), marketCap: FINANCIAL_DATA.META.marketCap},
  { name: "Tesla - TSLA", value: FINANCIAL_DATA.TSLA.currentValue, percentage: getPercentage(FINANCIAL_DATA.TSLA), yearToDate: getYTD(FINANCIAL_DATA.TSLA), marketCap: FINANCIAL_DATA.TSLA.marketCap},
  { name: "Netflix - NFLX", value: FINANCIAL_DATA.NFLX.currentValue, percentage: getPercentage(FINANCIAL_DATA.NFLX), yearToDate: getYTD(FINANCIAL_DATA.NFLX), marketCap: FINANCIAL_DATA.NFLX.marketCap}
]

export default function App() {

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <Table category="Futuros" title="Futuros" data={futures}/>
        <Table category="Default" title="Indices US" data={indicesUS}/>
        <Table category="Default" title="Indices Europa" data={indicesEurope}/>
        <Table category="Default" title="Indices Asia" data={indicesAsia}/>
        <Table category="Bonos" title="Bonos" data={bonds} />
        <Table category="Default" title="Monedas y crypto" data={forex} />
        <Table category="Default" title="Commodities" data={commodities} />
        <Table category="M7" title="Las 7+ Magníficas" data={magnificent7} />
      </div>
    </>
  )
}

