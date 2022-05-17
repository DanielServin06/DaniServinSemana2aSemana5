let habilidadesTanque = ['Resistir impactos','Defender','Arrollar obstáculos']; 
let habilidadesLuchador = ['Super fuerza', 'Inteligencia nivel genio','Escudo del amanecer']; 
let habilidadesTirador = ['Disparos precisos', 'Ataques a larga distancia'];
let habilidadesMago = ['Portales entre universos', 'hechizo Hocus-Pocus', 'Invocación de bestias', 'Ataques a larga distancia']; 
let habilidadesAsesino = ['Manejo de armas', 'Dominio de artes marciales', 'Experto en combate cuerpo a cuerpo', 'Intelecto nivel genio']; 



class Campeon{
    constructor(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque){
        this.nombre = nombre; 
        this.tipo = tipo;
        this.armadura = armadura; 
        this.distancia = distancia; 
        this.movilidad = movilidad;
        this.vida = vida; 
        this.maná = maná; 
        this.ataque = ataque; 
    }
     presentarse(){
            if(this.tipo == 'Tirador'){
                console.log('Mi nombre es ' + this.nombre + ', soy una campeona de League of Legends'); 
                console.log('Mis grandiosas habilidades son: ' + habilidadesTirador);
                console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque); 
            }
            else if(this.tipo == 'Tanque'){
                console.log('Mi nombre es ' + this.nombre + ', soy un campeón de League of Legends'); 
                console.log('Mis grandiosas habilidades son: ' + habilidadesTanque);
                console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque); 
            }
            else if(this.tipo == 'Asesino'){
                console.log('Mi nombre es ' + this.nombre + ', soy un campeón de League of Legends'); 
                console.log('Mis grandiosas habilidades son: ' + habilidadesAsesino); 
                console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque);   
            }
            else if(this.tipo == 'Luchador'){
                console.log('Mi nombre es ' + this.nombre + ', soy una campeona de League of Legends'); 
                console.log('Mis grandiosas habilidades son: ' + habilidadesLuchador); 
                console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque);  
            }
            else if(this.tipo == 'Mago'){
                console.log('Mi nombre es ' + this.nombre + ', soy un campeón de League of Legends'); 
                console.log('Mis grandiosas habilidades son: ' + habilidadesMago);
                console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque);  
            }
            else{
                console.log('Tipo de campeón desconocido'); 
            }
        }

};

class Tanque extends Campeon{
    constructor(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque){
        super(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque)                
      }
      //Por si se desea consultar sólo las estadísticas//
      estadisTanque(){
          console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque); 
      }
}; 

class Luchador extends Campeon{
    constructor(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque){
        super(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque)
    }
    //Por si se desea consultar sólo las estadísticas//
    estadisLuchador(){
        console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque)
    }
};

class Tirador extends Campeon{ 
    constructor(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque){
        super(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque)
    }
    //Por si se desea consultar sólo las estadísticas//
    estadisTirador(){
        console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque)
    }
};

class Mago extends Campeon{ 
    constructor(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque){
        super(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque)
    }
    //Por si se desea consultar sólo las estadísticas//
    estadisMago(){
        console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque)
    }
};

class Asesino extends Campeon{ 
    constructor(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque){
        super(nombre, tipo, armadura, distancia, movilidad, vida, maná, ataque)
        }
        //Por si se desea consultar sólo las estadísticas//
        estadisAsesino(){
            console.log('Mis estadísticas son: ' + 'Vida=' + this.vida + ',' + 'Maná=' + this.maná + ',' + 'Ataque=' + this.ataque)

            }
};


const Jinx = new Tirador('Jinx','Tirador','No','Sí','No','150','100','200'); 
const Riot = new Tanque('Riot','Tanque','Sí','No','No','500','90','600'); 
const Lux = new Asesino('Lux', 'Asesino','No','No','Sí','150','120','180'); 
const Lin = new Luchador('Lin', 'Luchador','No','No','No','160','100','200');
const Marlon = new Mago('Marlon','Mago','No','Sí','No','300','100','250'); 





