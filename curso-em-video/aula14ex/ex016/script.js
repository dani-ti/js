function contar() {
    
    var inicio = window.document.getElementById('btxt_inicio').value
    
    var fim = window.document.getElementById('btxt_fim').value
    
    var passos = window.document.getElementById('btxt_passos').value
    
    var npassos = Number(passos)

    var res = window.document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passos.length == 0 || npassos <= 0) {
        
        window.alert(`[Erro]`)
        res.innerHTML = `<p>Preencha os campos acima corretamente.</p>`
    }
    else {

        var ninicio = Number(inicio)
        var nfim = Number(fim)
        
        res.innerHTML = `Contando:<br>`

        if (ninicio < nfim) {

            for (var c = ninicio; c <= nfim; c += npassos) {
                res.innerHTML += ` ${c}  \u{1F449}`
            }
        }
        else if (ninicio > nfim) {

            for (var c = ninicio; c >= nfim; c -= npassos) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += `FIM!`
    }

}