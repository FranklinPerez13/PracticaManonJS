var n1 = prompt("Escribe el primer numero")
var n2 = prompt("Escribe el segundo numero")
var n3 = prompt("Escribe el tercer numero")

function Mayor()
{    
    if (n1 == n2 && n1 == n3 )
    {
     document.write("Los numeros son iguales");
    }
    
    if ( n1 > n2 && n1 > n3)
    {
    document.write(n1 + " Es el mayor")
    }
    
    if ( n2 > n1 && n2 > n3)
    {
    document.write(n2 + " Es el mayor")
    }
    
    if ( n3 > n2 && n3 > n1)
    {
    document.write(n3 + " Es el mayor")
    }
}

 Mayor();
 