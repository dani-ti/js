function parimpar (n) {
    
    if (n % 2 == 0) {
        return 'par'
    }
    else {
        return 'ímpar'
    }
}

num4 = parimpar (4)
num5 = parimpar (5)

console.log(`O número 4 é ${num4}.`)
console.log(`O número 5 é ${num5}.`)
