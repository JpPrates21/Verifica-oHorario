function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =  `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // MANHA
        img.src = 'images/horamanha.jpg'
        document.body.style.background = '#f6fad4'
    }
    else if (hora >= 12 && hora < 18){
        // TARDE
        img.src = 'images/horatarde.jpg'
        document.body.style.background = '#c57d56'
    }
    else{
        // NOITE
        img.src = 'images/horanoite.jpg'
        document.body.style.background = '#010101'
    }
}