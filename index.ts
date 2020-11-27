
const a: string = 'vishnu'

console.log(a)

let arr = [10, 20, 40]

for (let i of arr) {
    console.log(i)
}

let body = document.getElementById('body')

let pi = document.getElementById('pii')
console.log('Element of pi', pi)
// pi.style.color

function add(a: number, b: number) {

    return a + b
}

console.log(add(1, 4))

// for objects 

let obj: {
    id: number,
    name: string,
    employed: boolean
}

obj = {
    id: 2,
    name: 'typescipt',
    employed: true
}

console.log('typescript object with type annotations ', obj)

// let and var block scope and global scope

let num: number = 10
let num2: number = 20

function letAndVar() {

    console.log(num, num2)

    if (num < num2) {
        var num3: number = 13
        let num4: number = 5
    }

    if (num < num3) {
        console.log("Var is global scope ???")
    }

    console.log(num)
    console.log(num2)
    //  
    console.log(num3)
    // num4 is a local variable and the scope is only to that if condition 
    // console.log(num4)
}

// global scope for the function. not for a whole code base 
// console.log(num3)

letAndVar()

//  const, where the property or value cannot be changed, but object sub property values can be changed 

let company = {
    id: 1,
    emp: 'js',
    es: false
}

// arrays 

// by this way the array is specfically to number 
let arrr: number[] = [2, 4, 4, 5]

// tuple, can grow as it is, but in js it is array 
// for the type saftey, we can say what are the varible and what data type should be 

let tup: [string, number] = ['s', 1]

let bigTup: [string, string, number, boolean, number]
bigTup = ['hi', 'hello', 2, true, 233232342342424234242.2342]

console.log('tuples values ', bigTup)

let arr1 = [23, 'string', true, [1, 'string', [4]], {
    obj: {
        id: 1,
        ar: [1, 'string']   
    }
}]

console.log('type of array ',typeof(arr1))
console.log('complex array ', arr1)