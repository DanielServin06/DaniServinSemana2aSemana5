class Campeon{
    constructor(nombre, armadura, multiplicadorVida, multiplicadorAtaque, multiplicadorManá, distancia, movilidad, vida, maná, ataque,){
        this.nombre = nombre; 
        this.armadura = armadura; 
        this.distancia = distancia; 
        this.movilidad = movilidad;
        this.multiplicadorVida = multiplicadorVida; 
        this.multiplicadorAtaque = multiplicadorAtaque; 
        this.multiplicadorManá = multiplicadorManá; 
        this.vida = vida; 
        this.maná = maná; 
        this.ataque = ataque; 

        presentacion(){
            console.log('Mi nombre es ' + this.nombre + 'soy un campeón de League of Legends');
        //comparar(){
          //console.log( );
            //} 
        }
    }   
}; 
class Tanque extends Campeon{
    constructor(nombre, multiplicadorVida, armadura, vida, maná, ataque){
        super(nombre, multiplicadorVida, armadura, vida, maná, ataque)
        
    }
}; 

class Luchador extends Campeon{
    constructor(nombre,multiplicadorVida,multiplicadorAtaque, vida, ataque, maná){
        super(nombre,multiplicadorVida,multiplicadorAtaque, vida, ataque, maná)
    }
};

class Tirador extends Campeon{ 
    constructor(nombre, multiplicadorVida, distancia, vida, maná, ataque){
        super(nombre, multiplicadorVida, distancia, vida, maná, ataque)

    }
};

class Mago extends Campeon{ 
    constructor(nombre,multiplicadorManá,distancia,vida, maná, ataque ){
        super(nombre,multiplicadorManá,distancia,vida, maná, ataque)
    }
};
class Asesino extends Campeon{ 
    constructor(nombre, multiplicadorAtaque, multiplicadorVida, movilidad){
        super(nombre, multiplicadorAtaque, multiplicadorVida, movilidad)
        habilidades(){
            console.log("Mis habilidades son: agilidad, velocidad, combate cuerpo a cuerpo, manejo de armas"); 
        }
    }
};

if(this.multiplicadorVida==0.24){
    if(this.armadura==true){
        console.log(presentacion())
    }
    else if ()
}
else if(this)







