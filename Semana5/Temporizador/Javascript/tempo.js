const inicio = document.getElementById("inicio"); 
const fin = document.getElementById("fin");
const tiempo = document.getElementById("tiempo"); 
let segundos = document.getElementById("seg"); 
let minutos = document.getElementById("min"); 
const aceptar = document.getElementById("aceptar");
const alarma = new Audio("./Audio/uh.mp3");



let Contador;
inicio.addEventListener("click",()=>{
    Contador = setInterval(()=>{
        if(segundos.value > '0'){
            segundos.value= segundos.value-1;
            if(segundos.value== '0'){
                alarma.volume = 0.2; 
                alarma.play();
            }
        }        
    },1000)
})

fin.addEventListener("click", ()=>{
    clearInterval(Contador);
    
});