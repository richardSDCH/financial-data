import { IoTriangle } from "react-icons/io5";

export default function Change({ value, percentage }) {

    const symbol = value < 0 ? "" : "+";
    const textColor = value < 0 ? "text-red-600" : "text-green-600";
    const rotation = value < 0 ? "rotate-180" : "rotate-0";
    const percentageSymbol = percentage ? "%" : "";

    return (
        <div className={"flex items-center " + textColor}>
            <h4 className="font-semibold text-lg">{symbol + value + percentageSymbol}</h4>
            <IoTriangle className={"ml-2 " + rotation} />
        </div>
    )
}