function sum(){
    let sum = 0
    console.log(arguments)
    for(let num in arguments){
        sum+=arguments[num]
    }
    return sum
}

function avarage(){
    let sum = 0
    for(let num in arguments){
        sum+= arguments[num]
    }
    return sum/arguments.length
}

console.log(sum(...[1,2,7,5]))
console.log(avarage(1,2,7,5))

const arr = [5,2,6,10,10,50]

const [n1, ...n5] = arr
console.log(sum(n1,...n5))
console.log(avarage(...n5))