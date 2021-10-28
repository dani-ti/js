// Recursividade

function fatorial(n) {
    if (n == 1 || n == 0) {
        return 1
    }
    else if (n < 0) {
        return 'erro'
    }
    else {
        return n * fatorial (n-1)
    }
}

console.log(`O fatorial de 5 é ${fatorial(5)}`)