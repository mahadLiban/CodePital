import {Patient,Traitement} from "./class.js"

let ctrl = new Traitement("ctrl+maj+f", 60)
let save = new Traitement("saveOnFocusChange", 100)
let check = new Traitement("CheckLinkRelation", 35)
let vent = new Traitement("Ventoline", 40)
let f12 = new Traitement("f12+doc", 20)

// Instance Patient
let marcus = new Patient("Marcus", "mal indenté", 100, "vide", "malade", ctrl)
let optimus = new Patient("Optimus", "unsave", 200, "vide", "malade", save)
let sangoku = new Patient("Sangoku", "404", 80, "vide", "malade", check)
let darkvador = new Patient("DarkVador", "azmatique", 110, "vide", "malade", vent)
let semicolon = new Patient("Semicolon", "syntaxError", 60, "vide", "malade", f12)
// Chat
/* let chat = {
    nom: 'chat',
    miauler() {
        setInterval(() => {
            console.log('Miauouuuuww');

        }, 2000)
    }
} */


let salleDattente = {
    nom: "salle d'attente",
    personnes: [marcus, optimus, sangoku, darkvador, semicolon]
}
// Docteur
let docteur = {
    nom: "Doc Gynéco",
    argent: 0,
    cabinet: [],
    slda: salleDattente,
    diagnostique(patient) {
        switch (patient.maladie) {
            case "mal indenté":
                patient.traitement = ctrl
                break;
            case "unsave":
                patient.traitement = save
                break;
            case "404":
                patient.traitement = check
                break;
            case "azmatique":
                patient.traitement = vent
                break;
            case "syntaxError":
                patient.traitement = f12
                break;

            default:
                console.log(`On ne connait pas cette maladie va faire une douah et pleure peut-être ca va s'arranger`);
                break;
        }
        console.log(`${patient.nom} a la maladie suivante : ${patient.maladie} et son traitement est ${patient.traitement.nom}`);

    },
    patienTIn() {
        let patient = this.slda.personnes[0];
        this.cabinet.push(this.slda.personnes.shift())
        console.log(`${patient.nom} entre dans le cabinet`)


    },
    patienTOut() {
        let patient = this.cabinet[0];
        console.log(`Merci docteur de m'avoir diagnostiquer`)
        console.log(`${patient.nom} sort du cabinet`)
        this.cabinet.splice(this.cabinet.indexOf(patient))
        this.slda.personnes.push(patient)
        console.log(`${docteur.nom} :  Au revoir  ${patient.nom}`);
    }
}



let cimetiere = {
    nom: "Cimetière",
    personnes: []
}
let pharmacie = {
    nom: "pharmacie",
    argent: 0,
    personnes: [],
    donnerTraitement(patient) {
        let prixMedoc;
        switch (patient.traitement) {
            case ctrl:
                prixMedoc = 60;

                break;
            case save:
                prixMedoc = 100;
                break;
            case check:
                prixMedoc = 35;
                break;
            case vent:
                prixMedoc = 40;
                break;
            case f12:
                prixMedoc = 20;
                break;
            default:
                console.log("Nous n'avons pas de trainement pour vous");
                break;

        }
        if (patient.argent >= prixMedoc) {
            console.log(`${patient.nom} a ${patient.argent}€ et paye ${prixMedoc}€ a la pharmacie`);
            patient.argent -= prixMedoc
            this.argent += prixMedoc
            console.log(`Il lui reste ${patient.argent}€`);


        } else {
            console.log(`${patient.nom} a ${patient.argent}€ et ses médicaments coute ${patient.traitement.prix}€`);
            console.log(`${patient.nom} n'a pas assez d'argent`);
            patient.goTo(pharmacie, cimetiere)
            console.log(`Mufasa arrive le chercher pour le déposer en enfer`);

        }
        console.log(`   `);
    }
}




do {
    let membre = docteur.slda.personnes[0]
    docteur.patienTIn()
    membre.paye(docteur)
    docteur.diagnostique(membre)
    docteur.patienTOut()
    membre.goTo(docteur.slda, pharmacie)
    pharmacie.donnerTraitement(membre)

} while (docteur.slda.personnes.length > 0);