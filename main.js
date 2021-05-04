class Objet {
    constructor (nom, prix) {
        this.nom = nom,
        this.prix = prix
    }
}
let bougie = new Objet ("bougie", 10)
let lampe = new Objet ("lampe", 20)

let tableau = [bougie, lampe]

class Personnage {
    constructor (nom, sac, argent) {
        this.nom = nom,
        this.sac = sac,
        this.argent = argent,
        this.prendre = (objet) => {
            this.sac.push(tableau[0]) 
        };
        this.acheter = (vendeur, objet) => {
            if (this.argent >= tableau.prix)
        }
    }
}