let amigo = {
    nome: 'Daniel', 
    sexo: 'M', 
    peso: 76, 
    engordar(p=o){
        console.log(`Engordou!`)
        this.peso += p
    }
}
amigo.engordar(2) //Função dentro de variáveis!
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
