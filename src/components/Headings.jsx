

export default function Headings({ category, title }) {

    // const getHeading = (category, colNum) => {
    //     let heading = category;
    //     if (colNum === 2) {
    //         if (category === "Futuros" || category === "Bonos") {
    //             heading = "";
    //         } else heading = "Valor";
    //     } else if (colNum === 3) {
    //         if (category === "Futuros") {
    //             heading = "Valor";
    //         } else if (category === "Bonos") {
    //             heading = "Retorno";
    //         } else heading = "1 día";
    //     } else if (colNum === 4) {
    //         if (category === "Futuros" || category === "Bonos") {
    //             heading = "1 día";
    //         } else heading = "YTD"
    //     }
    //     return heading;
    // }

    const getHeading = (category, colNum) => {
        const formatters = {
            2: {
                default: () => "Valor",
                Futuros: () => "",
                Bonos: () => "",
                M7: () => "Pre-apertura"
            },
            3: {
                default: () => "1 día",
                Futuros: () => "Valor",
                Bonos: () => "Retorno",
                M7: () => ""
            },
            4: {
                default: () => "YTD",
                Futuros: () => "1 día",
                Bonos: () => "1 día",
                M7: () => "YTD"
            },
            5: {
                default: () => "",
                Futuros: () => "",
                Bonos: () => "",
                M7: () => "Market Cap"
            },
        };
    
        const column = formatters[colNum];
        if (!column) return category;
    
        const formatterFn = column[category] || column.default;
        return formatterFn();
    };

    const defaultCategory = category !== "Futuros" && category !== "Bonos" && category !== "M7";
    const futures = category === "Futuros";
    const bonds = category === "Bonos";
    const magnificent7 = category === "M7";

    return (
        <>
            {defaultCategory && <div className="w-200 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[3.5%]"></div>
                <div className="w-[33%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{title}</h4>
                </div>
                <div className="w-[20%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 2)}</h4>
                </div>
                <div className="w-[20%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 3)}</h4>
                </div>
                <div className="w-[20%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 4)}</h4>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
            {bonds && <div className="w-200 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[3.5%]"></div>
                <div className="w-[33%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 1)}</h4>
                </div>
                <div className="w-[20%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 2)}</h4>
                </div>
                <div className="w-[20%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 3)}</h4>
                </div>
                <div className="w-[20%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 4)}</h4>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
            {futures && <div className="w-140 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[7.5%]"></div>
                <div className="w-[30%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 1)}</h4>
                </div>
                <div className="w-[0%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 2)}</h4>
                </div>
                <div className="w-[27.5%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-2">{getHeading(category, 3)}</h4>
                </div>
                <div className="w-[27.5%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50 mr-3.5">{getHeading(category, 4)}</h4>
                </div>
                <div className="w-[7.5%]"></div>
            </div>}
            {magnificent7 && <div className="w-200 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[3.5%]"></div>
                <div className="w-[27%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{title}</h4>
                </div>
                <div className="w-[19%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-0.5">{getHeading(category, 2)}</h4>
                </div>
                <div className="w-[12%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 3)}</h4>
                </div>
                <div className="w-[17.5%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50 mr-4.5">{getHeading(category, 4)}</h4>
                </div>
                <div className="w-[17.5%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 5)}</h4>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
        </>
    )
}