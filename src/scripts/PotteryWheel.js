let multiplePots = []

export const makePottery = (shape, height, weight, temperature) => {
    const constructNewPot = {
        shape: shape,
        height: height,
        weight: weight,
        temperature: temperature,
        fired: false,
        cracked: fasle,


    }
    return fetch('http://localhost:8088/Pottery', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(constructNewPot)
    })
        .then(getPots)
}

export const getPots = () => {
    return fetch('http://localhost:8088/Pottery')
        .then(response => response.json())
        .then(parsedPots => {
            Pottery = parsedPots
        })
}

export const usePots = () => multiplePots.slice()