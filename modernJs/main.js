
/*const number = [
    [1,2,3,4],
    [5,6,7,8]
]
console.log(number[1][3])
console.log(number.length)

let pair = [1,2,3,4,5]
let first = pair[0]
let second = pair[1]

console.log(first)
console.log(second)
*/

//비구조화
//let pair = [1,2,3,4,5]
//let first = pair[0]
//let second = pair[1]

//let[first,[second,third]]=[0,[1,2]]
//console.log(first,second,third)

/*let[first,second]=[0,1]
console.log(first,second)
let[first,second]=[0,1]

console.log(first,second)*/




/*let [first,second,third]=[0]
console.log(first,second,third)*/

/*let number=[3,2,1];
let yun={age:22};
[number[0],yun.age]=[1,24];

console.log(number[0],yun.age);*/


/*let {name,age} = yun
let {name:name,age:age}=yun;*/

//let name = yun.name;
//let age



/*let pat = { name: 'Pat', birthday: { day: 14, month: 3, year: 2000 } };

let { birthday: { year: patsBirthYear } } = pat;

//let patsBirthYear = pat.birthday.year과 의미가 같다
console.log(patsBirthYear);
*/

let numbers = [1, 7, 2, 9]
let [first, second, ...others] = numbers

console.log(numbers);
console.log(others);