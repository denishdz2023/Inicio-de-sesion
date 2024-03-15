document.addEventListener("DOMContentLoaded", function(){
    const mostrarPerfil = JSON.parse(localStorage.getItem('usuario'));
    document.getElementById('nombre').value = mostrarPerfil.nombre
    document.getElementById('fechaNacimiento').value = mostrarPerfil.fechaNacimiento
    document.getElementById('genero').value = mostrarPerfil.genero
    document.getElementById('departamento').value = mostrarPerfil.departamento
    document.getElementById('ciudad').value = mostrarPerfil.ciudad
    document.getElementById('telefono').value = mostrarPerfil.telefono
    document.getElementById('descripcion').value= mostrarPerfil.descripcion
});

function editarInformacion(){
    const mostrarPerfil = JSON.parse(localStorage.getItem('usuario'));
    mostrarPerfil.nombre = document.getElementById('nombre').value
    mostrarPerfil.fechaNacimiento= document.getElementById('fechaNacimiento').value
    mostrarPerfil.genero= document.getElementById('genero').value
    mostrarPerfil.departamento= document.getElementById('departamento').value
    mostrarPerfil.ciudad= document.getElementById('ciudad').value
    mostrarPerfil.telefono= document.getElementById('telefono').value
    mostrarPerfil.descripcion= document.getElementById('descripcion').value
    localStorage.setItem('usuario', JSON.stringify(mostrarPerfil))
    window.location.href = 'perfil.html'
}