function media(){

    console.log(arguments)
    let somaTotal = 0

    if(arguments.length === 0){
        return 0
    }

    for (let i = 0; i<arguments.length; i++){
        if(typeof arguments[i] !== "number"){
            console.log("apenas números.")
            return null
        }
        somaTotal += arguments[i]
    }

    return somaTotal/arguments.length
}

console.log(media())