const dic = {
    "nombre": "",
    "descripcion": "",
    "precio": "",
    "horarios": ""

}

const form = document.querySelector('#crearTutoriaForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const horarios = document.getElementById('horarios').value;

    dic.nombre = nombre
    dic.descripcion = descripcion
    dic.precio = precio
    dic.horarios = horarios
    localStorage.setItem('datosTutoria', JSON.stringify(dic));
    alert("tutoria: "+nombre+" creada con exito!")


});
console.log(dic)


