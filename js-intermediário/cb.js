
function calcularIMC(peso, altura, cb){
    if(peso === undefined && altura === undefined){
        throw Error("undefined")
    }
    if(typeof peso !== "number" || typeof altura !== "number"){
        throw Error("Necessitamos de dois números.")
    }
    let imc = peso / Math.pow(altura,2)
    if (cb === undefined){
        return imc
    }else{
        return(cb(imc))
    }
}
function classificarIMC(imc){
    if(imc<17){
        return ("Muito abaixo do peso.")
    }else if(imc<18.5){
        return ("Abaixo do peso.")
    }else if(imc<25){
        return ("Peso normal.")
    }else if(imc<30){
        return ("Acima do peso.")
    }else if(imc<35){ 
        return ("Obesidade Grau I")
    }else if(imc<40){
        return ("Obesidade Grau II")
    }else{
        return ("Obesidade Grau III")
    }
}

console.log(calcularIMC(1000,2,classificarIMC))