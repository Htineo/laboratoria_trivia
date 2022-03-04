document.getElementById("trivia").style.display = "none";

document.getElementById("question_1_status").style.display = "none";
document.getElementById("question_2_status").style.display = "none";
document.getElementById("question_3_status").style.display = "none";

document.getElementById("correct_question_1").style.display = "none";
document.getElementById("correct_question_2").style.display = "none";
document.getElementById("correct_question_3").style.display = "none";


function getName() { 
    var nombre = document.getElementById("input-nombre");
  
    document.getElementById("nombre").innerHTML = `Hola ${nombre.value}`;

    document.getElementById("trivia").style.display = "block";
    document.getElementById("welcome").style.display = "none";
}

function getValues() { 

    var question_1 = document.querySelector("input[name='question_1']:checked")
    var question_2 = document.querySelector("input[name='question_2']:checked")
    var question_3 = document.querySelector("input[name='question_3']:checked") 
  
    if(question_1.value === 'celula'){
      document.getElementById("question_1_status").innerHTML = "Respuesta: Correcta"
    }else{
      document.getElementById("question_1_status").innerHTML = "Respuesta: Incorrecta"
    }

    if(question_2.value === 'plaquetas,globulos rojos,leucocitos'){
      document.getElementById("question_2_status").innerHTML = "Respuesta: Correcta"
    }else{
      document.getElementById("question_2_status").innerHTML = "Respuesta: Incorrecta"
    }

    if(question_3.value === '(50-70)%'){
      document.getElementById("question_3_status").innerHTML = "Respuesta: Correcta"
    }else{
      document.getElementById("question_3_status").innerHTML = "Respuesta: Incorrecta"
    }

    document.getElementById("correct_question_1").style.display = "block";
    document.getElementById("correct_question_2").style.display = "block";
    document.getElementById("correct_question_3").style.display = "block";
  
    document.getElementById("question_1_status").style.display = "block";
    document.getElementById("question_2_status").style.display = "block";  
    document.getElementById("question_3_status").style.display = "block";
    
} 

