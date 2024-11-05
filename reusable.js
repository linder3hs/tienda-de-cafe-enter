function renderHeader() {
  return `
     <!-- LOGO DE LA EMPRESA -->
      <img
        width="60"
        src="https://marketplace.canva.com/EAF5V9i5G5g/1/0/1600w/canva-logotipo-cafeter%C3%ADa-figurativo-caf%C3%A9-y-beige-rxcvtLtKSx8.jpg"
        alt=""
      />
      <!-- ETIQUETA PARA CREAR UN MENU DE NAVEGACION -->
      <nav>
        <!-- LISTA NO ORDENADA -->
        <ul>
          <!-- CADA ELEMENTO DE MI LISTA EN UN LI -->
          <li>
            <!-- CREO UN ENLACE A OTRAS SITIOS -->
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Ofertas</a>
          </li>
          <li>
            <a href="">Tiendas</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
  `;
}

// buscamos el header
const header = document.querySelector("header");
// dentro del header va a insertar un HTML
header.innerHTML = renderHeader();
