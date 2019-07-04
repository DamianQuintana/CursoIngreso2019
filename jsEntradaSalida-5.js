/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre; //declaramos las variables
    var edad; 

    edad = document.getElementById("laEdad").value; //Guardamos el valor tomado por el usuario en edad
    nombre = document.getElementById("elNombre").value; //Guardamos el valor tomado por el usuario en nombre

    alert("Usted se llama "+ nombre + " y tiene " + edad + " años " ); //Mostramos por pantalla, concatenamos, es decir usamos el "+"
   //alert("tiene" + edad);  //Mostramos por pantalla 


    

}

