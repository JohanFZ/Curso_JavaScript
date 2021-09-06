//Primer Problema

let free = false;

const validarcliente = (time) =>{
  let edad = prompt("Cual es tu edad?");
  if(edad > 18){
      if(time >= 2 && time < 7 && free == false){
        alert("Puedes pasar gratis por ser la primera persona despues de las 2 A.M");
        free = true;
      }else{
        alert("Debes pagar la entrada");
      }
  }else{
    alert("No puedes ingresar a la fiesta");
  }
}

// validarcliente(11);
// validarcliente(3);
// validarcliente(3.5);


//Segundo problema

// let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p) =>{
  let presencia = prompt(nombre);
  if (presencia == "P" || presencia == "p") {
    alumnosTotales[p][1]++;
  }
}

for (let i = 0; i < 30; i++) {
  for(alumno in alumnosTotales){
    tomarAsistencia(alumnosTotales[alumno][0], alumno);
  }
}

for (alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}: <br>
  Presencias: ${alumnosTotales[alumno][1]} <br>
  Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;

  if (30 - alumnosTotales[alumno][1] > 18){
    resultado += " REPROBADO POR INASISTENCIAS";
  }else{
    resultado += `<br><br>`
  }
  document.write(resultado);
}

//Problema 3

const sumar = (num1, num2) =>{
  return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) => {
  if (num2 == 0) {
    alert("No se puede dividir entre cero");
  }else{
    return parseFloat(num1) / parseFloat(num2);
  }
}

// alert("Que operacion deseas realizar?")
// let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División");
// let numero1 = prompt("Numero 1 para la operación");
// let numero2 = prompt("Numero 2 para la operación");

if(operacion == 1){
  document.write(sumar(numero1,numero2) + "<br>")
}
else if (operacion == 2) {
  document.write(restar(numero1, numero2) + "<br>")
}
else if (operacion == 3) {
  document.write(multiplicar(numero1, numero2) + "<br>")
}
else if (operacion == 4) {
  document.write(dividir(numero1, numero2) + "<br>")
}
else{
  alert("Seleccione una opcion valida");
}
