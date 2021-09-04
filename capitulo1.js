//Historia de Cofla 1

let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let montoRoberto = prompt("Cuanto dinero tienes Roberto?");
let montopedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);
montoRoberto = parseInt(montoRoberto);
montopedro = parseInt(montopedro);

//Condiciones Cofla

if(dineroCofla > 0.6 && dineroCofla < 1){
  alert("Puedes comprar un Palito de gelado de agua");
  alert("Tus vueltas son : " + (dineroCofla - 0.6));
}
else if(dineroCofla > 0.99 && dineroCofla < 1.6){
  alert("Puedes comprar un Palito de crema");
  alert("Tus vueltas son : " + (dineroCofla - 1));
}
else if (dineroCofla > 1.59 && dineroCofla < 1.7) {
  alert("Puedes comprar un Bombom de helado marca heladix");
  alert("Tus vueltas son : " + (dineroCofla - 1.6));
}
else if (dineroCofla > 1.69 && dineroCofla < 1.8) {
  alert("Puedes comprar un Bombom de helado marca heladovich");
  alert("Tus vueltas son : " + (dineroCofla - 1.7));
}
else if (dineroCofla > 1.79 && dineroCofla < 2.9) {
  alert("Puedes comprar un Bombom de helado marca helardo");
  alert("Tus vueltas son : " + (dineroCofla - 1.8));
}
else if(dineroCofla >2.89){
  alert("Puedes comparar un Potecito de helado con conftes o un potye de 1/4 KG");
  alert("Tus vueltas son : " + (dineroCofla - 2.9));
}else{
  alert("No te alcanza para nada");
}

//Condiciones Roberto

if (montoRoberto > 0.6 && montoRoberto < 1) {
  alert("Puedes comprar un Palito de gelado de agua");
  alert("Tus vueltas son : " + (montoRoberto - 0.6));
}
else if (montoRoberto > 0.99 && montoRoberto < 1.6) {
  alert("Puedes comprar un Palito de crema");
  alert("Tus vueltas son : " + (montoRoberto - 1));
}
else if (montoRoberto > 1.59 && montoRoberto < 1.69) {
  alert("Puedes comprar un Bombom de helado marca heladix");
  alert("Tus vueltas son : " + (montoRoberto - 1.6));
}
else if (montoRoberto > 1.69 && montoRoberto < 1.79) {
  alert("Puedes comprar un Bombom de helado marca heladovich");
  alert("Tus vueltas son : " + (montoRoberto - 1.7));
}
else if (montoRoberto > 1.79 && montoRoberto < 2.89) {
  alert("Puedes comprar un Bombom de helado marca helardo");
  alert("Tus vueltas son : " + (montoRoberto - 1.8));
}
else if (montoRoberto > 2.89) {
  alert("Puedes comparar un Potecito de helado con conftes o un potye de 1/4 KG");
  alert("Tus vueltas son : " + (montoRoberto - 2.9));
} else {
  alert("No te alcanza para nada");
}

//Condiciones Pedro

if (montopedro > 0.6 && montopedro < 1) {
  alert("Puedes comprar un Palito de gelado de agua");
  alert("Tus vueltas son : " + (montopedro - 0.6));
}
else if (montopedro > 0.99 && montopedro < 1.6) {
  alert("Puedes comprar un Palito de crema");
  alert("Tus vueltas son : " + (montopedro - 1));
}
else if (montopedro > 1.59 && montopedro < 1.69) {
  alert("Puedes comprar un Bombom de helado marca heladix");
  alert("Tus vueltas son : " + (montopedro - 1.6));
}
else if (montopedro > 1.69 && montopedro < 1.79) {
  alert("Puedes comprar un Bombom de helado marca heladovich");
  alert("Tus vueltas son : " + (montopedro - 1.7));
}
else if (montopedro > 1.79 && montopedro < 2.89) {
  alert("Puedes comprar un Bombom de helado marca helardo");
  alert("Tus vueltas son : " + (montopedro - 1.8));
}
else if (montopedro > 2.89) {
  alert("Puedes comparar un Potecito de helado con conftes o un potye de 1/4 KG");
  alert("Tus vueltas son : " + (montopedro - 2.9));
} else {
  alert("No te alcanza para nada");
}