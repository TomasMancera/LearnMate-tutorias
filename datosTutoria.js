const form = document.querySelector('#crearTutoriaForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const horarios = document.getElementById('horarios').value;

    const dic = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        horarios: horarios
    };

    let datosTutorias = JSON.parse(localStorage.getItem('datosTutoria')) || [];

    datosTutorias.push(dic);

    localStorage.setItem('datosTutoria', JSON.stringify(datosTutorias));
    alert("Tutoría: " + nombre + " creada con éxito!");
});

