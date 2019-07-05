/* 
    Debemos lograr tomar un dato por 'PROMPT' 
    y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
    var dato //Declaramos la variable donde va a entrar el dato ingresado 

    dato = prompt("Ingrese su nombre");
    document.getElementById("elNombre").value = dato;

}

