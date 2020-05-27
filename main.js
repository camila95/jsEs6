//let accesible en el bloque donde fue creada, variable local
//var variable global
//const constante, declarar variables estáticas

//let y const --> scope tipo bloque

function variables(){
    if(true){
        const x = "cosa1";
        console.log(x);
    }    
}
//variables();

//Template String --> string literal  
function stringsLiteral(){
    const x = "todos";
    const y = "clase";
    console.log(`Hola a ${x} los de la ${y}`);
}
//stringsLiteral();

//Arrow
function arrow(){
    let a = ['Añil', 'Amarillo','Azul', 'Arena'];
    a.map((e) => console.log(`${e} tiene ${e.length} letras`));
/**
    a.map(e => {
        console.log(`${e} tiene ${e.length} letras`);
    });
*/
    a.forEach(element => {
        console.log(element);
    });
}
//arrow();

//parametros por defecto
function parametros(nombre, edad, pais='Colombia'){
    return `${nombre} Edad:${edad}, Pais:${pais}`;
}
function parametro(){
    let personas = [];
    personas.push(parametros('Camila', '25'));
    personas.push(parametros('María', '25', 'Italia'));
    return console.log(personas);
}
//parametro();  

//Destructurar arreglos
function destructurarArreglos(){
    const personas =['Camila', '23', 'Colombia', 'Desarrollador Web'];
    let [nombre, anios, pais, profesion] = personas;
    console.log(`${nombre}, Edad:${anios} Pais:${pais}, Profesion:${profesion}`);

    const mostrarInfo = ([nombre, , pais] = p) => {
        console.log(`${nombre} - ${pais}`);
    }

    mostrarInfo(personas);
}
//destructurarArreglos();

//--------------------
//Destructurar Objetos
let user = {
    nombre: String,
    correo: String,
    edad: Number,
    pais: Array
    //profesion: String
}

function destructurarObjetos(){
  user.nombre = "Camila";  
  user.correo = "camila@gmail.com";
  user.edad = 23;
  user.pais = ["Colombia", "Bogotá"];
  //user.profesion = "Ing Sistemas";

  //Aqui no se pone coma
  const {pais, profesion = 'No especificado' } = user;
  console.log(`País: ${pais[0]}  - Ciudad: ${pais[1]} - Profesión: ${profesion}`);

  const mostrarInfo = ({nombre, edad}) =>{
    console.log(`Nombre: ${nombre}  - Edad:${edad}`);
  }
  mostrarInfo(user);
}
//destructurarObjetos();
//--------------------

//--------------------
//Clases
class Animals{
    constructor(nombre){
        this.nombre = nombre;
    }

    mostrarInfo(){
        return `
        <b>Nombre:</b> ${this.nombre}<br/>
        `;
    }
}
const animal1 = new Animals('Perro');
const animal2 = new Animals('Gato');
//document.write(animal1.mostrarInfo());
//document.write(animal2.mostrarInfo());
//--------------------

//Crear Objetos
const crearObjeto = (nombre, raza) =>{
    return{
        nombre, 
        raza,
        mostrarInfo(){
            return `<b>Nombre:</b> ${nombre}  - <b>Raza:</b> ${raza} <br/>`;
        }
    }
}
//document.write(crearObjeto('Scubby', 'Pastor Alemán').mostrarInfo());
//document.write(crearObjeto('Lola', 'Golden').mostrarInfo());

//Parametros Rest y Spread


    