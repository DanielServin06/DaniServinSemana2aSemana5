const numeroPicos = document.getElementById("picos"); 
const Picudez = document.getElementById("picos");
const colorEstrella = document.getElementById("color"); 
const rellenarEstrella = document.getElementById("relleno");
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

//Estrellas




//Círculos
const Xinit = 600 / 2; 
const Yinit = 600 / 2;
const anguloFinalGrados = 360; 
const anguloFinalRadianes = (anguloFinalGrados * Math.PI) / 180; 
const anguloFinal = anguloFinalRadianes;
const anguloInicial = 0; 
const antihorario = false; 
const sentidoRotacion = antihorario; 


//plano 
// ctx.beginPath(); 
// ctx.moveTo(Xinit, 600); 
// ctx.lineTo(Xinit, -600);
// ctx.stroke();
// ctx.moveTo(-600, Yinit); 
// ctx.lineTo(600, Yinit);
// ctx.stroke();
// ctx.closePath();

//Círculo grande
    ctx.beginPath(); 
    const Radio = 250;
    ctx.moveTo(Xinit, Yinit); 
    ctx.arc(Xinit, Yinit, Radio, anguloInicial, anguloFinal, sentidoRotacion);
    ctx.stroke();   
    ctx.closePath(); 

//Círculo pequeño

    ctx.beginPath(); 
    const radio = 150; 
    ctx.moveTo(Xinit, Yinit); 
    ctx.arc(Xinit, Yinit, radio, anguloInicial, anguloFinal, sentidoRotacion);
    ctx.stroke();
    ctx.closePath(); 


//Formula para calcular cuántos grados abarca cada pico de estrella

// function picos (nPicos, anguloFinalRadianes) {
//     return anguloFinalRadianes / nPicos; 
// }

//Para una estrella de 30 picos
// ctx.beginPath(); 
// const longitudLine = 10; 
// const anguloGrados = 12; //son 12
// const anguloRadianes = (anguloGrados * Math.PI) / 180; 
// const despX  = longitudLine * Math.cos(anguloRadianes); 
// const despY = longitudLine * Math.sin(anguloRadianes);
// ctx.strokeStyle = '#ab0200';
// ctx.lineWidth = '5';
// ctx.moveTo(Xinit, Yinit); 
// ctx.moveTo(Xinit, 50); 
// ctx.lineTo(Xinit + despX, Yinit - 150);
// ctx.stroke();
// ctx.lineTo()
// ctx.closePath();


//Para una estrella de cinco picos 
ctx.beginPath(); 






ctx.closePath();


// ctx.strokeStyle = '#0fab00';
// ctx.lineWidth = '7';
// ctx.moveTo(Xinit, 50); 
// ctx.lineTo(Xinit, -20); 
// ctx.stroke(); 
// ctx.closePath(); 



// switch(numeroPicos){
//     case '4':
//         break; 

//     case '5':
//         break; 

//     case '6':
//         break; 

//     case '7':
//         break; 

//     case '8':
//         break; 
//     case '9':
//         break; 
//     case '10':
//         break; 
// }

