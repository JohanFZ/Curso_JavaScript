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
entrada.setAttribute("type", "color"); //Permite modificar los valores de los atributos de un elemento
document.write(entrada.getAttribute("type"));

entrada.removeAttribute("type");//Remueve el atributo type

//Atributos Globales
