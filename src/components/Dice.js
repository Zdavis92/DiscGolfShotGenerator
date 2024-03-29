import { React, useState } from "react";
import { createEasyArrays, createMediumArrays, createHardArrays, roll } from "../utils/logic";

const Dice = () => {
    const [arraysToUse, setArraysToUse] = useState();
    const [results, setResults] = useState(["Disc Type", "Disc Shot"]);
    const [showModal, setShowModal] = useState(true);

    const easySelected = () => {
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
        toggleModal();
    };

    const mediumSelected = () => {
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
        toggleModal();
    };

    const hardSelected = () => {
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
        toggleModal();
    };

    const toggleModal = () => {
        setShowModal(false);
    }

    const rollDice = () => {
        setResults(roll(arraysToUse));
    };

    return (
        <>
            {showModal && <div>
                <div className="bg-black opacity-80 h-screen w-screen absolute z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-sky-600 border-2 rounded-lg border-black h-fit w-3/4 flex flex-col justify-center text-center">
                    <h1 className="text-4xl m-4">Select a Difficulty</h1>
                    <div className="flex flex-col justify-between items-center m-2">
                        <button className="bg-sky-400 border-yellow-400 border-2 rounded-lg w-1/2 m-2 p-1 text-2xl font-semibold hover:bg-sky-700" onClick={easySelected}>Easy</button>
                        <button className="bg-sky-400 border-yellow-400 border-2 rounded-lg w-1/2 m-2 p-1 text-2xl font-semibold hover:bg-sky-700" onClick={mediumSelected}>Medium</button>
                        <button className="bg-sky-400 border-yellow-400 border-2 rounded-lg w-1/2 m-2 p-1 text-2xl font-semibold hover:bg-sky-700" onClick={hardSelected}>Hard</button>
                    </div>
                </div>
            </div>}
            <div className="absolute w-full lg:w-1/2 xl:w-1/3 h-1/2 flex flex-col items-center text-center justify-between top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-row w-11/12 justify-between mt-4">
                    <button id="easyBtn" className="bg-sky-600 border-black border-2 rounded-lg w-1/3 m-2 p-1 text-2xl font-semibold sm:mt-4" onClick={easySelected}>Easy</button>
                    <button id="medBtn" className="bg-sky-600 border-black border-2 rounded-lg w-1/3 m-2 p-1 text-2xl font-semibold sm:mt-4" onClick={mediumSelected}>Medium</button>
                    <button id="hardBtn" className="bg-sky-600 border-black border-2 rounded-lg w-1/3 m-2 p-1 text-2xl font-semibold sm:mt-4" onClick={hardSelected}>Hard</button>
                </div>
                <div className="flex flex-col w-full items-center">
                    <div className="bg-slate-300 border-black border-2 rounded-lg p-2 mb-4 w-3/4">
                        <p className="text-2xl">{results[0]}</p>
                    </div>
                    <div className="bg-slate-300 border-black border-2 rounded-lg p-2 mt-2 w-3/4">
                        <p className="text-2xl">{results[1]}</p>
                    </div>
                </div>
                <button className="bg-sky-600 border-black border-2 rounded-lg p-2 w-1/2 text-2xl font-semibold sm:mt-4 active:bg-sky-500 active:border-yellow-300" onClick={rollDice}>Roll!</button>
            </div>
        </>
    )
}

export default Dice;