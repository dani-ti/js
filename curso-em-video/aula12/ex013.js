var agora = new Date()
var diasem = agora.getDay()
/*
0 - Domingo
1 - Segunda-Feira
2 - Terça-Feira
3 - Quarta-Feira
4 - Quinta-Feira
5 - Sexta-Feira
6 - Sábado
*/

/*
switch
- Não trabalha com intervalos, apenas com valores pontuais
*/
switch (diasem) {

    case 0:
        console.log(`Hoje é Domingo.`)
        break
    case 1:
        console.log(`Hoje é Segunda-Feira.`)
        break
    case 2:
        console.log(`Hoje é Terça-Feira.`)
        break
    case 3:
        console.log(`Hoje é Quarta-Feira.`)
        break
    case 4:
        console.log(`Hoje é Quinta-Feira.`)
        break
    case 5:
        console.log(`Hoje é Sexta-Feira.`)
        break
    case 6:
        console.log(`Hoje é Sábado.`)
        break
    default:
        console.log(`Dia inválido`)
        break

}