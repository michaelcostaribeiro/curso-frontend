(function(){
    const nome = "daniel"

    if(nome) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innetHTML = `<p> Olá, <b> ${nome} </b></p>` 
    }
})()