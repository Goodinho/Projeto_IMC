function calcular(){
const peso = Number(document.getElementById("peso").value);
const altura = Number(document.getElementById("altura").value);
const resultado = document.getElementById("resultado");


if(!peso || !altura){
    resultado.innerText ="Por favor, preencha ambos os campos!";
    return;
 
}
const IMC = peso/(altura**2);
let nivel = "";

if(IMC < 18.5){
  nivel = "Abaixo do peso";
} else if (IMC >= 18.5 || IMC <= 24.9){
    nivel ="Peso normal";
} else if (IMC >= 25 || IMC <= 29.9){
    nivel ="Sobrepeso";
} else if (IMC >= 35 || IMC <= 39.9){
    nivel ="Obesidade grau 1";
} else if (IMC >= 40){
    nivel ="Obesidade grau 2";
    
}

resultado.innerText = `Seu IMC é: ${IMC.toFixed(2)} - ${nivel}`;

}
