function gerar() {
    
    var tnum = window.document.getElementById('btxt_num').value
    var tab = window.document.getElementById('sel_tab')

    if (tnum.length == 0) {
        
        window.alert('[ERRO] Selecione um número.')
    }

    else {

        var num = Number(tnum)

        tab.innerHTML = ``

        for (var c = 1; c <= 10; c++){

            var item = window.document.createElement('option')
            
            item.text = `${num} x ${c} = ${num*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)

        }

    }
}