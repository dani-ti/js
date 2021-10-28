var idade = 89
console.log(`Você possui ${idade} anos.`)
if (idade < 16) {
    console.log('Voto não permitido.')
}
else if (idade < 18 || idade > 67) {
    console.log('Voto opcional.')
}
else {
    console.log('Voto obrigatório.')
}