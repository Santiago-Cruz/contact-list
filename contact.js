//const prompt = require("prompt-sync")();
const lista= [{
    nombre: "Santiago", apellido: "Cruz",
    ID: 1002392961, telefono: 3153607024,
    ubicaciones: ["Tunja", "Rosales"]},
    {nombre: "Juan", apellido: "Castro",
    ID: 400657821, telefono: 3213345654,
    ubicaciones: ["Bogota", "Cedritos"]}];

function Eliminar(){
    /*Funcion para eliminar contacto de acuerdo
    a su index en la lista*/
    var x = document.getElementById("x").value;
    if (x){
        lista.splice(x-1, 1);
        CadenaAObjeto();
        imprimir();
        ObjetoACadena();
    }
}
function imprimir(){
    // Imprime la lista de contactos en una tabla
    if (true){
        for (var i = 0; i < lista.length; i++) {
			var row = "<tr><td>" +(i+1) + "</td>";
			row += "<td>" + lista[i].nombre + "</td>";
			row += "<td>" + lista[i].apellido + "</td>";
            row += "<td>" + lista[i].ID + "</td>";
			row += "<td>" + lista[i].telefono + "</td>";
            row += "<td>" + lista[i].ubicaciones[0] + "</td>";
			row += "<td>" + lista[i].ubicaciones[1] + "</td></tr>";
			document.getElementById("data").innerHTML += row;
		}
        document.getElementById("retForm").reset();
    }
}
function data(obj){
    /*Funcion que recibe los contactos y los asigna a una lista 
    'lista' */
    obj.nombre = document.getElementById("nombre").value;
    obj.apellido = document.getElementById("apellido").value;
    obj.ID = document.getElementById("ID").value;
    obj.telefono = document.getElementById("telefono").value;
    obj.ubicaciones[0] = document.getElementById("ciudad").value;
    obj.ubicaciones[1] = document.getElementById("barrio").value;
    if (obj.nombre){
        lista.push(JSON.stringify(obj));
        CadenaAObjeto();
        imprimir();
        ObjetoACadena();
    }
}

function CadenaAObjeto(){
    /* Funcion que recibe cada contacto como string 
    y lo convierte a objeto con JSON para imprimirlo */
    for (let i = 0; i <= lista.length-1; i++){
        if (typeof lista[i] === 'string'){
            lista[i]= JSON.parse(lista[i]);
        }
    }   
}

function ObjetoACadena(){
    /* Funcion que convierte a cadena cada objeto de la lista
    para poder recibir uno nuevo del ususario */
    for (let i = 0; i <= lista.length-1; i++){
        lista[i]= JSON.stringify(lista[i]);
    }
}
const user= {
    ID: 11,
    nombre:"nombre",
    apellido: "apellido",
    telefono: 00,
    ubicaciones: ["ciudad", "barrio"],
}

function cambio(){
    /* funcion que inicia */
    data(user);
    Eliminar();
}

function removeNode(){
    /* Funcion que elimina elementos de la tabla 
    antes de volverla a imprimmir */
    var node = document.getElementById("data");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}

var retForm = document.getElementById("retForm");
var retOp = document.getElementById("retOp");
function submitFormReturn(event) {
    retForm.style.display = "none";
    retOp.innerHTML = "<b>Form submit successful</b>";
}