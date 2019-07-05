/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre; //Primero declaramos la variable
    nombre = prompt("Ingrese su nombre"); //Guardamos en "nombre" lo ingresado a través de la funcion "prompt"
    alert("Su nombre es  " +nombre); //Mostramos por pantalla lo guardado en nombre a traves de la función "prompt"
}
