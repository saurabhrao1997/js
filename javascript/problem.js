function Person(name,age){
    this.age =name;
    this.name =age;
}
const saurabh =new Person("saurabh",24);
console.log(saurabh instanceof Person)////it is showing true value  because saurabh name variable is instanceof obj

console.log(Person instanceof Object); ///it is show true value because all obj are instanceof obj


////////////////////////////////////////////

let obj ={
    score:0
}
let msg = `your score is ${obj.score || 10}`;
console.log(msg);



/////////////////////////////////

const obj1 ={
    a:"one",
    b:"two",
    c:"three"
}
console.log(obj1);
console.log(obj1.a);
console.log(obj1.b);
console.log(obj1.c);


////////////////////////////////




function getAge(...args){
    console.log(typeof args);
    console.log(args);
  

}
getAge(21);
//////////

var p =[1,2,3,4]
var q=[]
console.log(typeof p);
console.log(typeof q);


///////////////

let s =(a,b,c)=>{
    console.log(a,b,c)
}

s(4,8,12);


////////////////////////////

let profile = ["bob",34,"carpenter"];
let[sname,age,job]=profile;
console.log(sname);
const d =profile.includes("bob");
console.log(d);

const f =profile.includes("carpenter");
console.log(f);
////////////////////////////
const color =["red","green"];
var result =color.includes("red");
console.log(result);
var result =color.includes("green");
console.log(result);


////////////////////////////////////

const john ={
    name:"john",
    age:26
}
const ram ={
    name :"ram",
    age:36
}

const list =[john,ram];
console.log(list);


////////////////////////////////////




let chars =["a","b","a","c","d","b"]

var unique = new Set(chars);
console.log(unique);///  output in obj form


var unique = [...new Set(chars)];
console.log(unique);///  output in array form



//////// by using indexof and filter /////////////

var result =chars.filter((value,index)=>{
    return chars.index  Of(value)===index;
})
console.log(result);


























