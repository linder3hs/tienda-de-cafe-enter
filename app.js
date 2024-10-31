function changeBackgroundColor() {
  const backgroundColor = prompt("Ingrese un color de fondo para la web");
  document.body.style.backgroundColor = backgroundColor;
}

// changeBackgroundColor();

function registerBrothers() {
  // Paso 1: Debemos saber la cantidad de hermanos
  const brotherQuantity = Number(prompt("Ingrese la cantidad de hermanos"));
  // Paso 2: Creamos un arreglo vacio donde vamos a agregar los nombres de los hermanos
  const brothers = [];

  // Paso 3: Crear una variable counter para ir contando la cantidad de veces que ejecutamos el while
  let counter = 0;

  // Paso 4: Creamos un while usando la condición de counter < brotherQuantity
  while (counter < brotherQuantity) {
    // Paso 5: Preguntamos al usuario el nombre del hermano
    const brotherName = prompt("Ingresa el nombre de tu hermano " + counter);
    // Paso 6: Agregamos el nombre del hermano al arreglo de nombres
    brothers.push(brotherName);
    // Paso 7: Aumentamos en 1 a counter
    counter++;
  }

  // Paso 8: Mostramos en consola el valor del arreglo de hermanos
  console.log(brothers);
}

function generarColorHex() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateBlocks() {
  const blocksNumber = Number(
    prompt("Ingrese la cantidad de bloques que desea dibujar")
  );

  let counter = 0;

  while (counter < blocksNumber) {
    // Para poder crear un elemento HTML desde JS podemos la funcion createElement
    const newDiv = document.createElement("div"); // <div></div>
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = generarColorHex();
    // para que este newDiv aparezca debo agregarlo en el body
    // document.body.appendChild(newDiv);
    // buscando a la etiqueta main
    document.querySelector("main").appendChild(newDiv);
    counter++;
  }
}
