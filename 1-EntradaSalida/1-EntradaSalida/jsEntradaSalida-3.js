/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
   var dato //Declaramos la variable en donde se va a guardar el dato 
  dato = document.getElementById("elNombre").value; /*Esta función consta de 3 partes 
                                                    document = Significa que podremos manipular el HTML a traves del JS
                                                    getElementById = Es la funcion la cual toma el valor del "elNombre" el cual lo obtenemos a traves de "inspeccionar"
                                                    value = que nos indica que tomamos el VALOR del ID ("elNombre")*/
  alert(dato);
}


