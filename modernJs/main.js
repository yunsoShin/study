
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
    }

const arr = [2, 4, 6]
arr.forEach((element, index) => { console.log(`${index}: ${element}`) })



const enclose = (tag, contents) =>`<${tag}>${contents}</${tag}>`
const listItems = items.map(i => enclose('li', i))

const listItems = items
    .map(htmlEscape)
    .map(i => enclose('li', i))


const list = enclose( 
    "ul",
    items
    .map(htmlEscape)
    .map((i) => enclose("li", i)) 
    .join("")
    )


//클로저

setTimeout(() => console.log('윤짱!'), 4000)

const saylater = (text, when) => 
    {let task = () => console.log(text) 
        setTimeout(task, when)}

saylater('윤짱!',3000)
saylater('개발일기',5000)



let text = '윤짱의'
console.log(text)
setTimeout(() => console.log(text), 10000) 
text = '개발일기'




const average = (x, y) => (x + y) / 2
let result = average(3, 4, 5) // 결과는 3.5로 마지막 인수는 무시됨


const average=(x,y)=>y===undefined?x: (x+y)/2

const average = (x, y = x) => (x + y) / 2

const average = (first = 0, ...following) =>    
{ 
    let sum = first
    for(const value of following)
        { sum += value
        }
    return sum / (1 + following.length) 
}


console.log(average(1,10,20,1))

let result = Math.max(31, 21, 45, 44, 100, 2, 5, 20) // result를 최대값으로 설정

let numbers = [1, 7, 2, 9]
result = Math.max(numbers) // NaN*/


/*function hoisTing() {       // 블록 시작
    function Work() {
        console.log(some)   //변수
        //~~~~~다른작업~~~~
    }

    let some = 1
    Work() //11cnffur

}
hoisTing()


let yunJJang = {name: 'yunsoo',salary:100000}

yunJJang = {
    name:'yunsoo',
    salary:10000,
    raiseSalary(percent){
        this.salary *=1+percent/100
    }
}
yunJJang.raiseSalary(10)
console.log(yunJJang);

function Person(first, last, age, gender, interests) {

    // 속성과 메소드 정의
    this.first = first;
    this.last = last;
  //...
}

let person1 = new Person('Shin', 'yunjjang', 24, 
'male', ['music', 'programming']);

let person2 = Object.create(person1);
person2.__proto__


function Employee(name, salary) {
    this.name = name
    this.salary = salary 
}
new Employee('Yunsoo', 10000);


class Employee { 
    constructor(name, salary) {
        this.name = name
        this.salary = salary 
    }
    raiseSalary(percent) { 
        this.salary = 1 + percent / 100
    } 
}
    
const yun = new Employee('yunsoo',2000);
console.log(yun)


class Person {
    constructor(last, first) { this.last = last
    this.first = first }
    get fullName() {
    return `${this.last}, ${this.first}` }
}
const yunsoo = new Person('yunsoo','Shin');
const yunName = yunsoo.fullName

*/
class Person { 
    constructor(last, first) { 
        this.last = last
        this.first = first 
    }
    set fullName(value) {
    const parts = value.split(/,\s*/) 
    this.last = parts[0]
    this.first = parts[1]
    } }

const yunsoo1 = new Person('yunsoo','Shin');



/*
var myObj = {
    myProp : 1,
    getProp: function () {
        return this.myProp;
    }
};
console.log(myObj.myProp); // myProp 에 공개적으로 접근할 수 있다.
console.log(myObj.getProp()); // getProp() 역시 공개되어 있다.


function Gadget() {
    // 비공개 멤버
    let name = 'iPod';
    this.getName = function () {
        return name;
    };
}

const toy = new Gadget();

// name 은 비공개이므로 undefined 가 출력된다.
console.log(toy.name);

// 공개 메서드에서는 name 에 접근할 수 있다.
console.log(toy.getName()); // iPod


class Test{
	constructor(){
    	const name = "yunsoo";
        this.getName = function(){
        	return name;
        }
    }
}
const test = new Test();
console.log(test);
console.log(test.name);
console.log(test.getName());



class Test{
	constructor(){
    	const array = [2,4,6];
        const object = {
        	name : "yunsoo"
        }

        this.getArray = function(){
        	return array;
        }
        this.getObject = function(){
        	return object;
        }
    }
}
const test = new Test();
const arr = test.getArray();
const obj = test.getObject();
arr[0] = 0;
obj.name = "이렇게 참조형은 바꿀수있지롱"
console.log(test.getArray());
console.log(test.getObject());



class ClassWithPrivateField {
    #privateField
}

class ClassWithPrivateMethod {
    #privateMethod() {
        return 'hello world'
    }
}

class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD
}


*/


class Employee { 
    constructor(name, salary) {
        this.name = name
        this.salary = salary 
    }
    raiseSalary(percent) { 
        this.salary = 1 + percent / 100
    } 
}
    
class Manager extends Employee{
    
    
    getSalary(){
        return 
            this.salary+this.bonus
        
    }
}

const yun = new Employee('yunsoo',2000);
const boss = new Manager('kimminjae',5000);

console.log(yun)
console.log(boss)