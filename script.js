function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  // DAQUI PARA CIMA SÃO AS VARIAVEIS DO SISTEMA DE PEGAR AS HORAS.

    if(hora >= 5 && hora < 12) {
        msg.innerHTML = `<strong>Bom Dia</strong> agora são ${hora} horas e ${minutos} minutos`
        img.src = 'foto-3.png'
        document.body.style.background = '#aaccaa'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        msg.innerHTML = `<strong>Boa Tarde</strong> agora são ${hora} horas e ${minutos} minutos`
        img.src = 'foto-2.png'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE!
        msg.innerHTML = `<strong>Boa Noite</strong> agora são ${hora} horas e ${minutos} minutos`
        img.src = 'foto1.png'
        document.body.style.background = '#515154'
  }
}
  //AQUI PARA CIMA É AS CONDIÇOES DO SISTEMA PARA MOSTRAR SE É DIA, TARDE OU NOITE.