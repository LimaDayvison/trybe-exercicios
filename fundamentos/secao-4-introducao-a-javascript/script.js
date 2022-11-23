// const num1 = 23;
// const num2 = 93;

// if(num1 > num2){
//     console.log(num1)
// } else{
//     console.log(num2)
// }

// const num1 = 213;
// const num2 = 93;
// const num3 = 145;

// if(num1 > num2 && num1 > num3){
//     console.log(num1);
// } else if (num2 > num1 && num2 > num3){
//     console.log(num2)
// } else if (num3 > num2 && num3 > num1){
//     console.log(num3)
// }

// const num = -23;

// if (num > 0){
//     console.log('positive');
// } else if(num < 0){
//     console.log('negative')
// } else{
//     console.log('zero')
// }

// const anguloA = 30;
// const anguloB = 60;
// const anguloC = -80;

// const somaAngulos = anguloA + anguloB + anguloC;

// if(anguloA > 0 && anguloB > 0 && anguloC > 0){
//     if(somaAngulos === 180){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// } else{
//     console.log("Ângulo inválido.")
// }

// const ChessPiece = 'RaInHa';

// switch(ChessPiece.toLowerCase()){
//     case 'bispo':
//         console.log("Bispo - move-se na diagonal");
//         break;
//     case 'rei':
//         console.log("Rei - move-se uma casa apenas para cada direção");
//         break;
//     case 'rainha':
//         console.log("Rainha - move-se diagonal, horizontal e vertical");
//         break;
//     case "cavalo":
//         console.log("Cavalo - move-se em L e pode pular sobre as peças");
//         break;
//     case "torre":
//         console.log("Torre - move-se horizontal e vertical");
//         break;
//     case "peão":
//         console.log("Peão - move-se apenas uma casa pra frente, no primeiro movimento pode ser duas casas");
//         break;
//     default:
//         console.log("erro, peça inválida");
// }

// const porcentagem = 93;


// if (porcentagem > 0 && porcentagem <= 100){

//     if(porcentagem >= 90){
//         console.log("A");
//     } else if (porcentagem >= 80 && porcentagem < 90){
//         console.log("B");
//     } else if (porcentagem >= 70 && porcentagem < 80){
//         console.log("C");
//     } else if (porcentagem >= 60 && porcentagem < 70){
//         console.log("D");
//     } else if (porcentagem >= 50 && porcentagem < 60){
//         console.log("E");
//     } else if (porcentagem < 50){
//         console.log("F");
//     } 
    
// } else {
//     console.log("Nota inválida");
// }

// const num1 = 23;
// const num2 = 45;
// const num3 = 69;

// if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
//     console.log(true)
// } else {
//     console.log(false)
// }

// const num1 = 22;
// const num2 = 46;
// const num3 = 68;

// if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
//     console.log(true)
// } else {
//     console.log(false)
// }

// const productCost = 6;
// const salePrice = 12;

// if(productCost > 0 && salePrice > 0){
//     const totalProductCost = productCost * 1.2;
//     const finalProfit = (salePrice - totalProductCost) * 1000;
//     console.log(finalProfit);
// } else {
//     console.log("Os valores não podem ser negativos.");
// }


// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 3500.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));
