var num_adc = []

var res = window.document.getElementById('res')

var soma_num_adc = 0

function adicionar() {

    var tab = window.document.getElementById('sel_tab')

    var txt_num = window.document.getElementById('btxt_num').value

    var num = Number(txt_num)

    var num_tam = txt_num.length

    res.innerHTML = ``


    if (num_tam == 0 || num < 0 || num > 100 || num_adc.indexOf(num) != -1) {

        window.alert(`[ERRO]`)

    }

    else {

        num_adc.push(num)

        soma_num_adc += num


        var item = window.document.createElement('option')
            
        item.text = `Valor ${num} adicionado.`
        tab.value = `Número ${num}`
        tab.appendChild(item)

    }
}

function finalizar() {

    var num_adc_tam = num_adc.length


    if (num_adc_tam == 0) {
        
        window.alert(`[ERRO]`)
    }

    else {
        var num_adc_ordem = num_adc.sort()

        var media_num_adc = soma_num_adc/num_adc_tam

        res.innerHTML = `<p>Ao todo, temos ${num_adc_tam} números cadastrados.</p><p>O maior valor informado foi ${num_adc_ordem[num_adc_tam - 1]}.</p><p>O menor valor informado foi ${num_adc_ordem[0]}.</p><p>Somando-se todos valores, temos ${soma_num_adc}.</p><p>A média dos valores informados é ${media_num_adc}.</p>`
    }
    

    
}