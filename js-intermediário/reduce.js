const numeros = [1,2,2,2,4,5,6,5,1,1,4]
const numerosUnicos = numeros.reduce(function(numerosUnicos,valorAtual){
    if(numerosUnicos.includes(valorAtual)){
        return numerosUnicos
    }else{
        return numerosUnicos.concat(valorAtual)
    }
},[]);
console.log(numerosUnicos)

