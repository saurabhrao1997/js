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
console.log(msg);/// it console the 10 value because obj.score is 0 means(falsy)



/////////////////////////////////

const obj1 ={
    a:"one",
    b:"two",
    c:"three"
}
console.log(obj1);   ///// it return object {}
console.log(obj1.a); ///// it print value "one"
console.log(obj1.b);/////it print value "two"
console.log(obj1.c);////it print value "three"


////////////////////////////////




function getAge(...args){
    console.log(typeof args); ////it console the object as output
    console.log(args);///////// it console the value but in array [21]
  

}
getAge(21);
////////// //////////////////////////////

var p =[1,2,3,4]
var q=[]
console.log(typeof p);///// it result is object 
console.log(typeof q);///// it result same as  object 


///////////////

let s =(a,b,c)=>{
    console.log(a,b,c)
}

s(4,8,12);///////// it print value 4 8 12 


////////////////////////////

let profile = ["bob",34,"carpenter"];
let[sname,age,job]=profile;
console.log(sname); ///// it print "bob"
const d =profile.includes("bob");
console.log(d);///// true

const f =profile.includes("carpenter");
console.log(f);///////////true
////////////////////////////
const color =["red","green"];
var result =color.includes("red");
console.log(result);///// it print true
var result =color.includes("green");
console.log(result);//////it print true


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
console.log(list); ///// it print array of object [{},{}]


////////////////////////////////////




let chars =["a","b","a","c","d","b"]

var unique = new Set(chars);
console.log(unique);///  output in obj form  {"a","b","c","d"}


var unique = [...new Set(chars)];
console.log(unique);///  output in array form ["a","b","c","d"]



//////// by using indexof and filter /////////////

var result =chars.filter((value,index)=>{
    return chars.indexOf(value)===index;
})
console.log(result);//////output in array form ["a","b","c","d"]



























