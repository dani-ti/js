var num = [0, 4, 5, 5, 6, 3, 8, 2]

// Essa estrutura funciona apenas para Arrays e Objetos
for (let pos in num) {
    console.log(`${Number(pos) + 1}° elemento: ${num[pos]}`)
}
