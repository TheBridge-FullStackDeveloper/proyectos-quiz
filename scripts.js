const questions = [
    {
        "question": "Which are wild animals?",
        "option1": "Camel",
        "option2": "Raindeer",
        "option3": "Chihuahua",
        "option4": "Elephant",
        "type": "radio",
        "kind": "multiple choice question",
        "indicador": "animals"
    },
    {
        "question": "Which one is a turrón brand?",
        "option1": "Suchard",
        "option2": "J&B",
        "option3": "Sony",
        "option4": "Parchis",
        "type": "checkbox",
        "kind": "one choice question",
        "indicador": "turron"
    },
    {
        "question": "Who is american?",
        "option1": "Baltasar",
        "option2": "Melchor",
        "option3": "Santa Claus",
        "option4": "Gaspar",
        "type": "checkbox",
        "kind": "one choice question",
        "indicador": "american"
    },
    {
        "question": "When is the gallo mass?",
        "option1": "24 December",
        "option2": "25 December",
        "option3": "1 January",
        "option4": "6 July",
        "type": "radio",
        "kind": "multiple choice question",
        "indicador": "gallo"
    },
    {
        "question": "Which ones have something in common?",
        "option1": "Coal",
        "option2": "Aguinaldo",
        "option3": "Zapato",
        "option4": "Cotillon",
        "type": "radio",
        "kind": "multiple choice question",
        "indicador": "common"
    },
    {
        "question": "Where is Santa's house?",
        "option1": "South Pole",
        "option2": "3000 viviendas",
        "option3": "Albacete",
        "option4": "North Pole",
        "type": "checkbox",
        "kind": "one choice question",
        "indicador": "santa"
    },
    {
        "question": "What is aguinaldo?",
        "option1": "A tip",
        "option2": "A massage",
        "option3": "A cat",
        "option4": "A drug",
        "type": "checkbox",
        "kind": "one choice question",
        "indicador": "aguinaldo"
    },
    {
        "question": "Who is invisible?",
        "option1": "The friend",
        "option2": "God",
        "option3": "Elfs",
        "option4": "Christmas spirit",
        "type": "radio",
        "kind": "multiple choice question",
        "indicador": "invisible"
    }
]


const newElement = document.createElement("main");
document.body.appendChild(newElement);

for (let i = 0; i < questions.length; i++) {

//allQuestions (questions [i], i)
//SÓLO UN FORM EN HTML (TODO LO ESTATICO)
//funcion
    /*const newElement2 = document.createElement("section");
    newElement.appendChild(newElement2);
    const newForm = document.createElement("form");
    newElement.appendChild(newForm);*/FUERA DEL BUCLE
    const newQuestion = document.createElement("fieldset");
    newForm.appendChild(newQuestion);
    const leyenda = document.createElement("legend");
    newQuestion.appendChild(leyenda);
    const kind = document.createElement("p");
    newQuestion.appendChild(kind);

    const answer1 = document.createElement("div");
    newQuestion.appendChild(answer1);
    answer1.setAttribute("id", "respuestas");
    const answer1a = document.createElement("label");
    answer1.appendChild(answer1a);
    answer1a.setAttribute("for", "respuesta1");
    const answer1b = document.createElement("input");
    answer1.appendChild(answer1b);
    answer1b.setAttribute("id", "respuesta1");
    answer1b.name = questions[1].indicador;
    answer1b.type = questions[i].type;

    const answer2 = document.createElement("div");
    newQuestion.appendChild(answer2);
    answer2.setAttribute("id", "respuestas");
    const answer2a = document.createElement("label");
    answer2.appendChild(answer2a);
    answer2a.setAttribute("for", "respuesta2");
    const answer2b = document.createElement("input");
    answer2.appendChild(answer2b);
    answer2b.setAttribute("id", "respuesta2");
    answer1b.name = questions[1].indicador;
    answer2b.type = questions[i].type;

    const answer3 = document.createElement("div");
    newQuestion.appendChild(answer3);
    answer3.setAttribute("id", "respuestas");
    const answer3a = document.createElement("label");
    answer3.appendChild(answer3a);
    answer3a.setAttribute("for", "respuesta3");
    const answer3b = document.createElement("input");
    answer3.appendChild(answer3b);
    answer3b.setAttribute("id", "respuesta3");
    answer1b.name = questions[1].indicador;
    answer3b.type = questions[i].type;

    const answer4 = document.createElement("div");
    newQuestion.appendChild(answer4);
    answer4.setAttribute("id", "respuestas");
    const answer4a = document.createElement("label");
    answer4.appendChild(answer4a);
    answer4a.setAttribute("for", "respuesta4");
    const answer4b = document.createElement("input");
    answer4.appendChild(answer4b);
    answer4b.setAttribute("id", "respuesta4"); 
    answer1b.name = questions[1].indicador;
    answer4b.type = questions[i].type;

    leyenda.innerHTML = questions[i].question;
    kind.innerHTML = "(" + questions[i].kind + ")";
    answer1a.innerHTML = questions[i].option1;
    answer2a.innerHTML = questions[i].option2;
    answer3a.innerHTML = questions[i].option3;
    answer4a.innerHTML = questions[i].option4;
//BUCLE//KATA hoy
    answer1.addEventListener("click", function () {
        answer1.style.backgroundColor = "GreenYellow";
    })
    answer2.addEventListener("click", function () {
        answer2.style.backgroundColor = "GreenYellow";
    })
    answer3.addEventListener("click", function () {
        answer3.style.backgroundColor = "GreenYellow";
    })
    answer4.addEventListener("click", function () {
        answer4.style.backgroundColor = "GreenYellow";
    })

}
//HTML
const boton1a = document.createElement("section");
newElement.appendChild(boton1a);
boton1a.setAttribute("id", "boton");
const boton1b = document.createElement("button");
boton1a.appendChild(boton1b);
boton1b.setAttribute("type", "submit");
boton1b.innerHTML = "Send answer";

/*document.querySelector("form.form").addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(event.target.elements);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.message.value);
    console.log(event.target.party.value);
    console.log(event.target.kind.value);
    console.log(event.target.conditions.checked);


    const name = event.target.name.value;
    const email = event.target.email.value;
    const party = event.target.party.value;
    const conditions = event.target.conditions.checked;

    let validated = true;
    
    if (name.length < 5) {
        alert("Name too short");
        validated = false;
        //he intentado meter sin exito: document.getElementById('name').style.backgroundColor = "red";
    }
    */

