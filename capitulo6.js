//Metodos de seleccion de elementos

variable = document.getElementById("parrafo");//Seleccion por medio del ID
// document.write(variable + `<br>`);

variable1 = document.getElementsByTagName("p");//Trae una lista de elementos (No un array)
// document.write(variable1 + `<br>`);
// document.write(variable1[0]); // Seleccion de objetos de la lista

variable2 = document.querySelector("#parrafo");//Selecciona el primer elemento que coincida con el id
// document.write(variable2);

variable3 = document.querySelectorAll("#parrafo");// Selecciona todos los elementos (Genera un NodeList, No es un array)
// document.write(variable3[0]);

//Métodos de atributos de un elemento

const entrada = document.querySelector(".entrada");
// entrada.setAttribute("type", "text"); //Permite modificar los valores de los atributos de un elemento
// document.write(entrada.getAttribute("type"));

// entrada.removeAttribute("type");//Remueve el atributo type

//Atributos Globales

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable","false");//Permite que un elemento sea editable
titulo.setAttribute("dir", "rtl");//Posicion del elemento de derecha a izquierda o viceversa
// titulo.setAttribute("hidden", "true"); // Permite ocultar un elemento
titulo.setAttribute("tabindex", "0");//Permite mostrar si un objeto tiene focus
titulo.setAttribute("title", "Titulo");// Agrega una decsripcion al elemento al pasar sobre este

//Atributos de Inputs (Son editables en este momento)

document.write(entrada.className + `<br>`); //Permite observar el nombre de la clase de un elemento
document.write(entrada.value);// Permite observar el valor del elemento
document.write(entrada.type = "range" + `<br>`); //Permite observar el tipo del elemento
entrada.accept = "image/png"; //Permite aceptar tipos de archivos

entrada.minlenght = 5;//Pone una cantidad de caracteres minimos que debe cumplir un input

//Propiedad Style

titulo.style.color = "red";
titulo.style.backgroundColor = "blue";

//Clases, classList y sus metodos

titulo.classList.add("grande"); //Añade una clase a un elemento
titulo.classList.remove("grande");//Remueve una clase de un elemento
valor = titulo.classList.item(0);//Accede a la clase de un elemento (Devuelve informacion)

document.write(valor);

valor1 = titulo.classList.contains("grande");//Verifica si existe una clase en un elemento

document.write(valor1);

//se le puede añadri un segundo parametro true para indiicar que asi este la clase no la quite y false para que la quite
titulo.classList.toggle("grande");//Permite añadir o quitar una clase de un elemento (si existe la quita)

titulo.classList.replace("grande", "pequeño"); //Remplaza una clase por otra






