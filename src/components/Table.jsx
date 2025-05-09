import { useRef } from "react";
import { toPng } from "html-to-image";

import Headings from "./Headings";
import Row from "./Row";

export default function Table({ category, title, data }) {

    const tableRef = useRef();

    const handleDownload = async () => {
        if (!tableRef.current) return;

        try {
        const dataUrl = await toPng(tableRef.current);
        const link = document.createElement('a');
        link.download = `${category}_Table.png`;
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
                <Headings category={category} title={title} />
                {data.map((item, index) => (
                    <Row key={`temp-${index}`} id={index} item={item} category={category} numRows={numRows} />
                ))}
            </div>
            <button onClick={handleDownload} className="w-40 h-12 rounded-2xl bg-cyan-500 cursor-pointer text-slate-50 font-bold mb-24 hover:bg-cyan-300 hover:text-slate-600">Download</button>
        </>
    )
}