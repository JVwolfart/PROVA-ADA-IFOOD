let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

// alternativa correta: e. 1 1 2 1 2 3 1 2 3 4

/*
    Explicação
    Após a primeira iteração do for mais externo, a variável "i" terá como valor 1, portanto, no for mais externo,
    haverá apenas uma iteração, pois a variável "j" recebe como padrão o valor 1.

    Na segunda iteração, a variável "i" receberá o valor 2, o que resulta em duas iterações no for mais interno (j),
    imprimindo assim os valores 1 e 2.

    Na terceira iteração, a variável "i" terá como valor 3, o que resultará no for mais interno (j) imprimindo três vezes
    Os números impressos nessa iteração serão 1, 2 e 3.

    Na quarta iteração, a variável "i" assumirá o valor 4, portanto, haverão quatro iterações no for mais interno (j).
    Os número impressos nessa iteração serão 1, 2, 3 e 4.

    Após isso, não haverá mais iterações, pois a condição i <= n (lembrando que a variável "n" tem valor 4) passará
    a ser falsa, pois o "i" assumiria o valor 5.
    Como a condição é falsa, o loop será encerrado
*/