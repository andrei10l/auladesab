var num1 = 15;
var num2 = 3;
var operadores = "/";   


if (operadores === '+') {
    console.log(num1 + num2);
}
else if (operadores ==='-') {
    console.log(num1 - num2);
}else if (operadores ==='*') {
    if (num1 > 100 && num2 > 100) {
        console.log('Os dois números são maiores que 100');
    }
    console.log(num1* num2);
}else if(operadores === '/') {
    if (num2 === 0) {
        console.log('não é possível dividir por zero');
    } else {
        console.log(num1 / num2);
    }
   
}