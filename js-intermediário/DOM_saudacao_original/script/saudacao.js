(function(){
    let nome = "Maicão"
    let topBar = document.getElementsByClassName("top-bar")
    console.log(topBar[0])
    topBar[0].getElementsByTagName("p")[0].innerHTML += "<b>"+ nome +"</b>"
})()