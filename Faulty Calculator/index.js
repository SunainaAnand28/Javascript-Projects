let random = Math.random()
let a = prompt("Enter first number")

let b = prompt("Enter Second number")

let c = prompt("Enter the operator")
console.log(random);
let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random > 0.9){
//perform correct calculation
 alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
 
}

else{
    //perform wrong operation

    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)

}

