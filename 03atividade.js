/*3. Sistema de Classificação
Descrição: Crie um programa que receba uma nota numérica e retorne uma classificação de letra
(por exemplo, A, B, C, D, F).
Requisitos:
Por exemplo:
Nota de 90 a 100: “A”
Nota de 80 a 89: “B”
Nota de 70 a 79: “C”
Nota de 60 a 69: “D”
Abaixo de 60: “F”
Exiba o resultado no console.*/

let nota = 95;

if (nota >= 90 && nota <= 100) {
  console.log("Parabéns! Sua nota é: A");
} else if (nota >= 80 && nota <= 89) {
  console.log("Sua nota é: B");
} else if (nota >= 70 && nota <= 79) {
  console.log("Sua nota é: C");
} else if (nota >= 60 && nota <= 69) {
  console.log("Sua nota é: D");
} else if (nota < 60 && nota >= 0) {
  console.log("Infelizmente sua nota é: F");
} else {
  console.log("Nota inválida.");
}
