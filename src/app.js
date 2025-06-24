

function getRandomElement(anyArray) {
  return anyArray[Math.floor(Math.random() * anyArray.length)];
}

// When the window loads, the item with ID "excuse" is selected and assigned a random excuse.
window.onload = function () {
 
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Bobby'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const excuseElement = document.querySelector('#excuse');
  console.log("Hello Rigo from the console!");
  excuseElement.innerHTML = `<h1>${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}</h1>`;
};