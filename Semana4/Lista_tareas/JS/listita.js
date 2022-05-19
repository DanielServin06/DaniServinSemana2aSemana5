const añadirTarea = document.getElementById("añadir"); 
const lista = document.getElementById("lista"); 
const nombreTarea = document.getElementById("nombreTarea");
const nombreAsignatura = document.getElementById("nombreAsignatura");


añadirTarea.addEventListener("click", (evento) => {
    lista.innerHTML += '<li>' + nombreTarea.value + '<button class="eliminar">Eliminar</button></li>'; 
});

lista.addEventListener("click", (evento) => {
    if(evento.target.className === 'eliminar'){ 
        evento.target.parentElement.outerHTML = '';  
    }
});



