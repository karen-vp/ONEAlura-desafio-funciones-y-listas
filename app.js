let title = document.querySelector('h1');
title.innerHTML = 'Hora del Desafío';


function activateButtonConsole(){
    console.log('El botón fue cliclado');
    
    }
function activateButtonPrompt(){
    let city = prompt('Ingrese el nombre de una ciudad de Brasil porfavor');
    alert(`Estuve en ${city} y me acordé de ti`);
    
}


function activateButtonAlert(){
    alert('Yo amo JS');

}

function addTwoNumbers(){
    let number1 = Number(prompt('Ingrese un numero'));
    let number2 = Number(prompt('Ingrese un numero'));
   alert(number1 + number2);
}
