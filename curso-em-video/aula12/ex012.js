var agora = new Date()
var horas = agora.getHours()
if (horas == 1) {
    console.log(`Agora é ${horas} hora.`)
}
else if (horas <=24 ){
    console.log(`Agora são ${horas} horas.`)
}
else {
    console.log ('Horário inválido.')
}
if (horas == 24 || horas < 6) {
    console.log(`Boa madrugada!`)
}
else if (horas < 12) {
    console.log(`Bom dia!`)
}
else if (horas < 18) {
    console.log(`Boa tarde!`)
}
else if (horas < 24) {
    console.log(`Boa noite!`)
}