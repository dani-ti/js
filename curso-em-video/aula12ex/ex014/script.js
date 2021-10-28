var hora_atual = new Date().getHours();

var ser = window.document.getElementById('span_ser');
var hora = window.document.getElementById('span_hora');
var tempo = window.document.getElementById('span_tempo');
var imagem = window.document.getElementById('img');

if (hora_atual == 1) {
    ser.innerHTML = `é`
}
else {
    ser.innerHTML = `são`
}

hora.innerHTML = `${hora_atual}`

if (hora_atual < 6) {
    tempo.innerHTML = `madrugada`
    document.body.style.background = 'gray'
    img.src = '#'
}

else if (hora_atual < 12) {
    tempo.innerHTML = `manhã`
    document.body.style.background = '#e2cd9f'
    img.src = '#'
}

else if (hora_atual < 18) {
    tempo.innerHTML = `tarde`
    document.body.style.background = '#b9846f'
    img.src = '#'
}

else if (hora_atual == 0 || hora_atual < 24) {
    tempo.innerHTML = `noite`
    document.body.style.background = '#515154'
    img.src = '#'
}