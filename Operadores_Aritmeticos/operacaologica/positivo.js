let num1 = 12;
let num2 = 9;
switch ("true"){
    case (num1 && num2 > 0 ):
    console.log ("Os dois são positivos");
    break;
    case (num1 > 0 && num2 < 0):
    console.log ("Apenas um é positivo");
    break;
    default:
        console.log ("Os dois são negativos")
}