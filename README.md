# PROVA-ADA-IFOOD

Questões da prova do Coding Tank do curso Vem ser Tech da Ada em parceria com o Ifood.

Questões:

## QUESTÃO 1: Desafio: Conversor de Horários
Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) e retorne o equivalente (18:15:25).

## QUESTÃO 2: Desafio: Quantidade de Palavras
Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:

"façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a quantidade de palavras existentes

## QUESTÃO 3: Desafio: Número Solitário
Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números:

[12, 17, 15, 19, 22, 17, 19, 12]
E retorne os que não estiverem repetidos.

## QUESTÃO 4:

Qual é a saída do código a seguir?
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}
a. Não imprime nada

b. 1 2 3

c. 1 1 2 1 2 3 1 2 3

d. 1 2 3 4

e. 1 1 2 1 2 3 1 2 3 4

## QUESTÃO 5:

Qual é o resultado da expressão booleana abaixo?
!(true && false) || (false && true)
a. true

b. null

c. false

d. NaN

e. undefined

## QUESTÃO 6:

Qual o valor da saída do código abaixo?
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
a) 0

b) 2

c) 3

d) 4

