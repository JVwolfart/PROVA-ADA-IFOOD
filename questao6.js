let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);

// Resposta correta: letra b. 2

/*
    Explicação

    A variável "x" foi iniciada com valor 0, e após isso, chegaremos a primeira instrução condicional.

    Essa instrução pergunta se a variável "a" é maior que zero, o que é falso, pois essa variável foi declarada com valor 0.
    Como a condição do if é falsa, será entrado no else, que diz que a variável "x" receberá o seu valor mais 2.

    Como x = 0, temos o seguinte:

    x = 0
    0 + 2 = 2
    x = 2
*/