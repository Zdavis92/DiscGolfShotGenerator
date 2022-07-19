import { React, useState, useEffect } from "react";
import { createEasyArrays, createMediumArrays, createHardArrays, roll } from "../utils/logic";

const Dice = () => {
    const [arraysToUse, setArraysToUse] = useState();
    const [results, setResults] = useState(["Disc Type", "Disc Shot"]);

    const easySelected = () => {
        console.log("easy selected")
        let easyButton = document.getElementById('easyBtn');
        let mediumButton = document.getElementById('medBtn');
        let hardButton = document.getElementById('hardBtn');
        easyButton.classList.add("border-yellow-400");
        easyButton.classList.add("bg-sky-500");
        easyButton.classList.remove("border-black");
        easyButton.classList.remove("bg-sky-600");
        mediumButton.classList.remove("border-yellow-400");
        mediumButton.classList.remove("bg-sky-500");
        mediumButton.classList.add("border-black");
        mediumButton.classList.add("bg-sky-600");
        hardButton.classList.remove("border-yellow-400");
        hardButton.classList.remove("bg-sky-500");
        hardButton.classList.add("border-black");
        hardButton.classList.add("bg-sky-600");
        setArraysToUse(createEasyArrays());
    };

    const mediumSelected = () => {
        console.log("medium selected")
        let easyButton = document.getElementById('easyBtn');
        let mediumButton = document.getElementById('medBtn');
        let hardButton = document.getElementById('hardBtn');
        easyButton.classList.remove("border-yellow-400");
        easyButton.classList.remove("bg-sky-500");
        easyButton.classList.add("border-black");
        easyButton.classList.add("bg-sky-600");
        mediumButton.classList.add("border-yellow-400");
        mediumButton.classList.add("bg-sky-500");
        mediumButton.classList.remove("border-black");
        mediumButton.classList.remove("bg-sky-600");
        hardButton.classList.remove("border-yellow-400");
        hardButton.classList.remove("bg-sky-500");
        hardButton.classList.add("border-black");
        hardButton.classList.add("bg-sky-600");
        setArraysToUse(createMediumArrays());
    };

    const hardSelected = () => {
        console.log("hard selected")
        let easyButton = document.getElementById('easyBtn');
        let mediumButton = document.getElementById('medBtn');
        let hardButton = document.getElementById('hardBtn');
        easyButton.classList.remove("border-yellow-400");
        easyButton.classList.remove("bg-sky-500");
        easyButton.classList.add("border-black");
        easyButton.classList.add("bg-sky-600");
        mediumButton.classList.remove("border-yellow-400");
        mediumButton.classList.remove("bg-sky-500");
        mediumButton.classList.add("border-black");
        mediumButton.classList.add("bg-sky-600");
        hardButton.classList.add("border-yellow-400");
        hardButton.classList.add("bg-sky-500");
        hardButton.classList.remove("border-black");
        hardButton.classList.remove("bg-sky-600");
        setArraysToUse(createHardArrays());
    };

    const rollDice = () => {
        console.log(arraysToUse);
        setResults(roll(arraysToUse));
    };

    useEffect(() => {
        mediumSelected();
    }, []);

    return (
        <div className="absolute w-screen h-1/3 flex flex-col items-center text-center justify-between top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-row w-11/12 justify-between mb-2">
                <button id="easyBtn" className="bg-sky-600 border-black border-2 rounded-lg w-1/3 m-2 p-1 text-2xl font-semibold sm:mt-4" onClick={easySelected}>Easy</button>
                <button id="medBtn" className="bg-sky-600 border-black border-2 rounded-lg w-1/3 m-2 p-1 text-2xl font-semibold sm:mt-4" onClick={mediumSelected}>Medium</button>
                <button id="hardBtn" className="bg-sky-600 border-black border-2 rounded-lg w-1/3 m-2 p-1 text-2xl font-semibold sm:mt-4" onClick={hardSelected}>Hard</button>
            </div>
            <div className="flex flex-col w-screen items-center">
                <div className="bg-slate-300 border-black border-2 rounded-lg p-2 m-2 w-3/4">
                    <p className="text-2xl">{results[0]}</p>
                </div>
                <div className="bg-slate-300 border-black border-2 rounded-lg p-2 m-2 w-3/4">
                    <p className="text-2xl">{results[1]}</p>
                </div>
            </div>
            <button className="bg-sky-600 border-black border-2 rounded-lg p-2 w-1/2 text-2xl font-semibold sm:mt-4" onClick={rollDice}>Roll!</button>
        </div>
    )
}

export default Dice;