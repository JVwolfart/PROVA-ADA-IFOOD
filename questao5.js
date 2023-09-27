console.log(!(true && false) || (false && true))

// alternativa correta: a. true

// Explicação
/* 
    Ao resolvermos a primeira sentença (true && false), ela retorna false, porém, existe uma negação com o sinal de !
    que inverte a resposta, tornando ela true.

    Como o operador || significa "ou", e a primeira sentença é verdadeira, nem há necessidade de considerar a segunda sentença
    o resultado se torna verdadeiro, pois com o operador "ou", o resultado será verdadeiro se pelo menos uma das sentenças for verdadeira.
*/