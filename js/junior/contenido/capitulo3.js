//Programacion Orientada a Objetos

class animal{
  constructor(especie, edad, color){
    this.especie = especie; //Creacion de propiedades
    this.edad = edad;
    this.color = color;
    this.informacion = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${this.color}`;
  }
  verinfo(){
    document.write(this.informacion + "<br>");
  }
}

class perro extends animal{
  constructor(especie,edad, color, raza){
    super(especie,edad, color);
    this.raza = null;
  }

  // static ladrar(){
  //   alert("Waw Waw");
  // }

  set setRaza(newName){
    this.raza = newName;
  }

  get getRaza(){
    return this.raza;
  }
}

const perro1 = new perro("Perro", 3, "Café", "Labrador");
const pajaro = new animal("Loro", 5, "Verde");

perro1.verinfo();
// perro.ladrar();
perro1.setRaza = "Doberman";
document.write(perro1.getRaza);
// pajaro.verinfo();

// console.log(perro);
// document.write(perro.informacion + "<br>");
// document.write(pajaro.informacion + "<br>");
