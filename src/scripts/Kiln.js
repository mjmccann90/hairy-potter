import { getPots } from "./PotteryWheel.js"

export const firePottery = (potFireObject) => {
    if (potFireObject.temperature > 2200) {
        potFireObject.cracked = true
    }
    else {
        potFireObject.cracked = false
    }
    potFireObject.fired = true

    return fetch(`http://localhost:8088/Pottery/${potFireObject}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(potFireObject)
    })
        .then(getPots)
}