// FUNCIONES REUTILIZABLES
function isValidColor(color) {
  // Expresión regular para verificar color en formato hexadecimal (#RGB, #RRGGBB)
  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;

  // Expresión regular para verificar color en formato RGB (rgb(255, 255, 255))
  const rgbPattern = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

  // Crear un elemento temporal para validar nombres de colores CSS
  const tempElement = document.createElement("div");
  tempElement.style.color = color;

  // Verificar si el color cumple con alguno de los patrones o es un nombre de color CSS
  return (
    hexPattern.test(color) ||
    rgbPattern.test(color) ||
    tempElement.style.color !== ""
  );
}

// RECUERDEN SER ORDENADOS

/**
 * VARIABLES QUE SIRVEN PARA BUSCAR ELEMENTOS
 */
const inputColor = document.getElementById("input-color");
const btnChangeColor = document.getElementById("btn-change-color");

const inputRegisterBrothers = document.getElementById(
  "input-register-brothers"
);
const brothersContainer = document.getElementById("brothers-container");

const gameArea = document.getElementById("game-area");

/**
 * CREAMOS las funciones para nuestros ejercicios
 */

/**
 * Para poder saber cuando el usuario hizo click en el boton haremos los
 * siguiente
 *
 * addEventListener("evento", function anonima)
 */

/**
function changeColor(parametro1) {
  // Obtener el valor del input
  // "" - null - undefined
  const color = inputColor.value;
  // VALIDAMOS SI EL COLOR EXISTE
  if (isValidColor(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert("El color no existe");
  }
}
// changeColor() // LLAMAR
btnChangeColor.addEventListener("click", function () {
  changeColor(1);
});

 const saludar = function () {
   console.log("hola");
};

 saludar();
 */
btnChangeColor.addEventListener("click", function () {
  // Obtener el valor del input
  // "" - null - undefined
  const color = inputColor.value;
  // VALIDAMOS SI EL COLOR EXISTE
  if (isValidColor(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert("El color no existe");
  }
});

function registerBrothers() {
  const brotherQuantity = Number(inputRegisterBrothers.value);

  const brothers = [];

  let counter = 0;

  while (counter < brotherQuantity) {
    const newDiv = document.createElement("div"); // <div></div>
    // crear un input
    const newInput = document.createElement("input"); // <input />
    newInput.placeholder = "Ingresa el nombre de tu hermano " + counter;
    newInput.type = "text";
    newInput.id = "input-name-" + counter;
    newInput.classList.add("input-brother-name");

    newDiv.appendChild(newInput); // <div> <input /> </div>

    brothersContainer.appendChild(newDiv);

    counter++;
  }

  // AGREGAMOS UN BOTON PARA IMPRIMIR LA LISTA DE HERMANOS
  const newButton = document.createElement("button");
  newButton.textContent = "Imprimir nombres";

  newButton.addEventListener("click", function () {
    // BUSCAR POR CLASE UNA LISTA DE ELEMENTOS
    const inputs = document.querySelectorAll(".input-brother-name");
    // COMO RECORREMOS UNA LISTA?
    for (let input of inputs) {
      const newP = document.createElement("p");
      newP.textContent = input.value;

      gameArea.appendChild(newP);
    }
  });

  brothersContainer.appendChild(newButton);

  console.log(brothers);
}
