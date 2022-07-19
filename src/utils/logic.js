const discType = ['Your choice Disc', 'Putter', 'Mid-range', 'Driver', 'Under-Stable Disc', 'Over-Stable Disc', "Opponent Chooses Disc",
    "Fastest Disc", "Slowest Disc", "Most Over-Stable", "Most Under-Stable"];

const shotType = ["Backhand", "Forehand", "Hyzer", "Anhyzer", "Roller", "Tomahawk", "Backhand Roller", "Forehand Roller", "Thumber",
    "Grenade", "Spike Hyzer", "Standstill"];

const randomIndexValue = (array) => {
    const indexValue = Math.floor(Math.random() * array.length);
    return array[indexValue];
}

const addExtraValues = (array, valueToAdd, numToAdd) => {
    for (let i = 0; i < numToAdd; i++) {
        array.push(valueToAdd);
    };
}

const createEasyArrays = () => {
    const easyDiscTypeArray = [...discType];

    addExtraValues(easyDiscTypeArray, "Your choice Disc", 4);
    addExtraValues(easyDiscTypeArray, "Putter", 4);
    addExtraValues(easyDiscTypeArray, "Mid-range", 3);
    addExtraValues(easyDiscTypeArray, "Under-Stable Disc", 3);

    const easyShotTypeArray = [...shotType];

    addExtraValues(easyShotTypeArray, "Backhand", 4);
    addExtraValues(easyShotTypeArray, "Hyzer", 5);
    addExtraValues(easyShotTypeArray, "Standstill", 3);
    addExtraValues(easyShotTypeArray, "Forehand", 2);

    const newArrays = [
        easyDiscTypeArray, easyShotTypeArray
    ];

    return newArrays;
}

const createHardArrays = () => {
    const hardDiscTypeArray = [...discType];

    addExtraValues(hardDiscTypeArray, "Opponent Chooses Disc", 3);
    addExtraValues(hardDiscTypeArray, "Most Over-Stable", 3);
    addExtraValues(hardDiscTypeArray, "Most Under-Stable", 2);
    addExtraValues(hardDiscTypeArray, "Fastest Disc", 3);

    const hardShotTypeArray = [...shotType];

    addExtraValues(hardShotTypeArray, "Backhand Roller", 3);
    addExtraValues(hardShotTypeArray, "Grenade", 2);
    addExtraValues(hardShotTypeArray, "Tomahawk", 2);
    addExtraValues(hardShotTypeArray, "Thumber", 2);
    const newArrays = [
        hardDiscTypeArray, hardShotTypeArray
    ];

    return newArrays;
}

const createMediumArrays = () => {
    const newArrays = [discType, shotType]
    return newArrays;
}

const roll = (newArrays) => {
    const results = [
        randomIndexValue(newArrays[0]),
        randomIndexValue(newArrays[1])
    ];
    return results;
}

module.exports = { createEasyArrays, createMediumArrays, createHardArrays, roll };