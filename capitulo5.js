//Consola

//Funciones de registro

console.assert(5 < 3); // Genera un mensaje si una condicion es falsa
console.clear(); // Limpia consola
console.error("Este es un error"); // Muestra mensaje con estilo a error
console.info("Este es un mensaje informativo"); // Mensaje informativo
console.log("Este es un mensaje de depuración");// Mensaje de depuracion
console.table([4, 2, 4, 5, 8, 9, 1, 4, 3, 77, 4]);// Muestra datos a traves de una table, recibe un array o un objeto
console.warn("Esto es una advertencia"); // Mensaje de Advertencia
console.dir([4, 2, 4, 5, 8, 9, 1, 4, 3, 77, 4]); //Despliega una lista de elementos de un array

//Funciones de Conteo

console.count(); //Sirve como un contador
console.countReset();// Resetea el contador count
console.count();

//Funciones de Agrupacion

console.group("Frutas"); //Crea grupos en la consola

console.log("Hola");
console.log("Hola1");
console.log("Hola2");

console.group("SubGrupo de Frutas");
console.log("Hola1");

console.groupEnd(); // Termina el subgrupo
console.groupEnd();//Termina el grupo

console.log("Johan");

console.groupCollapsed("Animales");// Crea el grupo perode forma cerrada

console.log("Perro");
console.log("Gato");
console.groupEnd();

//Funciones de Temporizacion

console.time();// Inicia un temporizador
console.timeEnd();//Guarda el valor del temporizador en un momento
console.time();
console.timeLog(); // Detiene el tempoizador

//Estilos en la consola

console.log("%cJohan","color: blue; background: red");