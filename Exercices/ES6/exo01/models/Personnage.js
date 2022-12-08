import genererStats from "../utils/genererStats.js";
import modificateur from "../utils/modificateur.js";
import De from "./De.js";

class Personnage {

    constructor(nom) {
        this.de4 = new De(4)
        this.de6 = new De(6)
        this.nom = nom
        this.force = genererStats()
        this.endurance = genererStats()
        this.pv = this.endurance + modificateur(this.endurance)
    }

    frapper (cible) {
        if (cible === this || !(cible instanceof Personnage) || cible.pv <= 0) return

        let degats = this.de4.lancer() + modificateur(this.force)
        // cible.pv = cible.pv - degats
        cible.pv -= degats
        console.log(`${this.nom} a infligé ${degats} points de dégats à ${cible.nom}`);
    }

    toString() {
        return `Nom : ${this.nom} Force: ${this.force} Endurance: ${this.endurance} PV: ${this.pv}`
    }

}

export { Personnage }