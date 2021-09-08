//Segundo Problema

const obtenerinformacion = (materia) =>{
  materias = {
      fisica: ["Julio Profe","johan", "alison", "isa"],
      programacion: ["Dalto","Clau", "Alex", "johan"],
      logica: ["Leonidas","Fanny", "Sebas", "Reyes"],
      matematica: ["Reinaldo","Santi", "johan"]
  }
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  }else{
    return materias;
  }
}

const mostrarInfo = (materia) =>{
  let info = obtenerinformacion(materia);
  let estudiantes = info[0];
  let maestro = estudiantes.shift();
  let asignatura = info[1];

  if (info !== false){
    let alumnos =
      document.write(`Alumnos presentes en ${asignatura}: <b>${estudiantes}</b> y esta dictada por
      el profesor ${maestro} <br>`);
  }
}

const cantidadDeClases = (alumno) =>{
  let informacion = obtenerinformacion();
  let clasesPresentes = [];
  let  cantidad = 0;
  for(info in informacion){
    if(informacion[info].includes(alumno)){
      cantidad++;
      clasesPresentes.push(" " + info);
    }
  }
  return `El estudiante ${alumno} se encuentra inscrito en ${cantidad} clases, las cuales son
  ${clasesPresentes}`;
}

// let resultado = mostrarInfo("fisica");
// let resultado1 = mostrarInfo("matematica");
// let resultado2 = mostrarInfo("logica");

// // let resultado3 = cantidadDeClases("johan");
// // document.write(resultado3);


//Problema 3

let materias = {
  fisica: ["Julio Profe", "johan", "alison", "isa"],
  Programacion: ["Dalto", "Clau", "Alex", "johan"],
  logica: ["Leonidas", "Fanny", "Sebas", "Reyes"],
  matematica: ["Reinaldo", "Santi", "johan"]
}


const inscribir = (alumno, materia) =>{
  personas = materias[materia];
  if(personas.length >= 21){
    document.write("Lo siento, no hay cupos para la materia <br>");
  }else{
    personas.push(alumno);
    if(materia == "fisica"){
      materias = {
        fisica: personas,
        programacion: materias['programacion'],
        logica: materias['logica'],
        matematica: materias['matematica']
      }
    }
    else if (materia == "programacion") {
      materias = {
        fisica: materias['fisica'],
        programacion: personas,
        logica: materias['logica'],
        matematica: materias['matematica']
      }
    }
    else if (materia == "logica") {
      materias = {
        fisica: materias['fisica'],
        programacion: materias['programacion'],
        logica: personas,
        matematica: materias['matematica']
      }
    }
    else if (materia == "matematica") {
      materias = {
        fisica: materias['fisica'],
        programacion: materias['programacion'],
        logica: materias['logica'],
        matematica: personas
      }
    }
    document.write(`Inscrito en la materia ${materia}, estudiante ${alumno} <br>`)
  }
}
document.write(materias["fisica"] + "<br>");

let resultado4 = inscribir("Julian", "fisica");
let resultado5 = inscribir("Jorge", "fisica");
let resultado6 = inscribir("Luz", "fisica");
let resultado7 = inscribir("Andres", "fisica");
let resultado8 = inscribir("Miriam", "fisica");
let resultado9 = inscribir("Cata", "fisica");
let resultado10 = inscribir("Dayana", "fisica");
let resultado11 = inscribir("Laura", "fisica");
let resultado12 = inscribir("Teresa", "fisica");
let resultado13 = inscribir("Paula", "fisica");
let resultado14 = inscribir("Sergio", "fisica");
let resultado15 = inscribir("David", "fisica");
let resultado16 = inscribir("Flor", "fisica");
let resultado17 = inscribir("Rafa", "fisica");
let resultado18 = inscribir("Tatis", "fisica");
let resultado19 = inscribir("Nico", "fisica");
let resultado20 = inscribir("Raul", "fisica");
let resultado21 = inscribir("Alex", "fisica");
let resultado22 = inscribir("Kevin", "fisica");




document.write(materias["fisica"]);