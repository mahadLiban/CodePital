// Class Patient
class Patient {
    constructor(nom, maladie, argent, poche, etat, traitement) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = traitement;
        this.goTo = (depart, arriver) => {
            arriver.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this));
            console.log(`${this.nom} est à :  ${depart.nom} et se dirige vers : ${arriver.nom}`);
        }
        this.takeCare = (money) => {
            this.argent -= traitement.prix;
            money.argent += traitement.prix;
            console.log(`${this.nom} a payé ${traitement.prix}`);
            console.log(`il lui reste ${this.argent}€`);
        }
        this.paye = (perso) => {
            console.log(`${this.nom} a ${this.argent}€`);
            this.argent -= 50;
            perso.argent += 50;
            console.log(`${this.nom} paye 50€ a ${perso.nom} , il lui reste ${this.argent}€`);


        }
    }
}


/* Traitement */
class Traitement {
    constructor(nom, prix) {
        this.nom = nom
        this.prix = prix
    }
}

export {Patient, Traitement}