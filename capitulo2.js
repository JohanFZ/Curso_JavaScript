//arrays

let frutas = ["Banana", "Uva", "Fresa", "Pera"];

// document.write(frutas[0]);

//Arrays Asociativos (Objetos)

let pc = {
  nombre: "JohanPC",
  procesador: "Intel Core I7",
  ram: "16",
  espacio: "1TB"
}

// document.write(pc["nombre"]);

let nombre = pc["nombre"];
let ram = pc["ram"];


frase = `El nombre de mi PC es <b>${nombre}</b> <br>
        la memoria ram es de <b>${ram} Gb</b>`;

// document.write(frase);


//Bucles e Iteracion

let numero = 0;


// while(numero < 10){
//   numero += 1;
//   document.write(numero + "<br>");
// }


// do {
//     numero += 1;
//     document.write(numero + "<br>");

// } while (numero < 10);

// for (let i = 0; i < 15; i++) {

//   if (i == 10) {
//     continue; //Salta el ciclo cuando esta condicion se cumpla
//   }
//   if (i == 14) {
//     break; //deja de realizar algun tipo de bucle
//   }
//   document.write(i + "<br>");
// }

// let animales = ["Gato", "Perro", "Tiranosaurio", "Conejo"];

// for(animal in animales) { //in devuelve la posicion de cada elemento (indice)
//   document.write(animal + "<br>");
//   document.write(animales[animal] + "<br>"); //bucle animales elemento animal

// }

// for (animal of animales) { //of devuleve el elemento
//   document.write(animal + "<br>");
// }

// let array0 = ["Johan", "Alison", "Isa"];
// let array1 = ["Claudia", "Santi", array0];

// forEjemplo: //label
// for(let array in array1){ // Se recorre el segundo array
//     if (array == 2) {
//       for(let array of array0){ // Se recorre el array de la posicion 2
//         document.write(array + "<br>");
//         break forEjemplo;
//       }
//     }else{
//       document.write(array1[array] + "<br>");
//     }
// }

//Funciones

