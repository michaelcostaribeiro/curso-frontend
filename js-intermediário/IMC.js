let peso = 2
let altura = 2

console.log(imcValue(peso,altura))


function imcValue(peso, altura){
    // if (typeof peso/2 == "NaN" || typeof altura/2 == "NaN"){
    //     return null
    // }
    let numeroIMC = peso/Math.pow(altura,2)
    return numeroIMC
}


// Classificação IMC
// IMC



// Muito abaixo do peso 16 a 16,9 kg/m2

// Abaixo do peso 17 a 18,4 kg/m2

// Peso normal 18,5 a 24,9 kg/m2

// Acima do peso 25 a 29,9 kg/m2

// Obesidade Grau I 30 a 34,9 kg/m2

// Obesidade Grau II 35 a 40 kg/m2

// Obesidade Grau III maior que 40 kg/m2