// Creates the HTML for single pottery objects

export const Pottery = (PotteryObj) => {
    return `
    <section id="pottery--${PotteryObj.id}">
    <h2>${PotteryObj.shape}</h2>
    <ul>
    <li>${PotteryObj.weight}</li>
    <li>${PotteryObj.height}</li>
    </ul>
    </section>
    `
}