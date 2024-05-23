import CalcButton from "@/components/CalcButton.tsx";
import {useContext} from "react";
import {CalcContext} from "@/context/CalcContext.tsx";
import {buttons} from "@/data/buttons_data.ts";


function App() {
    const { calc } = useContext(CalcContext);



    return (
        <div className="flex flex-row justify-center">
            <div className="absolute bottom-0 w-full sm:max-w-3xl p-8">
                <div className="flex flex-col w-full items-end gap-2 mb-12">
                    <p className="text-3xl text-zinc-400">{calc.num}</p>
                    <h1 className="text-7xl font-semibold">{calc.res}</h1>
                </div>
                <div className="grid grid-cols-4 w-full  gap-3">
                    {buttons.map((value) => (
                        <CalcButton label={value.label} className={value.style}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App