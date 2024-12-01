//Primer ejercicio

const img = document.querySelector('.aoe2');
let bordeActivo = false;

img.addEventListener('click', () => {
    if (bordeActivo){
        img.style.border = "";
        bordeActivo = false;
    }

    else {img.style.border = "5px solid #ff0000";
        bordeActivo = true;
    }
})

//Segundo ejercicio

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const mensaje = document.querySelector('#mensaje')
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const num3 = parseInt(input3.value);
    const suma = num1 + num2 + num3;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        mensaje.innerHTML = "Por favor, ingrese números válidos";
        mensaje.style.backgroundColor = '#7e7e7e'
      } else if (suma > 10) {
        mensaje.innerHTML = "La suma no puede exceder 10";
        mensaje.style.backgroundColor = 'red'
      } else {
        mensaje.innerHTML = `Llevas ${suma} stickers`;
        mensaje.style.backgroundColor = '#7e7e7e'
      }
    });

//Tercer ejercicio

const select1 = document.querySelector('#primero')
const select2 = document.querySelector('#segundo')
const select3 = document.querySelector('#tercero')
const btn3 = document.querySelector('#btn3')
const validar = document.querySelector('#validar')

btn3.addEventListener('click', () => {
    const pass = select1.value + select2.value + select3.value;
    if (pass === '911') {
        validar.innerHTML = 'Contraseña 1 correcta!'
        validar.style.color = "green"
    }
    else if (pass === '714') {
        validar.innerHTML = 'Contraseña 2 correcta!'
        validar.style.color = "green"
    }
    else {
        validar.innerHTML = 'Contraseña incorrecta!'
        validar.style.color = "red"
    }
})