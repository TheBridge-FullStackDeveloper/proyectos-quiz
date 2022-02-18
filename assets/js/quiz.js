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
        preguntas: ["Test", "test2", "test3","test4"],
        correcta: "test2"    
    },
    pregunta2: {
        preguntas: ["SegundoTest", "Segundotest2", "Segundotest3","Segundotest4"],
        correcta: "Segundotest4"    
    },

    pregunta3: {
        preguntas: ["TercerTest", "Tercertest2", "Tercertest3","Tercertest4"],
        correcta: "TercerTest"    
    }
}

let respuestaCorecta = ""
let preguntaIncial = 1
//consulta las preguntas del objeto y arregla en una variable con html
function prinQuestions(num) {
    let newHtml = "";
    let preguntaNum = "pregunta"+num
    for(let i = 0; i<RespuestasTest[preguntaNum].preguntas.length; i++){
        newHtml += '<label class="respuesta respuesta'+(i+1)+'" for="resp'+(i+1)+'"><p>'+RespuestasTest[preguntaNum].preguntas[i]+'</p></label><br>';
        newHtml += '<input type="radio" id="resp'+(i+1)+'" name="'+RespuestasTest[preguntaNum].preguntas[i] +'" value="'+RespuestasTest[preguntaNum].preguntas[i]+'" hidden><br>'
    }
    respuestaCorecta = RespuestasTest[preguntaNum].correcta;
    return newHtml;
}

//imprime el html en el documento
function addQuestions(num){
    if(num <= Object.keys(RespuestasTest).length){
        let addHtml = prinQuestions(num);
        document.getElementById("respuestas").innerHTML = addHtml;
        quizLabels = ""
        quizLabels = document.getElementsByTagName("label");
        clickOn()
    }else {
        location.href = 'index.html';
    }
    
}
addQuestions(preguntaIncial)

//clicks en preguntas
function clickOn(){
    for (let i = 0; i < quizLabels.length; i++) {
        quizLabels[i].onclick = function () {
          console.log(this)
         for (let i = 0; i < quizLabels.length; i++) {
                quizLabels[i].style.border = "none";
            }
            selectedElement = this;
            selectedInput = this.nextElementSibling.nextElementSibling;
            inputName = selectedInput.getAttribute("name")
            inputValue = selectedInput.getAttribute("value")
            console.log(this.nextElementSibling.nextElementSibling)
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


