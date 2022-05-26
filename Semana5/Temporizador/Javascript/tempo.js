const inicio = document.getElementById("inicio"); 
const fin = document.getElementById("fin");
const tiempo = document.getElementById("tiempo"); 
const segundos = document.getElementById("seg"); 
const minutos = document.getElementById("min"); 
const aceptar = document.getElementById("aceptar");




let correTiempo; 
let correTiempoMin;

tiempo.addEventListener("click",()=>{
    if(aceptar !=''){
    inicio.addEventListener("click",()=>{
            if(segundos.value == ''){
                correTiempo = setInterval(()=>{
                    segundos.value --;
                },1000)
            }
            else if(segundos.value < '59'){
                correTiempo = setInterval(()=>{
                    minutos.value --;
                },1000);
            }
         });
     }
    else{
        console.log("Por favor, introduzca valores de tiempo adecuados");
    }
});

fin.addEventListener("click",()=>{
    clearInterval(correTiempo);
    clearInterval(correTiempoMin);
    })