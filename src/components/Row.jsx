import Change from "./Change";
import MSFT from "../resources/icons/MSFT.png";
import AAPL from "../resources/icons/AAPL.png";
import NVDA from "../resources/icons/NVDA.png";
import AMZN from "../resources/icons/AMZN.png";
import GOOG from "../resources/icons/GOOG.png";
import META from "../resources/icons/META.png";
import TSLA from "../resources/icons/TSLA.png";
import NFLX from "../resources/icons/NFLX.png";

export default function Row({ id, item, numRows }) {

    const category = item.category;

    //Formatting logic
    let minimumFractionDigits = 1, maximumFractionDigits = 2

    if (category === "currencies") {
        minimumFractionDigits = 1;
        maximumFractionDigits = 4;
    } else if (category === "commodities") {
        minimumFractionDigits = 2;
    } else if (category === "futures" || category === "bonds") {
        maximumFractionDigits = 3;
    }

    const symbol = category === "commodities" ? "$" : "";

    const even = id % 2 === 0;
    const bgColor = even ? " bg-slate-100 " : " bg-slate-200 ";
    const bgIcon = even ? " bg-slate-200 " : " bg-slate-100";
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
        if (category === "indices" || category === "currencies" || category === "commodities") {
            category = "default";
        }

        const formatters = {
            2: {
                default: () => symbol + formatterValue.format(item.value),
                futures: () => "",
                bonds: () => formatterValue.format(item.yield),
                M7: () => symbol + formatterValue.format(item.value)
            },
            3: {
                default: () => formatterChange.format(item.percentage),
                futures: () => formatterValue.format(item.value),
                bonds: () => formatterValue.format(item.change),
                M7: () => formatterChange.format(item.percentage)
            },
            4: {
                default: () => formatterChange.format(item.yearToDate),
                futures: () => formatterChange.format(item.changePer),
                bonds: () => formatterValue.format(item.yearToDate),
                M7: () => formatterChange.format(item.yearToDate)
            },
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
    

    const defaultCategory = category === "indices" || category === "currencies" || category === "commodities";
    // const futures = category === "Futuros";
    const bonds = category === "bonds";
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
                    <Change value={getContent(category, 3)} percentage/>
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
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 2) + "%"}</h4>
                </div>
                <div className="w-[19%] flex items-center justify-end">
                    <Change value={getContent(category, 3)}/>
                </div>
                <div className="w-[20%] flex items-center justify-end">                
                    <Change value={getContent(category, 4)}/>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
            {/* {futures && <div className={"w-140 h-12 flex" + bgColor + bottomRounded}>
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
            </div>} */}
            {magnificent7 && <div className={"w-200 h-12 flex" + bgColor + bottomRounded}>
                <div className="w-[3.5%]"></div>
                <div className="w-[6.5%] flex items-center">
                    <div className={"h-10 w-10 rounded-full flex justify-center items-center" + bgIcon}><img src={getIcon(id)} className="h-5"/></div>
                </div>
                <div className="w-[15%] flex items-center">
                    <h4 className="font-semibold text-lg text-slate-800">{getContent(category, 1)}</h4>
                </div>
                <div className="w-[11.5%] flex items-center justify-start">                
                    <h4 className="font-semibold text-lg text-slate-800">{item.symbol}</h4>
                </div>
                <div className="w-[20%] flex items-center justify-end">                
                    <h4 className="font-semibold text-lg text-slate-800">{"$" + getContent(category, 2)}</h4>
                </div>
                <div className="w-[20%] flex items-center justify-end">                
                    <Change value={getContent(category, 3)} percentage/>
                </div>
                <div className="w-[20%] flex items-center justify-end">
                    <Change value={getContent(category, 4)} percentage/>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
        </>
    )
}