import De from "../models/De.js";

function genererStats() {

    let de6 = new De(6);

    const stats = []

    for(let i = 0; i < 4; i++) {
        stats.push(de6.lancer())
    }

    stats.sort((a, b) => a - b).shift()

    return stats.reduce((acc, value, index, array) => acc + value, 0)
}

export default genererStats