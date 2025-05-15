export const FINANCIAL_DATA = {
    
    yearOpen: {
        '^GSPC': 5903.26,              //S&P 500
        '^IXIC': 19403.90,             //Nasdaq Composite
        '^DJI': 42806.46,              //Dow Jones
        '^RUT': 2248.1292,             //Russell 2000
        '^STOXX': 507.61,              //Stoxx 600
        '^FTSE': 8128.0,               //FTSE 100
        '^GDAXI': 19923.07,            //DAX
        '^FCHI': 7374.59,              //CAC 40
        '^SSMI': 11642.63,             //SMI
        'FTSEMIB.MI': 34348.16,        //Milano Borsa
        '^IBEX': 11609.80,             //IBEX 35
        '^N225': 39945.42,             //Nikkei 225
        '^HSI': 19932.80,              //Hang Seng
        '000001.SS': 3349.9565,        //Shanghai Composite
        '^KS11': 2400.87,              //Kospi Composite
        '^AXJO': 8159.1,               //ASX 200
        '^NZ50': 13180.82,             //NZX 50
        '^BSESN': 78162.80,            //BSE Sensex
        '^VIX': 17.21,                 //CBOE Volatility
        'DX-Y.NYB': 108.526,           //US Dollar Index
        'EURUSD=X': 1.03549,           //EUR/USD
        'GBPUSD=X': 1.25113,           //GBP/USD
        'JPY=X': 157.312,              //USD/JPY
        'CHFUSD=X': 1.1018,            //CHF/USD
        'CNH=X': 7.33661,              //USD/CNH
        'BTC-USD': 93421,              //Bitcoin
        'XAUUSD': 2623.81,             //Gold spot
        'WTICOUSD': 72.050,            //West Texas crude oil
        'MSFT': 425.50,                //Microsoft
        'AAPL': 248.89,                //Apple
        'NVDA': 136.01,                //Nvidia
        'AMZN': 222.43,                //Amazon
        'GOOG': 191.57,                //Alphabet
        'META': 589.31,                //Meta
        'TSLA': 390.10,                //Tesla
        'NFLX': 895.80,                //Netflix
        'VOO': 542.02,                 //S&P 500
        'QQQM': 211.75,                //Nasdaq 100
        'IWM': 222.93,                 //Russell 2000
        'VTI': 291.45,                 //Total US Stock
        'VT': 117.98,                  //Total World
        'VEU': 57.44,                  //Total World ex-Usa
        'IBIT': 54.90,                 //Bitcoin
        'BND': 72.19,                  //Total Bond Market
        'GLD': 244.22,                 //Gold Bullion
        'DGS3MO': 4.500,               //US T-Bill 3-months
        'DGS2': 4.500,                 //US T-Note 2-years
        'DGS10': 4.500,                //US T-Note 10-years
        'DGS30': 4.500                 //US T-Bond 30-years
    },

    //Bonds - https://www.cnbc.com/bonds/
        T3M: 
        {
            yearOpen: 4.500,
            yield: 4.325,
            change: -0.007,
        },
    T2Y: 
        {
            yearOpen: 4.500,
            yield: 3.849,
            change: -0.044,
        },
    T10Y: 
        {
            yearOpen: 4.500,
            yield: 4.382,
            change: 0.007,
        },
    T30Y: 
        {
            yearOpen: 4.500,
            yield: 4.859,
            change: 0.028,
        },

    //Commodities
    //XAUUSD
    XAUUSD:     
        { 
            yearOpen: 2623.81,
            date: "14/05/2025",
            prevClose: 3250.18,
            currentValue: 3232.49
        },
    //WTICOUSD
    WTI:                                                                  
        { 
            yearOpen: 72.050,
            date: "14/05/2025",
            prevClose: 63.742,
            currentValue: 63.052
        }
}