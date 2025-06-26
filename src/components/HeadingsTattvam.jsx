

export default function HeadingsTattvam({ category, title }) {

    const getHeading = (category, colNum) => {
        if (category === "indices" || category === "currencies" || category === "commodities") {
            category = "default";
        }

        const formatters = {
            2: {
                default: () => "Value",
                bonds: () => "Yield",
                M7: () => "Value",
                etfs: () => "Exposure"
            },
            3: {
                default: () => "1 day",
                bonds: () => "1 day",
                M7: () => "1 day",
                etfs: () => "Value"
            },
            4: {
                default: () => "YTD",
                bonds: () => "YTD",
                M7: () => "YTD",
                etfs: () => "1 day"
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
            {defaultCategory && <div className="w-200 h-10 flex bg-[#811517] rounded-t-xl">
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
            {bonds && <div className="w-200 h-10 flex bg-[#811517] rounded-t-xl">
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
            {magnificent7 && <div className="w-200 h-10 flex bg-[#811517] rounded-t-xl">
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
            {etfs && <div className="w-200 h-10 flex bg-[#811517] rounded-t-xl">
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