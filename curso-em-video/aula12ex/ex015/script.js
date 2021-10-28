function verificar() {
    
    var nascimento = Number(window.document.getElementById('btxt_nascimento').value)
    var ano_atual = new Date().getFullYear()
    
    var resultado = window.document.getElementById('res')

    if (nascimento > ano_atual) {
        
        window.alert(`[ERRO] Os dados foram preenchidos incorretamente.`)
        resultado.innerHTML = `<p>Preencha os dados acima corretamente.</p>`    
    }
    else {
        var idade = ano_atual - nascimento
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {

            genero = 'um homem'

            if (idade < 10) {
                // criança - homem
                img.setAttribute('src', '#')
            }
            else if (idade < 21) {
                // jovem - homem
                img.setAttribute('src', '#')
            }
            else if (idade < 45) {
                // adulto - homem
                img.setAttribute('src', '#')
            }
            else {
                // idoso - homem
                img.setAttribute('src', '#')
            }

        }

        else if (sexo[1].checked) {

            genero = 'uma mulher'

            if (idade < 10) {
                // criança - mulher
                img.setAttribute('src', '#')
            }
            else if (idade < 21) {
                // jovem - mulher
                img.setAttribute('src', '#')
            }
            else if (idade < 45) {
                // adulto - mulher
                img.setAttribute('src', '#')
            }
            else {
                // idoso - mulher
                img.setAttribute('src', '#')
            }
        }

        resultado.style.fontStyle = 'italic'
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Você é ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }

}