export const FINANCIAL_DATA = {
    //Futures - https://finance.yahoo.com/markets/commodities/
    SP500: 
        { 
            date: "09/05/2025", 
            value: 5689.75, 
            changePer: 0.09 
        },
    DOWJONES:
        { 
            date: "09/05/2025", 
            value: 41460.00, 
            changePer: -0.02 
        },
    NASDAQ100:
        { 
            date: "09/05/2025", 
            value: 20176.50, 
            changePer: 0.14 
        },
    RUSSELL:
        { 
            date: "09/05/2025", 
            value: 2031.30, 
            changePer: 0.10 
        },
    GOLD: 
        { 
            date: "09/05/2025", 
            value: 3330.90, 
            changePer: 0.75 
        },
    OIL:
        { 
            date: "09/05/2025", 
            value: 61.01, 
            changePer: 1.84
        },
    
    //US Indices
    //SPX
    US500:                                                                 
        { 
            yearOpen: 5903.26, 
            date: "09/05/2025", 
            prevClose: 5631.27, 
            currentValue: 5663.95
        },
    //NASDAQ-IXIC
    US100:                                                                 
        { 
            yearOpen: 19403.90,
            date: "09/05/2025",
            prevClose: 17738.16,
            currentValue: 17928.14
        },
    //DJI
    US30:                                                          
        { 
            yearOpen: 42806.46,
            date: "09/05/2025",
            prevClose: 41113.97,
            currentValue: 41368.45
        },
    //RUT
    RUT:        
        { 
            yearOpen: 2248.1292,
            date: "09/05/2025",
            prevClose: 1989.6611,
            currentValue: 2026.4147
        },
    
    //EU Indices
    //SXXP
    SXXP:       
        { 
            yearOpen: 507.61,
            date: "09/05/2025",
            prevClose: 535.64,
            currentValue: 537.23
        },
    //FTSE-UKX
    FTSE:                                                                
        { 
            yearOpen: 8128.0,
            date: "09/05/2025",
            prevClose: 8556.9,
            currentValue: 8557.1
        },
    //DAX
    DAX:        
        { 
            yearOpen: 19923.07,
            date: "09/05/2025",
            prevClose: 23352.69,
            currentValue: 23462.47
        },
    //CAC40
    CAC40:      
        { 
            yearOpen: 7374.59,
            date: "09/05/2025",
            prevClose: 7694.43,
            currentValue: 7736.73
        },
    //SMI
    SMI:        
        { 
            yearOpen: 11642.63,
            date: "09/05/2025",
            prevClose: 12061.72,
            currentValue: 12067.00
        },
    //TVC-FTMIB
    FTSEMIB:                                                              
        { 
            yearOpen: 34348.16,
            date: "09/05/2025",
            prevClose: 38974.31,
            currentValue: 39239.16
        },
    //IBEX35
    IBEX:       
        { 
            yearOpen: 11609.80,
            date: "09/05/2025",
            prevClose: 13488.91,
            currentValue: 13525.31
        },
    
    //Asian Indices
    //NI225
    NI225:      
        { 
            yearOpen: 39945.42,
            date: "09/05/2025",
            prevClose: 36928.41,
            currentValue: 37503.11
        },
    //HSI
    HSI:        
        { 
            yearOpen: 19932.80,
            date: "09/05/2025",
            prevClose: 22775.92,
            currentValue: 22867.74
        },    
    //SSE-000001
    SSE:                                                         
        { 
            yearOpen: 3349.9565,
            date: "09/05/2025",
            prevClose: 3351.9958,
            currentValue: 3341.9989
        },
    //KOSPI
    KOSPI:      
        { 
            yearOpen: 2400.87,
            date: "09/05/2025",
            prevClose: 2579.48,
            currentValue: 2577.27
        },
    //ASX-XJO
    ASX:                                                                
        { 
            yearOpen: 8159.1,
            date: "09/05/2025",
            prevClose: 8191.7,
            currentValue: 8231.2
        },
    //NZ50G
    NZX:                                                                  
        { 
            yearOpen: 13180.82,
            date: "09/05/2025",
            prevClose: 12466.97,
            currentValue: 12605.06
        },
    //SENSEX
    SENSEX:        
        { 
            yearOpen: 78162.80,
            date: "09/05/2025",
            prevClose: 80334.81,
            currentValue: 79454.47
        },
    
    //Bonds - https://www.cnbc.com/bonds/
    T3M: {
        yield: 4.325,
        change: -0.007
    },
    T2Y: {
        yield: 3.849,
        change: -0.044
    },
    T10Y: {
        yield: 4.382,
        change: 0.007
    },
    T30Y: {
        yield: 4.859,
        change: 0.028
    },

    //Currencies & crypto
    //DXY
    DXY:        
        { 
            yearOpen: 108.526,
            date: "09/05/2025",
            prevClose: 100.636,
            currentValue: 100.367
        },
    //EURUSD
    EURUSD:     
        { 
            yearOpen: 1.03549,
            date: "09/05/2025",
            prevClose: 1.12247,
            currentValue: 1.12533
        },
    //GBPUSD
    GBPUSD:     
        { 
            yearOpen: 1.25113,
            date: "09/05/2025",
            prevClose: 1.32420,
            currentValue: 1.32768
        },
    //USDJPY
    USDJPY:     
        { 
            yearOpen: 157.312,
            date: "09/05/2025",
            prevClose: 145.894,
            currentValue: 145.103
        },
    //BTCUSD
    BTC:        
        { 
            yearOpen: 93421,
            date: "09/05/2025",
            prevClose: 103261,
            currentValue: 103070
        },
    
    //Commodities
    //XAUUSD
    XAUUSD:     
        { 
            yearOpen: 2623.81,
            date: "09/05/2025",
            prevClose: 3305.98,
            currentValue: 3330.93
        },
    //WTICOUSD
    WTI:                                                                  
        { 
            yearOpen: 72.050,
            date: "09/05/2025",
            prevClose: 60.443,
            currentValue: 61.226
        },
    //BRENT
    BRENT:      
        { 
            yearOpen: 74.935,
            date: "09/05/2025",
            prevClose: 62.895,
            currentValue: 63.685
        },

    //The Magnificent Seven
    //Microsoft
    MSFT:
        { 
            yearOpen: 425.50,
            date: "09/05/2025",
            prevClose: 433.35,
            currentValue: 438.90,
            marketCap: 3.26
        },
    //Apple
    AAPL:
        { 
            yearOpen: 248.89,
            date: "09/05/2025",
            prevClose: 196.25,
            currentValue: 197.41,
            marketCap: 2.95
        },
    //Nvidia
    NVDA:
        { 
            yearOpen: 136.01,
            date: "09/05/2025",
            prevClose: 117.06,
            currentValue: 117.33,
            marketCap: 2.86
        },
    //Amazon
        AMZN:
        { 
            yearOpen: 222.43,
            date: "09/05/2025",
            prevClose: 188.71,
            currentValue: 192.40,
            marketCap: 2.04
        },
    //Alphabet
    GOOG:
        { 
            yearOpen: 191.57,
            date: "09/05/2025",
            prevClose: 152.80,
            currentValue: 155.59,
            marketCap: 1.88
        },
    //Meta
    META:
        { 
            yearOpen: 589.31,
            date: "09/05/2025",
            prevClose: 596.81,
            currentValue: 603.35,
            marketCap: 1.50
        },
    //Tesla
    TSLA:
        { 
            yearOpen: 390.10,
            date: "09/05/2025",
            prevClose: 276.22,
            currentValue: 287.46,
            marketCap: 916.13
        },
    //Netflix
    NFLX:
        { 
            yearOpen: 895.80,
            date: "09/05/2025",
            prevClose: 1155.41,
            currentValue: 1144.81,
            marketCap: 487.04
        },
}