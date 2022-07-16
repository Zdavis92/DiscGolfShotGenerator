import { React, useState } from "react";
import roll from "../utils/logic";

const Dice = () => {
    const [results, setResults] = useState(["Disc Type", "Disc Shot"]);
    const rollDice = () => {
        setResults(roll());
    }
    return (
        <div className="absolute w-screen h-1/3 flex flex-col items-center text-center justify-between top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col w-screen items-center">
                <div className="bg-slate-300 border-black border-2 rounded-lg p-2 m-2 w-3/4">
                    <p className="text-2xl">{results[0]}</p>
                </div>
                <div className="bg-slate-300 border-black border-2 rounded-lg p-2 m-2 w-3/4">
                    <p className="text-2xl">{results[1]}</p>
                </div>
            </div>
            <button className="bg-sky-600 border-black border-2 rounded-lg p-2 w-1/2 text-2xl font-semibold" onClick={rollDice}>Roll!</button>
        </div>
    )
}

export default Dice;