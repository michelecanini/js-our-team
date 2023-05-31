"use strict";

//PROBLEMA: Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:Creare l’array di oggetti con le informazioni fornite (file informazioni team).
//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:Stampare le stesse informazioni su DOM sottoforma di stringhe

// DICHIARAZIONE DELLE VARIABILI

// VARIABILE DELL'ARRAY MEMBRI DEL TEAM CON GLI OBJECT ALL'INTERNO
let teamMember = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]
 
// LOGICA DEL PROGRAMMA

// CICLO FOR - IN, PER STAMPARE IN CONSOLE LOG LE INFORMAZIONI DI OGNI MEMBRO
for (let key in teamMember) {
    console.log(teamMember[key].name + " " + teamMember[key].role + " " + teamMember[key].image);
}

// CONTENITORE DELLE SCHEDE NEL DOM
const cards = document.getElementById("cards");

// CICLO FOR PER L'ARRAY MEMBRI DEL TEAM
for (let i = 0; i < teamMember.length; i++){

    //VARIABILE PER SALVARE IL SINGOLO MEMBRO DEL TEAM INTERNA AL CICLO
    let member = teamMember[i];

    // SINGOLA CARD DEL DOM CON LE INFORMAZIONI DEL SINGOLO MEMBRO
    let card = `<div class="card">
        <img src="./img/${member.image}"></img>
        <p>${member.name}</p>
        <p>${member.role}</p>
    </div>`

    //CONCATENAZIONE HTML DELLA NUOVA CARD
    cards.innerHTML += card;
}

//STYLE CSS CARDS
document.getElementById("cards").style.display = "flex";
document.getElementById("cards").style.flexDirection = "row";
document.getElementById("cards").style.textAlign = "center";
document.getElementById("cards").style.flexWrap = "wrap";
document.getElementById("cards").style.justifyContent = "center";
document.getElementById("cards").style.gap = "20px";





