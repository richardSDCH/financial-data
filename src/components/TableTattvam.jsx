import { useRef } from "react";
import { toPng } from "html-to-image";

import HeadingsTattvam from "./HeadingsTattvam";
import RowTattvam from "./RowTattvam";

export default function TableTattvam({ title, category, data }) {

    const tableRef = useRef();

    const handleDownload = async () => {
        if (!tableRef.current) return;

        try {
        const dataUrl = await toPng(tableRef.current);
        const link = document.createElement('a');
        link.download = `${title}_TattvamTable.png`;
        link.href = dataUrl;
        link.click();
        } catch (err) {
        console.error('Failed to download image', err);
        }
    };

    const numRows = data.length;

    return (
        <>
            <div ref={tableRef} className="mb-10">
                <HeadingsTattvam category={category} title={title} />
                {data.map((item, index) => (
                    <RowTattvam key={`temp-${index}`} id={index} item={item} numRows={numRows} />
                ))}
            </div>
            <button onClick={handleDownload} className="w-40 h-12 rounded-2xl bg-[#F89A25] cursor-pointer text-slate-800 font-bold mb-24 hover:bg-[#811517] hover:text-slate-50">Download</button>
        </>
    )
}