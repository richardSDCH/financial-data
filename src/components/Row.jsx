import Change from "./Change";
import MSFT from "../resources/icons/microsoft--big.svg";
import AAPL from "../resources/icons/apple--big.svg";
import NVDA from "../resources/icons/nvidia--big.svg";
import AMZN from "../resources/icons/amazon--big.svg";
import GOOG from "../resources/icons/alphabet--big.svg";
import META from "../resources/icons/meta-platforms--big.svg";
import TSLA from "../resources/icons/tesla--big.svg";
import NFLX from "../resources/icons/netflix--big.svg";

export default function Row({ id, item, category, numRows }) {

    //Formatting logic
    let minimumFractionDigits = 1, maximumFractionDigits = 2

    if (category === "Monedas y crypto") {
        minimumFractionDigits = 1;
        maximumFractionDigits = 4;
    } else if (category === "Commodities") {
        minimumFractionDigits = 2;
    } else if (category === "Futuros" || category === "Bonos") {
        maximumFractionDigits = 3;
    }

    const symbol = category === "Commodities" ? "$" : "";

    const even = id % 2 === 0;
    const bgColor = even ? " bg-slate-100 " : " bg-slate-200 ";
    const lastRow = id === numRows - 1;
    const bottomRounded = lastRow ? "rounded-b-xl" : "";

    const formatterValue = new Intl.NumberFormat('en-US', {
        minimumFractionDigits,
        maximumFractionDigits,
        // useGrouping: true is the default, which adds the thousands separator (,)
    });

    const formatterChange = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        // useGrouping: true is the default, which adds the thousands separator (,)
    });

    //Content
    const getContent = (category, colNum) => {

        const marketCapLetter = item.marketCap < 10 ? "T" : "B";

        const formatters = {
            2: {
                Default: () => symbol + formatterValue.format(item.value),
                Futuros: () => "",
                Bonos: () => "",
                M7: () => symbol + formatterValue.format(item.value)
            },
            3: {
                Default: () => formatterChange.format(item.percentage),
                Futuros: () => formatterValue.format(item.value),
                Bonos: () => formatterValue.format(item.yield),
                M7: () => formatterChange.format(item.percentage)
            },
            4: {
                Default: () => formatterChange.format(item.yearToDate),
                Futuros: () => formatterChange.format(item.changePer),
                Bonos: () => formatterValue.format(item.change),
                M7: () => formatterChange.format(item.yearToDate)
            },
            5: {
                Default: () => "",
                Futuros: () => "",
                Bonos: () => "",
                M7: () => formatterChange.format(item.marketCap) + marketCapLetter
            }
        };
    
        const column = formatters[colNum];
        if (!column) return item.name;
    
        const formatterFn = column[category];
        return formatterFn();
    };

    const getIcon = (id) => {
        const icons = {
            0: MSFT,
            1: AAPL,
            2: NVDA,
            3: AMZN,
            4: GOOG,
            5: META,
            6: TSLA,
            7: NFLX
        }
        const icon = icons[id];
        return icon;
    }
    

    const defaultCategory = category !== "Futuros" && category !== "Bonos" && category !== "M7";
    const futures = category === "Futuros";
    const bonds = category === "Bonos";
    const magnificent7 = category === "M7";

    return (
        <>
            {defaultCategory && <div className={"w-200 h-12 flex" + bgColor + bottomRounded}>
                <div className="w-[3.5%]"></div>
                <div className="w-[35%] flex items-center">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 1)}</h4>
                </div>
                <div className="w-[19%] flex items-center justify-end">                
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 2)}</h4>
                </div>
                <div className="w-[19%] flex items-center justify-end">
                    <Change value={getContent(category, 3)} percentage={defaultCategory} />
                </div>
                <div className="w-[20%] flex items-center justify-end">                
                    <Change value={getContent(category, 4)} percentage/>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
            {bonds && <div className={"w-200 h-12 flex" + bgColor + bottomRounded}>
                <div className="w-[3.5%]"></div>
                <div className="w-[35%] flex items-center">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 1)}</h4>
                </div>
                <div className="w-[19%] flex items-center justify-end">                
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 2)}</h4>
                </div>
                <div className="w-[19%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 3) + "%"}</h4>
                </div>
                <div className="w-[20%] flex items-center justify-end">                
                    <Change value={getContent(category, 4)}/>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
            {futures && <div className={"w-140 h-12 flex" + bgColor + bottomRounded}>
                <div className="w-[7.5%]"></div>
                <div className="w-[30%] flex items-center">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 1)}</h4>
                </div>
                <div className="w-[0%] flex items-center justify-end">                
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 2)}</h4>
                </div>
                <div className="w-[27.5%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 3)}</h4>
                </div>
                <div className="w-[27.5%] flex items-center justify-end">                
                    <Change value={getContent(category, 4)}/>
                </div>
                <div className="w-[7.5%]"></div>
            </div>}
            {magnificent7 && <div className={"w-200 h-12 flex" + bgColor + bottomRounded}>
                <div className="w-[3.5%]"></div>
                <div className="w-[6.5%] flex items-center">
                    <img src={getIcon(id)} className="rounded-full h-8"/>
                </div>
                <div className="w-[20.5%] flex items-center">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 1)}</h4>
                </div>
                <div className="w-[16.5%] flex items-center justify-end">                
                    <h4 className="font-semibold text-lg text-slate-800">{"$" + getContent(category, 2)}</h4>
                </div>
                <div className="w-[16.5%] flex items-center justify-end">                
                    <Change value={getContent(category, 3)} percentage/>
                </div>
                <div className="w-[16.5%] flex items-center justify-end">
                    <Change value={getContent(category, 4)} percentage/>
                </div>
                <div className="w-[16.5%] flex items-center justify-end">                
                    <h4 className="font-semibold text-lg text-slate-800">{"$" + getContent(category, 5)}</h4>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
        </>
    )
}