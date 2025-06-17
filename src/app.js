// Definición de arrays con partes de la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Bobby'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Función para obtener un número aleatorio entre "a" (incluido) y "b" (excluido)
function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

// Función que devuelve un elemento aleatorio de un array
function getRandom(anyArray) {
  let max = anyArray.length;
  return anyArray[getRandomNumber(0, max)];
}

// Al cargar la ventana, se selecciona el elemento con ID "excuse" y se le asigna una excusa aleatoria
window.onload = function () {
  const excuseElement = document.querySelector('#excuse');
  console.log("Hello Rigo from the console!");
  excuseElement.innerHTML = `<h1>${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}</h1>`;
};