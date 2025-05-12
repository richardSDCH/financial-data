

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
        if (category === "indices" || category === "currencies" || category === "commodities") {
            category = "default";
        }

        const formatters = {
            2: {
                default: () => "Valor",
                bonds: () => "Retorno",
                M7: () => "Valor",
                etfs: () => "Exposición"
            },
            3: {
                default: () => "1 día",
                bonds: () => "1 día",
                M7: () => "1 día",
                etfs: () => "Valor"
            },
            4: {
                default: () => "YTD",
                bonds: () => "YTD",
                M7: () => "YTD",
                etfs: () => "1 día"
            },
            5: {
                etfs: () => "YTD"
            }
        };
    
        const column = formatters[colNum];
        if (!column) return category;
    
        const formatterFn = column[category] || column.default;
        return formatterFn();
    };

    const defaultCategory = category === "indices" || category === "currencies" || category === "commodities";
    const bonds = category === "bonds";
    const magnificent7 = category === "M7";
    const etfs = category === "etfs";

    return (
        <>
            {defaultCategory && <div className="w-200 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[3.5%]"></div>
                <div className="w-[33%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{title}</h4>
                </div>
                <div className="w-[20%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-4">{getHeading(category, 2)}</h4>
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
            {magnificent7 && <div className="w-200 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[3.5%]"></div>
                <div className="w-[33%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50 ml-1.5">{title}</h4>
                </div>
                <div className="w-[25%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-12">{getHeading(category, 2)}</h4>
                </div>
                <div className="w-[15%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 3)}</h4>
                </div>
                <div className="w-[20%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 4)}</h4>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
            {etfs && <div className="w-200 h-10 flex bg-blue-800 rounded-t-xl">
                <div className="w-[3.5%]"></div>
                <div className="w-[18%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{title}</h4>
                </div>
                <div className="w-[21%] flex items-center font-semibold">
                    <h4 className="font-semibold text-lg text-slate-50">{getHeading(category, 2)}</h4>
                </div>
                <div className="w-[18%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-2">{getHeading(category, 3)}</h4>
                </div>
                <div className="w-[18%] flex items-center font-semibold justify-end">                
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 4)}</h4>
                </div>
                <div className="w-[18%] flex items-center justify-end">
                    <h4 className="font-semibold text-lg text-slate-50 mr-6">{getHeading(category, 5)}</h4>
                </div>
                <div className="w-[3.5%]"></div>
            </div>}
        </>
    )
}