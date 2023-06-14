//1- variables y tipos de datos

console.log(nombre = "Romina");
console.log (edad = ("28"));

console.log("Mi nombre es: " + nombre);
console.log("Mi edad es: " + edad);

let esMayorDeEdad = parseInt(edad) >= 18;

console.log("¿Es mayor de edad? " + esMayorDeEdad);

let añoDeNacimiento = new Date().getFullYear() - parseInt(edad);

console.log("Tu año de nacimiento es: " + añoDeNacimiento)

//2- operaciones arimetricos 

//asigna los numeros a las variables
let.num1 = 10;
let.num2 = 3;

//calcula la suma 
let suma = num1 + num2;

//calcula la resta
let resta = num1 - num2;

//calcula la multiplicacion 
let multiplicacion = num1 * num2;

//calcula la divivion
let division = num1 / num2;

//calcula el modulo
let modulo = num1 % num2;

//muestra los resultados 
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);

//asigna los numeros a las variables
num1 = 10;
num2 = 3;

//incrementa en uno el valor de num1
num1 += 1;

//decrementa en uno el valor de num2
num2 -= 1;

//muestra los valores actualizados 
console.log("num1 incrementado:", num1);
console.log("num2 decrementado:", num2);

//asigna los numeros a las variables
let num1 = 10;
let num2 = 10;

num1 = 10;
num2 = 5;

//comprueba si num1 es menor que num2
if (num1 >= num2) {
  console.log("num1 es mayor o igual que num2");
}
//comprueba si num1 es menor que num2
if (num1 < num2) {
  console.log("num1 es menor que num2");
}
//comprueba si num1 es mayor o igual que num2
if (num1 >= num2) {
  console.log("num1 es mayor o igual que num2");
}
//comprueba si num1 es menor que o igual que num2
if (num1 <= num2) {
  console.log("num1 es menor o igual que num2");
}

//asigna la variable 
let edad = 15;
let esAdolescente = 13 <= edad && edad <= 19;

//comprueba si la edad esta adentro del rango de adolecencia
if (esAdolescente) {
  console.log("La persona es adolescente");
} else {
  console.log("La persona no es adolescente");
}

//asigna la edad de la variable 
edad = 70;

//comrueba si la edad es menor que 13 o mayor que 65
let esNinoOJubilado = edad < 13 || edad > 65;

//inprime resultado 
if (esNinoOJubilado) {
  console.log("La persona es un niño o jubilado");
} else {
  console.log("La persona no es un niño ni jubilado");
}

//supongamos que la variable es mayordeedad tiene el valo booleano vervadero(tue)
let (esMayorDeEdad) = true;

//Comprueba si esMayorDeEdad es verdadero o falso
if (esMayorDeEdad) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

//Asigna el puntaje a la variable
let puntaje = 75;

 //Verifica el puntaje y muestra el mensaje correspondiente
if (puntaje < 60) {
  console.log("Reprobado");
}
if (puntaje < 90) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}

