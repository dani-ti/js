/*
parametro=x
- x é o parâmetro padrão (valor assumido caso não lhe seja atribuído)
*/

function somar(n1=0, n2=0) {
    return n1 + n2
}

soma1 = somar(5, 4)
soma2 = somar(4)



console.log(`A soma entre os números 5 e 4 é ${soma1}.`)
console.log(`A soma entre os números 0 e 4 é ${soma2}.`)
