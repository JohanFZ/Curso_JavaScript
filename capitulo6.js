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

document.write(valor1 + `<br>`);

//se le puede añadri un segundo parametro true para indiicar que asi este la clase no la quite y false para que la quite
titulo.classList.toggle("grande");//Permite añadir o quitar una clase de un elemento (si existe la quita)

titulo.classList.replace("grande", "pequeño"); //Remplaza una clase por otra

//Obtencion y Modicacion de elementos

const titulito = document.querySelector(".titulito");

let resultado = titulito.textContent;//Muestra el contenido texto de un elemento sin mostrar las etiquetas HTML
let resultado1 = titulito.innerHTML;//Muestra el contenido de un elemento incluyendo el codigo HTML
let resultado2 = titulito.outerHTML;//Muestra todo el contenido de un elemento incluyendo su propia etiqueta

// document.write(resultado);
// alert(resultado1);
// alert(resultado2);

//Creacion de Elementos

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI");//Permite crear elementos HTML, se deben usar mayusculas para definirlos por el case sensitive

const textNode = document.createTextNode("Hola este es un texto anidado al contenedor");//Permite crear un nodo de texto

item.appendChild(textNode);
contenedor.appendChild(item);

const fragmento = document.createDocumentFragment();//Sirve para añadir multiples elementos evitando el consumo de recursos

for (let index = 0; index < 4; index++) {
  const item1 = document.createElement("LI");
  item1.innerHTML = "Esto es una prueba";
  fragmento.appendChild(item1);
}

contenedor.appendChild(fragmento);

console.log(fragmento);
console.log(contenedor);
console.log(item);
console.log(textNode);
// document.write(item);

//Obtencion y modificacion de CHILDS

const content = document.querySelector(".content");

const primerHijo = content.firstChild;//Trae el primer hijo de un padre (si tiene espacio lo cuenta como text)
const ultimoHijo = content.lastChild;//Trae el ultimo hijo de un padre
const pHijo = content.firstElementChild;//Trae el primer hijo sin importar los espacios (Mas util)
const uHijo = content.lastElementChild;//Trae el ultimo elemento sin importar los espacios
const childNodes = content.childNodes;//Devuelve un NodeList con todos los hijos
const children = content.children;//Devuleve una coleccion HTMkl con todas als eiquetas Hijas


console.log(primerHijo);
console.log(ultimoHijo);
console.log(pHijo);
console.log(uHijo);
console.log(childNodes);
console.log(children);

//Metodos de Childs

const parraf = document.createElement("P").innerHTML = "Parrafo";
const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML = "Este es un Titulo jskadasd"

const h2Viejo = document.querySelector(".h2");

content.replaceChild(h2Nuevo, h2Viejo); //Remplaza hijos por otros
// content.removeChild(h2Nuevo); //Elimina un hijo

const respuesta = content.hasChildNodes();//verifica si el elemento tiene hijos

if(respuesta){
  document.write("El elemento tiene hijos");
}else{
  document.write("El elemento no tiene Hijos");
}

//Propiedades de Parents

const parent = h2Nuevo.parentElement;//Nos dice quien es el padre del elemento

console.log(parent);

//Propiedades de Siblings (Hermanos)

console.log(h2Nuevo.nextSibling);
console.log(h2Nuevo.previousSibling);
console.log(h2Nuevo.nextElementSibling);
console.log(h2Nuevo.previousElementSibling);
