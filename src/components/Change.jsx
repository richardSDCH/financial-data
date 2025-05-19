import { IoTriangle } from "react-icons/io5";

export default function Change({ value, percentage }) {

    const threshold = percentage ? 0.01 : 0.001;
    const formatValue = (value, threshold) => {
        const isEffectivelyZero = Math.abs(value) < threshold;
        const formattedValue = isEffectivelyZero ? '0.00' : value;
        return formattedValue;
    };

    const formattedValue = formatValue(value, threshold);

    let symbol, textColor, rotation;
    const positive = formattedValue >= threshold;
    const negative = formattedValue < threshold * -1;
    const neutral = !positive && !negative;

    if (positive) {
        symbol = "+"
    } else symbol = "";

    if (positive) {
        textColor = "text-green-600";
        rotation = "rotate-0"
    } else if (negative) {
        textColor = "text-red-600";
        rotation = "rotate-180"
    } else textColor = "";

    const percentageSymbol = percentage ? "%" : "";

    return (
        <div className={"flex items-center justify-end w-[6.75rem] " + textColor}>
            <h4 className="font-semibold text-lg">{symbol + formattedValue + percentageSymbol}</h4>
            <div className="w-6">
                {!neutral && <IoTriangle className={"ml-2 " + rotation}/>}
            </div>
        </div>
    )
}