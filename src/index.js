 import validator from './validator.js';

let btncard = document.getElementById("btn");
btncard.addEventListener('click', start);

function start(){
    let numC = document.getElementById("numCard").value;
    let output = document.getElementById("numbercard")

    let valid = validator.isValid(numC);
    let cardBlock = validator.block(numC);
    let band = validator.bandCard(numC);

    if (numC === ""){
        output.innerHTML= "<h4 style='color: red;'> Digite o Numero do Cartão</h4>"
    }
    else if(valid === true){
        output.innerHTML= cardBlock+band+"<h4 style='color: green;'> Cartão Válido</h4>"
    }
    else{
        output.innerHTML= cardBlock+ "<h4 style='color: red;'>Cartão Inválido</h4>"

    }
} 
