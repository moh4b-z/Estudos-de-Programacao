const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero1) => {
  rl.question('Digite outro número: ', (numero2) => {
    let A = parseFloat(numero1);
    let B = parseFloat(numero2);

    if (A > B)
        console.log(A - B);
    else
        console.log(B - A);

    rl.close();
  });
});
