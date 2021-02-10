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