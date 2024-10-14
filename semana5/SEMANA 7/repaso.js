//declaracion de variables
//con var  las varibales pueden cambiar tanto sus vLORES COMO LOS TIPO DE DATOS
//forma 1 var
console.log ("ejemplos de variables con var");
var numero;
console.log (numero);
numero=10;
console.log(numero);
numero= "saludos";
console.log(numero);
numero= 34.5;
console.log(numero);
//let
console.log ("ejemplos de variables con let");
let numero2; 
console.log (numero2);
numero2=10;
console.log(numero2);
numero2="saludos";
console.log(numero2);
numero2=10.67;
console.log(numero2);

//forma 3 asignacion
console.log ("ejemplos de variables con asignacion");
numero3= undefined;
console.log (numero3);
numero3= "saludos";
console.log (numero3);
numero3= 90;
console.log (numero3);

//operaciones aritmetica
var num1, num2, res;
//suma
console.log("");
console.log("operaciones basicas - suma ");
num1=10;
num2=20;
res= num1 + num2;
console.log("el resultado de la suma es :" +res);

//resta

console.log("");
console.log("operaciones basicas - resta ");
num1=10;
num2=20;
res= num1 - num2;
console.log("el resultado de la resta es :" +res);

//multiplicacion

console.log("");
console.log("operaciones basicas - multiplicacion ");
num1=10;
num2=20;
res= num1 * num2;
console.log("el resultado de la multiplicaion es :" +res);

//division

console.log("");
console.log("operaciones basicas - division ");
num1=10;
num2=20;
res= num1 / num2;
console.log("el resultado de la division es :" +res);

//mod 
console.log("");
console.log("operaciones basicas - mod ");
num1=10;
num2=20;
res= num1 % num2;
console.log("el resultado de la mod es :" +res);
//ecuaciones
console.log("");
console.log("operaciones ecuaciones ");
console.log("2x+3y-90");
x=10;
y=20;
res=2*x + 3*y -90;
console.log("el resultado de la ecuacion es: "+res);

//funciones en JS
console.log("ecuacion (3x + y/z + 7");
function eq1(x,y,z){
x= (3*x + y)/(z + 7);
console.log(x);

}
eq1(4,6,8);
console.log("");
console.log("ejemplo de calcular el area de un circulo ");
function  areaCirculo(radio){
    return 3.1416 * (radio * radio);
} 
areaC=areaCirculo(25);
console.log (areaC +  " u2 ");

