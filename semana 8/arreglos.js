/*
//declarar un arreglo
var  listaSuper= [];

//insertar elemnto en un indice x
listaSuper [5]="leche";
//mostrar un elemnto leche dare ell indice que conozco
console.log (listaSuper[5]);
//mostrar todos los elementos del arreglo aqui no ocupo indice
//solo uso el arreglo como una variable
console.log (listaSuper);
//como mostrar el tamaño del arreglometodo length
console.log(listaSuper.length);
// llenar las posiciones del arreglo
listaSuper[0]="jamon";
listaSuper[1]="chiles";
listaSuper[2]="queso";
listaSuper[3]="refresco";
listaSuper[4]="shampoo";
//mostrar todos los elementos imprimiendo el arreglo como estructura
console.log(listaSuper);
//estraer la informacion del arreglo y procesarla
let obtener;
for (let x= 0; x<6; x++){
obtener=listaSuper[x];
console.log (obtener +  " producto de la lista numero: "+  ( x+1));
}
console.log("");
listaSuper[6]="salchicha";
listaSuper[7]="galletas";
listaSuper[8]="cafe";
listaSuper[9]="chocolate";
listaSuper[10]="atun";
//mostrar todos los elementos usando length
for (let x = 0; x<listaSuper.length; x++){
    obtener=listaSuper[x];
console.log (obtener +  " nuevos elementos posicion: " +  ( x+1));
} */
/*
//parte 2  metodos para rreglos
//como agregar un elemento a un arreglo final de este
//declarar de inicio elemntos en arreglo
 var colores =["rosa", "amarillo"];
console.log(colores + " mostrar elemntos del arreglo " );
colores.push("verde");
console.log(colores +" mostrar cuando se agrego el verde " );

//como agregar un elemnto al inicio del arreglo con el metodo unshift
colores.unshift("rojo");
console.log(colores + " mostrar cuando se agrego el rojo ");

//como eliminar el ultimo elemento agregado en el arreglo metodo 
//pop elimina el ultimo elemnto agregado del arreglo
colores.pop();
console.log(colores + " mostrar como se elimino el ultimo color verde ");
//como eliminar el primer elemnto agregado en el metodo shift
//shift Elimina y devuelve el primer elemento de un arreglo.
colores.shift();
console.log(colores + " como se elimino el primer color rojo ");
*/

//ejemplos con inlude y con every para busqueda y condicio
var personas = ["jose", "pedro","Maria","Karl","Rosa","Carlos"];
//ejempo con include preguntar si el arreglo contiene dato
var include = personas.includes ("Manuel");
console.log("esta el nombre Manuel en el arreglo: "+ include);
var include = personas.includes ("Karl");
console.log("esta el nombre Karl en el arreglo: "+ include);  
 
//EJEMPLO CON EVERY pregunta si todos los elementos sson diferentes a Manuel
include =personas.every((respuesta)=>{
    return respuesta != "Manuel";
});  
console.log("ninguno de los elementos es igual a Manuel: "+ include);

//EJEMPLO CON EVERY pregunta si algun elemento es igual  a Carlos 
include =personas.every((respuesta)=>{
    return respuesta != "Carlos";
});  
console.log("ninguno de los elementos es igual a Carlos: "+ include);
