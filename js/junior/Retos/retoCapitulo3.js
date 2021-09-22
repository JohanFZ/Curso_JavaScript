class celular{
  constructor(color, peso, resolucionP, resolucionC, ram){
    this.color = color;
    this.peso = peso;
    this.resolucionP = resolucionP;
    this.resolucionC = resolucionC;
    this.ram = ram;
    this.encendido = false;
  }

  botonEncendido(){
    if(this.encendido == false){
      alert("Celular Prendido");
      this.encendido = true;
    }else{
      alert("El celular esta apagando");
      this.encendido = false;
    }
  }

  reiniciar(){
    if(this.encendido == true){
      alert("Celular Reiniciando");
    }else{
      alert("El celular esta apagado, no se puede reiniciar.");
    }
  }


  Tfotos(){
    if(this.encendido == true){
      alert("Foto tomada");
    }else{
      alert("El celular esta apagado, no se pueden tomar fotos.")
    }
  }

  grabar(){
    if (this.encendido == true) {
      alert(`Grabando a una resolucion de ${this.resolucionC}`);
    } else {
      alert("El celular esta apagado, no se puede grabar.")
    }
  }

  mostrarInfo(){
    return `
      Color: ${this.color} <br>
      Peso: ${this.peso} <br>
      Resolucion de Pantalla: ${this.resolucionP} <br>
      Resolucion de Camara: ${this.resolucionC} <br>
      Ram: ${this.ram} <br>
    `
  }
}


const celular1 = new celular("Negro", "150 g", "720x1280", "20 MegaPixeles", "2GB");
const celular2 = new celular("Cafe", "300 Kg", "720x1024", "40 MegaPixeles", "4GB");
const celular3 = new celular("Rosado", "400 Kg", "720x2080", "80 MegaPixeles", "8GB");

// document.write(celular1.mostrarInfo());

// celular1.botonEncendido();
// celular1.botonEncendido();
// celular1.reiniciar();
// celular1.grabar();
// celular1.botonEncendido();
// celular1.grabar();

//Segundo Problema

class gamaAlta extends celular{
  constructor(color, peso, resolucionP, resolucionC, ram, resolucionCFrontal){
    super(color, peso, resolucionP, resolucionC, ram);
    this.resolucionCFrontal = resolucionCFrontal;
  }

  grabarCLenta(){
    if (this.encendido == true) {
      alert(`Grabando en camara lenta a una resolucion de ${this.resolucionC}`);
    } else {
      alert("El celular esta apagado, no se puede grabar.");
    }
  }

  reconocimientoFacial(){
    if (this.encendido == true) {
      alert("Vamos a inicar el reconocimiento facial");
    }else{
      alert("El celular esta apagado, no se puede iniciar el proceso de reconocimiento.");
    }
  }

  infoAltaGama(){
    return this.mostrarInfo() + `Camara Frontal: ${this.resolucionCFrontal}`;
  }
}

const celularGamaAlta = new gamaAlta("Gris", "250 g", "1020x1280", "20 MegaPixeles", "16GB", "40 MegaPixeles");

// document.write(celularGamaAlta.infoAltaGama());

//Tercer Problema

class App{
  constructor(descargas, puntuacion, peso){
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  BotonEncendido(){
    if(this.iniciada == false && this.instalada == true){
      this.iniciada = true;
      alert("App abierta");
    }
    else if (this.iniciada == true && this.instalada == true){
      this.iniciada = false;
      alert("App Cerrada");
    }else{
      alert("No esta instalada la app");
    }
  }

  instalar(){
    if(this.instalada == false){
      this.instalada = true;
      alert("App instalada corectamente");
    }else{
      alert("Ya esta instalada");
    }
  }

  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("App desinstalada corectamente");
    }else{
      alert("La app no se encuentra instalada");
    }
  }

  verInfo(){
    return `
      Descargar : ${this.descargas} <br>
      Puntuación : ${this.puntuacion} <br>
      Peso : ${this.peso} <br>
    `
  }
}

const app1 = new App(1420, 5, "103 mb");

app1.BotonEncendido();
app1.desinstalar();
app1.instalar();
app1.BotonEncendido();
app1.desinstalar();

document.write(app1.verInfo())