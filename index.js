var a = 'vishnu';
console.log(a);
var arr = [10, 20, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
var body = document.getElementById('body');
var pi = document.getElementById('pii');
console.log('Element of pi', pi);
// pi.style.color
function add(a, b) {
    return a + b;
}
console.log(add(1, 4));
// for objects 
var obj;
obj = {
    id: 2,
    name: 'typescipt',
    employed: true
};
console.log('typescript object with type annotations ', obj);
// let and var block scope and global scope
var num = 10;
var num2 = 20;
function letAndVar() {
    console.log(num, num2);
    if (num < num2) {
        var num3 = 13;
        var num4 = 5;
    }
    if (num < num3) {
        console.log("Var is global scope ???");
    }
    console.log(num);
    console.log(num2);
    //  
    console.log(num3);
    // num4 is a local variable and the scope is only to that if condition 
    // console.log(num4)
}
// global scope for the function. not for a whole code base 
// console.log(num3)
letAndVar();
//  const, where the property or value cannot be changed, but object sub property values can be changed 
var company = {
    id: 1,
    emp: 'js',
    es: false
};
// tuple, can grow as it is, but in js it is array
var tup = ['s', 1];
var bigTup;
bigTup = ['hi', 'hello', 2, true, 233232342342424234242.2342];
console.log('tuples values ', bigTup);
var arr1 = [23, 'string', true, [1, 'string', [4]], {
        obj: {
            id: 1,
            ar: [1, 'string']
        }
    }];
console.log('type of array ', typeof (arr1));
console.log('complex array ', arr1);
