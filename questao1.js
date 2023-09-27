function converterHorario(horario){
    if (horario.includes("AM") && horario.slice(0, 2) === "12"){
        resposta = "00" + horario.slice(2);
        resposta = resposta.replace("AM", "")
        return resposta;
    }
    if(horario.includes("AM")){
        return horario.replace("AM", "");
    }else{
        horario = horario.split(":");
        var hora = horario[0];
        var minuto = horario[1];
        var segundo = horario[2];
        segundo = segundo.replace("PM", "")
        hora = (parseInt(hora) + 12) % 24
        if (hora === 0){
            hora = "12";
        }
        var resposta = `${hora}:${minuto}:${segundo}`
        return resposta
    }
}
console.log(converterHorario("06:15:25PM")); // 18:15:25
console.log(converterHorario("12:15:25PM")); // 12:15:25
console.log(converterHorario("08:15:25AM")); // 08:15:25
console.log(converterHorario("08:15:25PM")); // 20:15:25
console.log(converterHorario("05:29:22PM")); // 17:29:22
console.log(converterHorario("05:29:22AM")); // 05:29:22