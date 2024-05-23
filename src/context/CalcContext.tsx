import {createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState} from "react";


interface CalcProps {
    num: string;
    res: number;
}


interface CalcProviderProps {
    children?: ReactNode;
}

interface CalcContextProps {
    calc: CalcProps;
    setCalc: Dispatch<SetStateAction<CalcProps>>;
}

export const CalcContext = createContext<CalcContextProps>({} as CalcContextProps)


export default function CalcProvider({ children }:Readonly<CalcProviderProps>) {
    const [calc, setCalc] = useState<CalcProps>({
        num: "",
        res: 0
    })

    const value = useMemo(() => ({
        calc,
        setCalc
    }), [calc])

    return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>
}