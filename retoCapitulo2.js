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
class Calculadora{
  sumar = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2);
  }

  restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
  }
  multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
  }
  dividir = (num1, num2) => {
    if (num2 == 0) {
      alert("No se puede dividir entre cero");
    }else{
      return parseFloat(num1) / parseFloat(num2);
    }
  }
  rcuadrada = (num1) => {
    return Math.sqrt(num1);
  }
  rcubica = (num1) => {
    return Math.cbrt(num1);
  }
  potenciacion = (num1, num2)=> {
    return Math.pow(num1, num2);
  }
}

  const calcu = new Calculadora();

alert("Que operacion deseas realizar?");

let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Raiz Cuadrada,    6: Raiz Cubica, 7: Potenciacion");

if(operacion == 1){
  let numero1 = prompt("Numero 1 para la operación");
  let numero2 = prompt("Numero 2 para la operación");
  document.write(calcu.sumar(numero1,numero2) + "<br>")
}
else if (operacion == 2) {
  let numero1 = prompt("Numero 1 para la operación");
  let numero2 = prompt("Numero 2 para la operación");
  document.write(calcu.restar(numero1, numero2) + "<br>")
}
else if (operacion == 3) {
  let numero1 = prompt("Numero 1 para la operación");
  let numero2 = prompt("Numero 2 para la operación");
  document.write(calcu.multiplicar(numero1, numero2) + "<br>")
}
else if (operacion == 4) {
  let numero1 = prompt("Numero 1 para la operación");
  let numero2 = prompt("Numero 2 para la operación");
  document.write(calcu.dividir(numero1, numero2) + "<br>")
}
else if (operacion == 5){
  let numero1 = prompt("Numero 1 para la operación");
  document.write(calcu.rcuadrada(numero1));
}
else if (operacion == 6) {
  let numero1 = prompt("Numero 1 para la operación");
  document.write(calcu.rcubica(numero1));
}
else if (operacion == 7) {
  let numero1 = prompt("Numero 1 para la operación");
  let numero2 = prompt("Digite la potencia");
  document.write(calcu.potenciacion(numero1, numero2));
}
else{
  alert("Seleccione una opcion valida");
}
