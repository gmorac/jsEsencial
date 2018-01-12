// Listado de estudiantes
var estudiantesCurso = [
	{	"codigo": "0001", "nombre": "Gustavo Parra", "nota": "7.9" }, 
	{	"codigo": "0002", "nombre": "Andrea Rojas", "nota": "9.5" }, 
	{	"codigo": "0003", "nombre": "Jefferson Rodríguez", "nota": "5.5"}, 
	{	"codigo": "0004", "nombre": "Adriana Noguera", 	"nota": "9.0" }, 
	{	"codigo": "0005", "nombre": "Felipe Cárdenas", "nota": "8.7" }, 
	{	"codigo": "0006", "nombre": "Gerardo Gutiérrez", "nota": "8.0" },
	{	"codigo": "0007", "nombre": "Jenny Sierra", "nota": "7.0" }, 
	{	"codigo": "0008", "nombre": "Javier Monsalve", "nota": "2.9" }, 
	{	"codigo": "0009", "nombre": "Sarai Moros", "nota": "8.9" }, 
	{	"codigo": "0010", "nombre": "Francisco Álvarez", "nota": "2.0" }
];

// Leer el listado de estudiantes
function leerJSON (json) {
	var salida = " ";
	var i;
	for (i = 0; i < json.length; i++) {
		salida+= "Código del estudiante: " + json[i].codigo + "<br/>" + "El nombre del estudiante es: " + json[i].nombre + "<br/>" + "La nota final del estudiante es: " + "<strong>" +json[i].nota + "</strong>" +"<br/><hr/>"
	}
	document.getElementById("estudiantes").innerHTML = salida;
}


// Mostrar el listado de estudiantes
function mostrarEstudiantes () {
	// invocar la función que lee e imprime el listado de estudiantes
	leerJSON(estudiantesCurso);	
}

// Calcular el promedio de las notas
function promedio (json) {
	var promedio = 0;
	estudiantesCurso.forEach(function (obj){
		promedio += parseFloat(obj.nota);
	})
	promedio = (promedio)/estudiantesCurso.length;
	promedio = "El promedio de las notas obtenidas por los estudiantes del curso es: " + promedio;
	document.getElementById('promedio').innerHTML = promedio;
	console.log(promedio);

}

// Ordenar el JSON
function ordenarJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


// Calcular la mejor nota
function mejorNota (){
	var ordenDescJSON = ordenarJSON(estudiantesCurso, 'nota', 'desc');
	var mejorNota = ordenDescJSON[0].nota;
	document.getElementById('mejorNota').innerHTML = "El estudiante del curso con la mejor nota es: " + ordenDescJSON[0].nombre + " con una nota de " + mejorNota;

	console.log("El estudiante del curso con la mejor nota es: " + ordenDescJSON[0].nombre + " con una nota de " + mejorNota);	
}

// Calcular la nota más baja
function peorNota () {
	var ordenAscJSON = ordenarJSON(estudiantesCurso, 'nota', 'asc');
	var malaNota = ordenAscJSON[0].nota;
	document.getElementById('peorNota').innerHTML = ordenAscJSON[0].nombre + " no te preocupes, tu nota fue " + malaNota + " con algo de esfuerzo y dedicación mejorarás tu rendimiento.";

	console.log(ordenAscJSON[0].nombre + " no te preocupes, tu nota fue " + malaNota + " con algo de esfuerzo y dedicación mejorarás tu rendimiento.");	
}

