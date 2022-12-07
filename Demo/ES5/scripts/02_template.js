/**
 * Template
 */

// Création d'un template

function Personne (prenom = "Anonyme", nom = "Anonyme", age = 0, genre = "/", interets = []) {
    this.nomComplet = { prenom, nom };
    this.age = age;
    this.genre = genre;
    this.interets = interets

    Personne.prototype.sePresenter = function () {
        return `Bonjour, je m'appelle ${this.nomComplet.prenom} ${this.nomComplet.nom}`
    }
}

let p1 = new Personne("Quentin", "Geerts", 26, "masculin", ["Développement", "One Piece"])
let p2 = new Personne("Quentin", "Geerts", 26, "masculin", ["Développement", "One Piece"])
let p3 = new Personne("Quentin", "Geerts", 26, "masculin", ["Développement", "One Piece"])

let p4 = new Personne()

console.dir(p1);
console.dir(p2);
console.dir(p3);
console.dir(p4);

console.log(p1.sePresenter());