/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numerouno; //Declaramos las variables que vamos a usar para guardar los dos datos tomados y la suma 
    var numerodos;
    var suma;

    numerouno = document.getElementById("numeroUno").value; //Tomamos le valor que tenemos dentro del HTML con su ID y lo guardamos dentro de las variables
    numerodos = document.getElementById("numeroDos").value;

    numerouno = parseInt(numerouno); // Convertimos ambos 
    numerodos = parseInt(numerodos);
    
    suma = (numerouno + numerodos);

    alert(suma);
}

