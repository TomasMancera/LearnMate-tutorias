const infoTutoria = JSON.parse(localStorage.getItem('datosTutoria'))
const coursesList = document.getElementById('coursesList');

// Obtener el elemento template
const template = document.getElementById('mi_template');

// Clonar el contenido del template
const clon = template.content.cloneNode(true);

// Acceder y modificar los elementos clonados
clon.querySelector('.nombre').textContent = infoTutoria.nombre;
clon.querySelector('.descripcion').textContent = infoTutoria.descripcion;
clon.querySelector('.precio').textContent = infoTutoria.precio;
clon.querySelector('.horarios').textContent = infoTutoria.horarios


// Añadir el clon al DOM
if (infoTutoria.nombre != "") {
    coursesList.appendChild(clon);


}


