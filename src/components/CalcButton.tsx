import {cn} from "@/lib/utils.ts";
import {useContext} from "react";
import {CalcContext} from "@/context/CalcContext.tsx";

const operations = ["/", "x", "-", "+"]

interface  CalcButtonProps {
    label: string,
    className?: string,
}

const CalcButton = (props: CalcButtonProps) => {
    const { calc, setCalc } = useContext(CalcContext);

    const handleClick = () => {
        if (props.label == "=") {
            if (operations.includes(calc.num.slice(-1))) {
                setCalc(
                    {
                        num: calc.num.slice(0, -1),
                        res: eval(calc.num.slice(0, -1))
                    }
                );
            } else {
                setCalc(
                    {
                        ...calc,
                        res: eval(calc.num)
                    }
                );
            }

            console.log("=")
        } else if (props.label == "AC") {
            setCalc({
                num: "",
                res: 0
            })
            console.log("AC")
        } else if (operations.includes(calc.num.slice(-1)) && operations.includes(props.label)) {
            console.log("Operation")
            setCalc(
                {
                    ...calc,
                    num: calc.num.slice(0, -1) + props.label
                }
            );
        } else {
            console.log("number")
            setCalc(
                {
                    ...calc,
                    num: calc.num + props.label
                }
            );
        }
    }

    return (
        <button
            onClick={() => handleClick()}
            className={cn(
                "aspect-square sm:aspect-auto sm:p-12 flex flex-col items-center justify-center rounded-2xl bg-zinc-700 text-white text-2xl hover:bg-zinc-600 hover:shadow-xl",
                props.className,
            )}>
            {props.label}
        </button>
    )
}

export default CalcButton