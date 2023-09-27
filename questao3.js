function encontraNumerosSolitarios(numeros){
    var numerosSolitarios = [];
    for(var i = 0; i < numeros.length; i++){
        var listaFiltrada = numeros.filter(numero => numero !== numeros[i]);
        if (listaFiltrada.length === numeros.length-1){
            numerosSolitarios.push(numeros[i])
        }
    }
    return numerosSolitarios;
}

console.log(encontraNumerosSolitarios([12, 17, 15, 19, 22, 17, 19, 12])) // [15, 22]
console.log(encontraNumerosSolitarios([1, 1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7])) // [2, 4, 5, 7]
console.log(encontraNumerosSolitarios([0, 0, 0, 0, 0 ])) // []
console.log(encontraNumerosSolitarios([1, 2, 3, 4, 5, 6, 6])) // [1, 2, 3, 4, 5]