//Problema 1

const materias =
{
                fisica: [90,6,4, "fisica"],
                programacion: [80,8,4,"programacion"],
                algebra: [100,10,4, "algebra"],
                logica: [70,7,3, "logica"],
                tgs: [40,2,1,"tgs"],
                ingles: [90,7,4,"ingles"]
};

const aprobo = ()=>{
  for(materia in materias){

    console.group(`${materias[materia][3]}`);

    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajosPracticos = materias[materia][2];

    if (asistencias >= 80 && promedio >= 7 && trabajosPracticos == 4) {
      console.log(`%cResultado Final : APROBADO`, "color: green");
    } else {
      console.log(`%cResultado Final: REPROBADO`, "color: red");
    }

    console.groupCollapsed("Calificaciones");

    if(asistencias >= 80){
      console.log(`%cAsistencias : APROBADO`, "color: green");
    }else{
      console.log(`%cAsistencias : REPROBADO`, "color: red");
    }

    if(promedio >= 7){
      console.log(`%cPromedio : APROBADO`, "color: green");
    }else{
      console.log(`%cPromedio : REPROBADO`, "color: red");
    }

    if(trabajosPracticos == 4){
      console.log(`%cTrabajos : APROBADO`, "color: green");
    }else{
      console.log(`%cTrabajos : REPROBADO`, "color: red");
    }
    console.groupEnd();
    console.groupEnd();
  }
}

aprobo();

//Problema 2

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let index = 1; index < 15; index++) {
  if(index == 1){
    console.group("Semana 1");
  }
  console.group(`Día ${index}`);
  console.log(trabajo);
  console.log(descanso);
  console.log(tp);
  console.log(homework);
  console.groupEnd();
  if(index == 7){
    console.groupEnd();
    console.groupCollapsed("Semana 2");
  }
}

console.groupEnd();