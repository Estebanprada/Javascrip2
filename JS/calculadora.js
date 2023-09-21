function calculadoras() {
    var opc = parseInt(prompt("Ingresa opción: 1 suma 2 resta 3 para multiplicación 4 para división 5 Mayor o menor"));
    
    switch (opc) {
    case 1:
        var num1 = parseInt(prompt("Ingresa el primer número:"));
        var num2 = parseInt(prompt("Ingresa el segundo número:"));
        if (num1!=0 && num2!=0){
        var resultado = num1 + num2;
        document.write("El resultado de la suma es: " + resultado);
        } else {
        document.write("Verifica tus datos, deben ser números.");
        }
    break;
        
    case 2:
        var num1 = parseInt(prompt("Ingresa el primer número:"));
        var num2 = parseInt(prompt("Ingresa el segundo número:"));
        if (num1!=0 && num2!=0){
        var resultado = num1 - num2;
        document.write("El resultado de la resta es: " + resultado);
        } else {
        document.write("Verifica tus datos, deben ser números.");
        }
    break;

    case 3:
        var num1 = parseInt(prompt("Ingresa el primer número:"));
        var num2 = parseInt(prompt("Ingresa el segundo número:"));
        if (num1!=0 && num2!=0) {
          var resultado = num1 * num2;
        document.write("El resultado de la multiplicación es: " + resultado);
        } else {
        document.write("Verifica tus datos, deben ser números.");
        }
    break;

    case 4:
        var num1 = parseFloat(prompt("Ingresa el dividendo:"));
        var num2 = parseFloat(prompt("Ingresa el divisor:"));
        if (num1!=0 && num2!=0) {
        if (num2 !== 0) {
            var resultado = num1 / num2;
            document.write("El resultado de la división es: " + resultado);
        } else {
            document.write("No puedes dividir entre cero.");
        }
        } else {
        document.write("Verifica tus datos, deben ser números.");
        }
    break;

    case 5:
        n1 = parseFloat(prompt("Ingresa un numero :"));
        n2 = parseFloat(prompt("Ingresa el segundo numero :"))

        if (n1 > n2) {
            document.write("El número " + n1 + " es mayor que " + n2);
        } else if (n2 > n1) {
            document.write("El número " + n2 + " es mayor que " + n1);
        }        
        else{
            document.write("los numeros son iguales ");
        }
    break;

    default:
    break;
    }
    
}

