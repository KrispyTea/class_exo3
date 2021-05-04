//Exo1
class Objet {
    constructor(nom, prix){
        this.nom = nom,
        this.prix = prix
    }
}

let lampe = new Objet("lampe", 15);
let torche = new Objet("torche", 5);

let boite = [lampe, torche];

class Personnage{
    constructor(nom, sac, argent){
        this.nom = nom,
        this.sac = sac,
        this.argent = argent
    }
    prendre(objet){
        this.sac.push(boite[boite.indexOf(objet)]);
        boite.splice(boite.indexOf(objet), 1);
    }
    acheter(vendeur, objet){
        if (this.argent >= vendeur.sac[vendeur.sac.indexOf(objet)].prix) {
            this.sac.push(vendeur.sac[vendeur.sac.indexOf(objet)]);
            this.argent = this.argent - vendeur.sac[vendeur.sac.indexOf(objet)].prix;
            vendeur.argent = vendeur.argent + vendeur.sac[vendeur.sac.indexOf(objet)].prix
            vendeur.sac.splice(vendeur.sac.indexOf(objet), 1);
        } else {
            console.log("sale pauvre moins de 10 !!");
        }
    }
}

let ilyas = new Personnage("Ilyas", [], 50);
let cactus = new Personnage("Cactus", [], 50);
ilyas.prendre(torche);
cactus.acheter(ilyas, torche);

console.log(cactus);
console.log(ilyas);