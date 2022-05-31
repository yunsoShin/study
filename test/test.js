
const PI = 3.14159265;
const notQuitePi = parseFloat('3.14') // 숫자 3.14 
const evenLessPi = parseInt('3') // 정수 3

console.log(notQuitePi,evenLessPi)

let YU = 'yunjjang'.substring(0, 2.5) // 문자열 'yu'

console.log(YU);

let IndexYu = 'yunjjang'[2.5] // undefined

console.log(IndexYu);

let gu = 9;
let Name = `yunJJang${gu}`
console.log(Name);
let TypeName = typeof(Name);
console.log(TypeName);

const yunsoo = { name: 'yunsoo', age: 24 }
let yunsooAge = yunsoo.age
console.log(yunsooAge)
yunsoo.age = 25
yunsoo.Weight = '59kg'

console.log(yunsoo)
delete yunsoo.Weight
console.log(yunsoo)

let AGE = 'age'
let yunAge = yunsoo[AGE]
console.log(yunAge)