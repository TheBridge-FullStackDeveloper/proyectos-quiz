const questions = [
    {
        "question": "What is your name?",
        "option1": "Amparo",
        "option2": "Rogelia",
        "option3": "Conchita",
        "option4": "Camella",
        "type": "radio"
    },
]
const newElement = document.createElement("main");
document.body.appendChild(newElement);

for (let i = 0; i < questions.length; i++) {
    const newElement2 = document.createElement("section");
    newElement.appendChild(newElement2);
    const newForm = document.createElement("form");
    newElement.appendChild(newForm);
    const newQuestion = document.createElement("fieldset");
    newForm.appendChild(newQuestion);
    const leyenda = document.createElement("legend");
    newQuestion.appendChild(leyenda);

    const answer1 = document.createElement("div");
    newQuestion.appendChild(answer1);
    answer1.setAttribute("id", "respuestas");
    const answer1a = document.createElement("label");
    answer1.appendChild(answer1a);
    const answer1b = document.createElement("input");
    answer1.appendChild(answer1b);
    answer1b.type= questions[i].type;

    const answer2 = document.createElement("div");
    newQuestion.appendChild(answer2);
    answer2.setAttribute("id", "respuestas");
    const answer2a = document.createElement("label");
    answer2.appendChild(answer2a);
    const answer2b = document.createElement("input");
    answer2.appendChild(answer2b);
    answer2b.type= questions[i].type;

    const answer3 = document.createElement("div");
    newQuestion.appendChild(answer3);
    answer3.setAttribute("id", "respuestas");
    const answer3a = document.createElement("label");
    answer3.appendChild(answer3a);
    const answer3b = document.createElement("input");
    answer3.appendChild(answer3b);
    answer3b.type= questions[i].type;

    const answer4 = document.createElement("div");
    newQuestion.appendChild(answer4);
    answer4.setAttribute("id", "respuestas");
    const answer4a = document.createElement("label");
    answer4.appendChild(answer4a);
    const answer4b = document.createElement("input");
    answer4.appendChild(answer4b);
    answer4b.type= questions[i].type;

    leyenda.innerHTML = questions[i].question;
    answer1a.innerHTML = questions[i].option1;
    answer2a.innerHTML = questions[i].option2;
    answer3a.innerHTML = questions[i].option3;
    answer4a.innerHTML = questions[i].option4;

    if (questions[i].type = "radio"){
        const boton1a = document.createElement("div");
        newForm.appendChild(boton1a);
        boton1a.setAttribute("id", "boton");
        const boton1b = document.createElement("button");
        boton1a.appendChild(boton1b);
        boton1b.setAttribute("type", "submit");
        boton1b.innerHTML = "Send answer"
    }

}
