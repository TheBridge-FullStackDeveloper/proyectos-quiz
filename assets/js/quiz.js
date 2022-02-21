/*const Respuestas = {
    elminster: "mago",
   
}

const quizLabels = document.getElementsByTagName("label");

for (let i = 0; i < quizLabels.length; i++) {
    quizLabels[i].onclick = function () {
      
     for (let i = 0; i < quizLabels.length; i++) {
            quizLabels[i].style.border = "none";
        }
        selectedElement = this;
        selectedInput = this.nextElementSibling;
        inputName = selectedInput.getAttribute("name")
        inputValue = selectedInput.getAttribute("value")
        console.log(selectedElement)
        if(Respuestas[inputName] === inputValue) {
            selectedElement.style.border = "5px solid green";
        }else{
            selectedElement.style.border = "5px solid red";
        }
    };
}*/



const RespuestasTest= {
    pregunta1: {
        pregunta: "¿Cuántas zonas horarias tiene en Rusia?",
        respuestas: ["1", "5", "20","11"],
        correcta: "11"    
    },
    pregunta2: {
        pregunta: "¿Cuál es el animal nacional de Australia? ",
        respuestas: ["Perro", "Gato", "Caballo","Canguro"],
        correcta: "Canguro"    
    },

    pregunta3: {
        pregunta: "¿Cuál es el país más pequeño del mundo?",
        respuestas: ["Vaticano", "San Marino", "Monaco","China"],
        correcta: "Vaticano"    
    }
}

let respuestaCorecta = ""
let preguntaIncial = 1
//consulta las respuestas del objeto y arregla en una variable con html
function printQuestions(num) {
    let newHtml = "";
    let preguntaNum = "pregunta"+num
    let newQuestion = "<h1>"+ RespuestasTest[preguntaNum].pregunta+"</h1>";
    document.getElementById("pregunta").innerHTML = newQuestion;
    console.log(newQuestion)
    for(let i = 0; i<RespuestasTest[preguntaNum].respuestas.length; i++){
        newHtml += '<label class="respuesta respuesta'+(i+1)+'" for="resp'+(i+1)+'"><p>'+RespuestasTest[preguntaNum].respuestas[i]+'</p></label><br>';
        newHtml += '<input type="radio" id="resp'+(i+1)+'" name="'+RespuestasTest[preguntaNum].respuestas[i] +'" value="'+RespuestasTest[preguntaNum].respuestas[i]+'" hidden><br>'
    }
    respuestaCorecta = RespuestasTest[preguntaNum].correcta;
    return newHtml;
}

//imprime el html en el documento
function addQuestions(num){
    if(num <= Object.keys(RespuestasTest).length){
        let addHtml = printQuestions(num);
        document.getElementById("respuestas").innerHTML = addHtml;
        quizLabels = ""
        quizLabels = document.getElementsByTagName("label");
        clickOn()
    }else {
        location.href = 'index.html';
    }
    
}
addQuestions(preguntaIncial)

//clicks en respuestas
function clickOn(){
    for (let i = 0; i < quizLabels.length; i++) {
        quizLabels[i].onclick = function () {
         // console.log(this)
         for (let i = 0; i < quizLabels.length; i++) {
                quizLabels[i].style.border = "none";
            }
            selectedElement = this;
            selectedInput = this.nextElementSibling.nextElementSibling;
            inputName = selectedInput.getAttribute("name")
            inputValue = selectedInput.getAttribute("value")
            //console.log(this.nextElementSibling.nextElementSibling)
            if(respuestaCorecta === inputValue) {
                selectedElement.style.border = "5px solid green";
                preguntaIncial +=1;
                addQuestions(preguntaIncial)
            }else{
                selectedElement.style.border = "5px solid red";
            }
        };
    }
}


