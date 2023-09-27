function contaPalavrasCamelCase(frase){
    var listaLetras = frase.split("")
    const alfabetoMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var letrasMaiusculas = listaLetras.filter(letra => alfabetoMaiusculo.includes(letra));
    return letrasMaiusculas.length + 1;
}

console.log(contaPalavrasCamelCase("façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa")); // 15
console.log(contaPalavrasCamelCase("euTocoBongoDescendoAEscada")); // 6
console.log(contaPalavrasCamelCase("euQueroUmaOportunidadeComoProgramador")); // 6