
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

/*let numbers = [1, 7, 2, 9]
let [first, second, ...others] = numbers

console.log(numbers);
console.log(others); //2,9
*/

/*console.log(0+NaN);//NaN
console.log(0+Infinity);//Infinity
console.log(0+false);//0
console.log(0+true);//1
console.log(0+null);//0
console.log(0+undefined);//NaN
*/

/*console.log([]+[],'none') // none
console.log({}+[]) //[object Object]
console.log([]+{}) //[object Object]
console.log({}+{}) //[object Object][object Object]
console.log([]-{}) //NaN*/

/*console.log(-5%2);//-1
console.log(-6%2);//-0*/



//console.log(avg('3','5'));
//console.log(avg('삼','오'));
/*
function indexOf(arr, value) 
{ 
    for (let i in arr) 
        {
        if (arr[i] === value) return i 
        }
    return -1
}

let arr1 = [0,5,7,9,10];
console.log(indexOf(arr1,3));
*/

/*function avg(x,y)
{
    return(x+y)/2;
}

let f = avg

let result = f(1,5);
console.log(result);

f=Math.max

console.log(f(1,5));
*/
/*function gop(x){
    return x*10
}
let result = [0,1,2,4].map(gop);
console.log(result);   

let result = [0,1,2,4].map(function (x) { return 10*x });
console.log(result);

const average = (x, y) => 
    (x + y) / 2
const avg = function(x,y) {return(x+y)/2}
console.log(average(1,7),avg(1,7)); 
const gop10 = x=>x*10
console.log(gop10(5));



const dice = ()=>Math.trunc(Math.random()*6)+1 // error
console.log(dice());

const average = (x, y) => {
    return
    (x + y) / 2
    }*/ 

const arr = [2,4,6,8]
arr.forEach((element, index) => { console.log(`${index}: ${element}`) })

