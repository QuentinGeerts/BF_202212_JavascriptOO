import { Personnage } from "../models/Personnage.js";

let paladin = new Personnage("Hakhio")
let shaman = new Personnage("Amino")

console.log('paladin :>> ', paladin.toString());
console.log('shaman :>> ', shaman.toString());

paladin.frapper(shaman)
shaman.frapper(paladin)

console.log('paladin :>> ', paladin.toString());
console.log('shaman :>> ', shaman.toString());
