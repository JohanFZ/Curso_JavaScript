//Metodos de Cadena

let cadena = "   Hola soy Johan   ";
let cadena2 = "de";

let concat = cadena.concat(cadena2); //concatena dos cadenas de texto
let swith = cadena.startsWith(cadena2);//Devuelve true si una cadena inicia igual que la otra (cadena => cadena)
let ewith = cadena.endsWith(cadena2);//Devuelve true si una cadena finaliza igual que la otra
let includes = cadena.includes(cadena2);//Devuelve true si encuentra una cadena entre otra
let indexof = cadena.indexOf("de");//Devuelve la posición donde inicia el caracter de la palabra, devuelve -1 si no la encuentra
let lastindexof = cadena.lastIndexOf("de");//devuelve la posición de la ultima concordancia
let padStart = cadena.padStart(6, "a");//Rellena la cadena con un parámetro y cantidad específicos al inicio
let padEnd = cadena.padEnd(6, "a");//Rellena la cadena con un parámetro y cantidad específicos al final
let repeat = cadena.repeat(2);//Repite la cadena según una cantidad
let split = cadena.split(" ");//Divide la cadena como se la pidamos
let substring = cadena.substring(0, 4);//Divide la palabra desde y hasta donde queramos.
let toLowerCase = cadena.toLowerCase();//Convierte todo a minúscula
let toUpperCase = cadena.toUpperCase();//Convierte todo en mayúsculas
let toString = cadena.toString();//Convierte un dato a string
let trimStart = cadena.trimStart();//Quitan los espacios iniciando o finalizando una cadena de texto


// document.write(resultado);
// console.log(resultado)


//Metodos de Arrays

let nombres = ["Johan", "Santi", "Dani", "Ali"];
let numeros = [1,40,25,8478];

let pop = nombres.pop();//Elimina el ultimo elemento del array y lo guarda en la variable
let shift = nombres.shift();//Elimina el primer elemento del array
let push = nombres.push("Ali");//Agrega un elemento a un array y nos devuelve la cantidad de elementos que tiene ese array.
let unshift = nombres.unshift("Camilo");//Agrega nuevos elementos al inicio de un array y devuelve la nueva longitud del mismo
let sort = numeros.sort();//Ordena los elementos de un array
let splice = nombres.splice(1, 2, "Isa");//permite eliminar objetos por medio de dos parámetros, desde donde se quiere eliminar los elementos y cuantos elementos se van a eliminar

//Accesores

let join = nombres.join(" ; ");//Devuelve un nuevo array el cual contiene el array original pero convertido en cadena de texto.
let slice = nombres.slice(0, 2);//Devuelve un conjunto de elementos desde el inicio hasta le fin (fin no incluido)

//Repeticion

//Funciona como un bucle y recibe como parámetro una función, también devuelve parámetros según una condición.
let filter = nombres.filter(nombre => nombre.length > 3);
//Funciona igual que el filter, pero no devuelve nada.
let forEach = nombres.forEach(nombre => document.write(nombre + "<br>"));

// document.write(nombres + "<br>");
// document.write(resultado + "<br>");

//Objeto Math

let numero = 4.7;

let raizcuadrada = Math.sqrt(numero);
let raizcubica = Math.cbrt(numero);
let max = Math.max(1, 45, 2, 0, 78, 14, 79, 6, 9, 4);
let min = Math.min(1, 45, 2, 0, 78, 14, 79, 6, 9, 4);
let random = Math.random() * 100;//Devuelve un numero pseudo aleatorio (Nunca es 100% remoto) entre 0 y 1
let round = Math.round(random);//Redondea un numero entre 0 y 100 incluyéndolos
let floor = Math.floor(numero); //Devuelve el mayor entero  menor a un numero
let fround = Math.fround(numero); //Devuelve la representación flotante de precisión simple (4 bytes) mas cercana a un numero
let trunc = Math.trunc(numero); //Elimina los decimales

document.write(trunc);

//Propiedades

const pi = Math.PI
const unm = Math.SQRT1_2 //raiz cuadrada de un medio
const r2 = Math.SQRT2 // raiz cuadrado de 2

const E = Math.E; //euler
const ln2 = Math.LN2; //Logaritmo natural de 2
const ln10 = Math.LN10; //Logaritmo natural de 10
const log2E = Math.LOG2E; //Logaritmo de E con base 2
const log10E = Math.LOG10E; //Logaritmo de E con base 2

