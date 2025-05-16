import { IoTriangle } from "react-icons/io5";

export default function Change({ value, percentage }) {

    const formatValue = (value) => {
        const threshold = 0.01;
        const isEffectivelyZero = Math.abs(value) < threshold;
        const formattedValue = isEffectivelyZero ? '0.00' : value;
        return formattedValue;
    };

    const formattedValue = formatValue(value);


    let symbol, textColor, rotation;
    const positive = formattedValue >= 0.01;
    const negative = formattedValue < -0.01;
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

    // if (value < 0.02 && value > -0.02) {
    //     console.log('Value received at Change component:', value);
    //     console.log('Formatted value:', formattedValue);
    //     console.log('Is value positive?', positive);
    //     console.log('Is value negative?', negative);
    //     console.log('Is value neutral?', neutral);
    // }



    // const symbol = value < 0 ? "" : "+";
    // const textColor = value < 0 ? "text-red-600" : "text-green-600";
    // const rotation = value < 0 ? "rotate-180" : "rotate-0";
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