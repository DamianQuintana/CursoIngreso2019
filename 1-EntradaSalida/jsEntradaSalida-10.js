/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var porcentaje;
    //Declaración de variables 

    importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    porcentaje = ((importe*25)/100);
    resultado = (porcentaje + importe);

    document.getElementById("resultado").value = resultado;
}


en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
}
