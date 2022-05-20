const añadirTarea = document.getElementById("añadir"); 
const lista = document.getElementById("lista"); 
const nombreTarea = document.getElementById("nombreTarea");
const nombreAsignatura = document.getElementById("nombreAsignatura");  
const predeterminadas = document.getElementById("predeterminadas")
 

añadirTarea.addEventListener("click", () => {
    if(nombreAsignatura.value == '' && añadirTarea !=''){
            lista.innerHTML += '<li>'+ predeterminadas.value + ':' + nombreTarea.value + '<button class="eliminar">Eliminar</button></li>'; 
   
    }
     else if(predeterminadas.value !='' && añadirTarea !=''){
            lista.innerHTML += '<li>'+ nombreAsignatura.value + ':' + nombreTarea.value + '<button class="eliminar">Eliminar</button></li>'; 
    }
    
});
lista.addEventListener("click", (evento) => {
       if(evento.target.className === 'eliminar'){ 
       evento.target.parentElement.outerHTML = '';
        }
    });

    

//     lista.innerHTML += '<li>' + nombreTarea.value+  + '<button class="eliminar">Eliminar</button></li>'; 
//     console.log(); 
// });

// lista.addEventListener("click", (evento) => {
//     if(evento.target.className === 'eliminar'){ 
//         evento.target.parentElement.outerHTML = '';  
//     }
// });



