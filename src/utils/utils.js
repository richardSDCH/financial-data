import { FINANCIAL_DATA } from "../resources/financialData";

export const getDailyTableIndicators = (dailyData) => {

    const dailyIndicators = {};

    for (const symbol in dailyData) {
        const entries = dailyData[symbol];
        
        if (entries.length >= 2) {
            const latest = entries[entries.length - 1];
            const previous = entries[entries.length - 2];

            const close = latest.value;
            let dailyVariation;

            if (symbol.startsWith("DGS")) {
                dailyVariation = latest.value - previous.value;
            } else {
                dailyVariation = ((latest.value - previous.value) / previous.value) * 100;
            }

            dailyIndicators[symbol] = {
            close,
            dailyVariation: parseFloat(dailyVariation.toFixed(2)) // optional formatting
            };
        }
    }

    const getYTD = (close, yearOpen) => {
        const yearToDate = ((close - yearOpen) / yearOpen) * 100;
        return yearToDate;
    }

    //Build tables
    //Build opening table
    const openingTable = [
        { category: "indices", name: "S&P 500", value: dailyIndicators['^GSPC'].close, percentage: dailyIndicators['^GSPC'].dailyVariation, yearToDate: getYTD(dailyIndicators['^GSPC'].close, FINANCIAL_DATA.yearOpen['^GSPC'])},
        { category: "indices", name: "Nasdaq Composite", value: dailyIndicators['^IXIC'].close, percentage: dailyIndicators['^IXIC'].dailyVariation, yearToDate: getYTD(dailyIndicators['^IXIC'].close, FINANCIAL_DATA.yearOpen['^IXIC'])},
        { category: "indices", name: "Dow Jones", value: dailyIndicators['^DJI'].close, percentage: dailyIndicators['^DJI'].dailyVariation, yearToDate: getYTD(dailyIndicators['^DJI'].close, FINANCIAL_DATA.yearOpen['^DJI'])},
        { category: "indices", name: "Russell 2000", value: dailyIndicators['^RUT'].close, percentage: dailyIndicators['^RUT'].dailyVariation, yearToDate: getYTD(dailyIndicators['^RUT'].close, FINANCIAL_DATA.yearOpen['^RUT'])},
        { category: "indices", name: "Stoxx 600", value: dailyIndicators['^STOXX'].close, percentage: dailyIndicators['^STOXX'].dailyVariation, yearToDate: getYTD(dailyIndicators['^STOXX'].close, FINANCIAL_DATA.yearOpen['^STOXX'])},
        { category: "indices", name: "VIX - Volatilidad", value: dailyIndicators['^VIX'].close, percentage: dailyIndicators['^VIX'].dailyVariation, yearToDate: getYTD(dailyIndicators['^VIX'].close, FINANCIAL_DATA.yearOpen['^VIX'])},
        { category: "indices", name: "US Dollar Index", value: dailyIndicators['DX-Y.NYB'].close, percentage: dailyIndicators['DX-Y.NYB'].dailyVariation, yearToDate: getYTD(dailyIndicators['DX-Y.NYB'].close, FINANCIAL_DATA.yearOpen['DX-Y.NYB'])},
        { category: "bonds", name: "US Treasury Note - 10Y", yield: dailyIndicators['DGS10'].close, change: dailyIndicators['DGS10'].dailyVariation, yearToDate: dailyIndicators['DGS10'].close - FINANCIAL_DATA.yearOpen['DGS10']},
        { category: "commodities", name: "Oro", value: dailyIndicators['XAUUSD'].close, percentage: dailyIndicators['XAUUSD'].dailyVariation, yearToDate: getYTD(dailyIndicators['XAUUSD'].close, FINANCIAL_DATA.yearOpen['XAUUSD'])},
        { category: "commodities", name: "Petróleo - West Texas", value: dailyIndicators['WTICOUSD'].close, percentage: dailyIndicators['WTICOUSD'].dailyVariation, yearToDate: getYTD(dailyIndicators['WTICOUSD'].close, FINANCIAL_DATA.yearOpen['WTICOUSD'])},
        { category: "commodities", name: "Bitcoin", value: dailyIndicators['BTC-USD'].close, percentage: dailyIndicators['BTC-USD'].dailyVariation, yearToDate: getYTD(dailyIndicators['BTC-USD'].close, FINANCIAL_DATA.yearOpen['BTC-USD'])}
    ]

    //Build Indices Europe
    const indicesEurope = [
        { category: "indices", name: "FTSE 100 - Londres", value: dailyIndicators['^FTSE'].close, percentage: dailyIndicators['^FTSE'].dailyVariation, yearToDate: getYTD(dailyIndicators['^FTSE'].close, FINANCIAL_DATA.yearOpen['^FTSE'])},
        { category: "indices", name: "DAX - Frankfurt", value: dailyIndicators['^GDAXI'].close, percentage: dailyIndicators['^GDAXI'].dailyVariation, yearToDate: getYTD(dailyIndicators['^GDAXI'].close, FINANCIAL_DATA.yearOpen['^GDAXI'])},
        { category: "indices", name: "CAC40 - Paris", value: dailyIndicators['^FCHI'].close, percentage: dailyIndicators['^FCHI'].dailyVariation, yearToDate: getYTD(dailyIndicators['^FCHI'].close, FINANCIAL_DATA.yearOpen['^FCHI'])},
        { category: "indices", name: "SMI - Zurich", value: dailyIndicators['^SSMI'].close, percentage: dailyIndicators['^SSMI'].dailyVariation, yearToDate: getYTD(dailyIndicators['^SSMI'].close, FINANCIAL_DATA.yearOpen['^SSMI'])},
        { category: "indices", name: "FTSE MIB - Milán", value: dailyIndicators['FTSEMIB.MI'].close, percentage: dailyIndicators['FTSEMIB.MI'].dailyVariation, yearToDate: getYTD(dailyIndicators['FTSEMIB.MI'].close, FINANCIAL_DATA.yearOpen['FTSEMIB.MI'])},
        { category: "indices", name: "IBEX 35 - Madrid", value: dailyIndicators['^IBEX'].close, percentage: dailyIndicators['^IBEX'].dailyVariation, yearToDate: getYTD(dailyIndicators['^IBEX'].close, FINANCIAL_DATA.yearOpen['^IBEX'])}
    ]

    //Build Indices Asia
    const indicesAsia = [
        { category: "indices", name: "Nikkei 225 - Tokyo", value: dailyIndicators['^N225'].close, percentage: dailyIndicators['^N225'].dailyVariation, yearToDate: getYTD(dailyIndicators['^N225'].close, FINANCIAL_DATA.yearOpen['^N225'])},
        { category: "indices", name: "Hang Seng - Hong Kong", value: dailyIndicators['^HSI'].close, percentage: dailyIndicators['^HSI'].dailyVariation, yearToDate: getYTD(dailyIndicators['^HSI'].close, FINANCIAL_DATA.yearOpen['^HSI'])},
        { category: "indices", name: "SSE Composite - Shanghai", value: dailyIndicators['000001.SS'].close, percentage: dailyIndicators['000001.SS'].dailyVariation, yearToDate: getYTD(dailyIndicators['000001.SS'].close, FINANCIAL_DATA.yearOpen['000001.SS'])},
        { category: "indices", name: "KOSPI Composite - Seúl", value: dailyIndicators['^KS11'].close, percentage: dailyIndicators['^KS11'].dailyVariation, yearToDate: getYTD(dailyIndicators['^KS11'].close, FINANCIAL_DATA.yearOpen['^KS11'])},
        { category: "indices", name: "ASX 200 - Australia", value: dailyIndicators['^AXJO'].close, percentage: dailyIndicators['^AXJO'].dailyVariation, yearToDate: getYTD(dailyIndicators['^AXJO'].close, FINANCIAL_DATA.yearOpen['^AXJO'])},
        { category: "indices", name: "NZX 50 - Nueva Zelanda", value: dailyIndicators['^NZ50'].close, percentage: dailyIndicators['^NZ50'].dailyVariation, yearToDate: getYTD(dailyIndicators['^NZ50'].close, FINANCIAL_DATA.yearOpen['^NZ50'])},
        { category: "indices", name: "BSE Sensex - Bombay", value: dailyIndicators['^BSESN'].close, percentage: dailyIndicators['^BSESN'].dailyVariation, yearToDate: getYTD(dailyIndicators['^BSESN'].close, FINANCIAL_DATA.yearOpen['^BSESN'])}
    ]

    //Build Bonds
    const bonds = [
        { category: "bonds", name: "US Treasury Bill - 3M", yield: dailyIndicators['DGS3MO'].close, change: dailyIndicators['DGS3MO'].dailyVariation, yearToDate: dailyIndicators['DGS3MO'].close - FINANCIAL_DATA.yearOpen['DGS3MO']},
        { category: "bonds", name: "US Treasury Bill - 1Y", yield: dailyIndicators['DGS1'].close, change: dailyIndicators['DGS1'].dailyVariation, yearToDate: dailyIndicators['DGS1'].close - FINANCIAL_DATA.yearOpen['DGS1']},
        { category: "bonds", name: "US Treasury Note - 2Y", yield: dailyIndicators['DGS2'].close, change: dailyIndicators['DGS2'].dailyVariation, yearToDate: dailyIndicators['DGS2'].close - FINANCIAL_DATA.yearOpen['DGS2']},
        { category: "bonds", name: "US Treasury Note - 10Y", yield: dailyIndicators['DGS10'].close, change: dailyIndicators['DGS10'].dailyVariation, yearToDate: dailyIndicators['DGS10'].close - FINANCIAL_DATA.yearOpen['DGS10']},
        { category: "bonds", name: "US Treasury Bond - 30Y", yield: dailyIndicators['DGS30'].close, change: dailyIndicators['DGS30'].dailyVariation, yearToDate: dailyIndicators['DGS30'].close - FINANCIAL_DATA.yearOpen['DGS30']},
    ]

    //Build Forex
    const forex = [
        { category: "currencies", name: "EUR/USD", value: dailyIndicators['EURUSD=X'].close, percentage: dailyIndicators['EURUSD=X'].dailyVariation, yearToDate: getYTD(dailyIndicators['EURUSD=X'].close, FINANCIAL_DATA.yearOpen['EURUSD=X'])},
        { category: "currencies", name: "USD/JPY", value: dailyIndicators['JPY=X'].close, percentage: dailyIndicators['JPY=X'].dailyVariation, yearToDate: getYTD(dailyIndicators['JPY=X'].close, FINANCIAL_DATA.yearOpen['JPY=X'])},
        { category: "currencies", name: "GBP/USD", value: dailyIndicators['GBPUSD=X'].close, percentage: dailyIndicators['GBPUSD=X'].dailyVariation, yearToDate: getYTD(dailyIndicators['GBPUSD=X'].close, FINANCIAL_DATA.yearOpen['GBPUSD=X'])},
        { category: "currencies", name: "CHF/USD", value: dailyIndicators['CHFUSD=X'].close, percentage: dailyIndicators['CHFUSD=X'].dailyVariation, yearToDate: getYTD(dailyIndicators['CHFUSD=X'].close, FINANCIAL_DATA.yearOpen['CHFUSD=X'])},
        { category: "currencies", name: "USD/CNH", value: dailyIndicators['CNH=X'].close, percentage: dailyIndicators['CNH=X'].dailyVariation, yearToDate: getYTD(dailyIndicators['CNH=X'].close, FINANCIAL_DATA.yearOpen['CNH=X'])},
    ]

    //Build Magnificent 7+
    const magnificent7 = [
        { category: "M7", name: "Microsoft", symbol: "MSFT", value: dailyIndicators['MSFT'].close, percentage: dailyIndicators['MSFT'].dailyVariation, yearToDate: getYTD(dailyIndicators['MSFT'].close, FINANCIAL_DATA.yearOpen['MSFT'])},
        { category: "M7", name: "Apple", symbol: "AAPL", value: dailyIndicators['AAPL'].close, percentage: dailyIndicators['AAPL'].dailyVariation, yearToDate: getYTD(dailyIndicators['AAPL'].close, FINANCIAL_DATA.yearOpen['AAPL'])},
        { category: "M7", name: "Nvdia", symbol: "NVDA", value: dailyIndicators['NVDA'].close, percentage: dailyIndicators['NVDA'].dailyVariation, yearToDate: getYTD(dailyIndicators['NVDA'].close, FINANCIAL_DATA.yearOpen['NVDA'])},
        { category: "M7", name: "Amazon", symbol: "AMZN", value: dailyIndicators['AMZN'].close, percentage: dailyIndicators['AMZN'].dailyVariation, yearToDate: getYTD(dailyIndicators['AMZN'].close, FINANCIAL_DATA.yearOpen['AMZN'])},
        { category: "M7", name: "Alphabet", symbol: "GOOG", value: dailyIndicators['GOOG'].close, percentage: dailyIndicators['GOOG'].dailyVariation, yearToDate: getYTD(dailyIndicators['GOOG'].close, FINANCIAL_DATA.yearOpen['GOOG'])},
        { category: "M7", name: "Meta", symbol: "META", value: dailyIndicators['META'].close, percentage: dailyIndicators['META'].dailyVariation, yearToDate: getYTD(dailyIndicators['META'].close, FINANCIAL_DATA.yearOpen['META'])},
        { category: "M7", name: "Tesla", symbol: "TSLA", value: dailyIndicators['TSLA'].close, percentage: dailyIndicators['TSLA'].dailyVariation, yearToDate: getYTD(dailyIndicators['TSLA'].close, FINANCIAL_DATA.yearOpen['TSLA'])},
        { category: "M7", name: "Netflix", symbol: "NFLX", value: dailyIndicators['NFLX'].close, percentage: dailyIndicators['NFLX'].dailyVariation, yearToDate: getYTD(dailyIndicators['NFLX'].close, FINANCIAL_DATA.yearOpen['NFLX'])},
    ]

    //Build ETFs
    const etfs = [
        { category: "etfs", name: "VOO", exposure: "S&P 500", value: dailyIndicators['VOO'].close, percentage: dailyIndicators['VOO'].dailyVariation, yearToDate: getYTD(dailyIndicators['VOO'].close, FINANCIAL_DATA.yearOpen['VOO'])},
        { category: "etfs", name: "QQQM", exposure: "Nasdaq 100", value: dailyIndicators['QQQM'].close, percentage: dailyIndicators['QQQM'].dailyVariation, yearToDate: getYTD(dailyIndicators['QQQM'].close, FINANCIAL_DATA.yearOpen['QQQM'])},
        { category: "etfs", name: "IWM", exposure: "Russell 2000", value: dailyIndicators['IWM'].close, percentage: dailyIndicators['IWM'].dailyVariation, yearToDate: getYTD(dailyIndicators['IWM'].close, FINANCIAL_DATA.yearOpen['IWM'])},
        { category: "etfs", name: "VTI", exposure: "Total US Stock", value: dailyIndicators['VTI'].close, percentage: dailyIndicators['VTI'].dailyVariation, yearToDate: getYTD(dailyIndicators['VTI'].close, FINANCIAL_DATA.yearOpen['VTI'])},
        { category: "etfs", name: "VT", exposure: "Total world", value: dailyIndicators['VT'].close, percentage: dailyIndicators['VT'].dailyVariation, yearToDate: getYTD(dailyIndicators['VT'].close, FINANCIAL_DATA.yearOpen['VT'])},
        { category: "etfs", name: "VEU", exposure: "Total world ex-USA", value: dailyIndicators['VEU'].close, percentage: dailyIndicators['VEU'].dailyVariation, yearToDate: getYTD(dailyIndicators['VEU'].close, FINANCIAL_DATA.yearOpen['VEU'])},
        { category: "etfs", name: "IBIT", exposure: "Bitcoin", value: dailyIndicators['IBIT'].close, percentage: dailyIndicators['IBIT'].dailyVariation, yearToDate: getYTD(dailyIndicators['IBIT'].close, FINANCIAL_DATA.yearOpen['IBIT'])},
        { category: "etfs", name: "BND", exposure: "Total US bond market", value: dailyIndicators['BND'].close, percentage: dailyIndicators['BND'].dailyVariation, yearToDate: getYTD(dailyIndicators['BND'].close, FINANCIAL_DATA.yearOpen['BND'])},
        { category: "etfs", name: "GLD", exposure: "Oro", value: dailyIndicators['GLD'].close, percentage: dailyIndicators['GLD'].dailyVariation, yearToDate: getYTD(dailyIndicators['GLD'].close, FINANCIAL_DATA.yearOpen['GLD'])}
    ]

    //Creating data object
    const dailyTableIndicators = {
        openingTable,
        indicesEurope,
        indicesAsia,
        bonds,
        forex,
        magnificent7,
        etfs,
    };

    return dailyTableIndicators;
}