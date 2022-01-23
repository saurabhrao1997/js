


const mySet = new Set();

mySet.add("hi");
mySet.add("saurabh");
mySet.add("wellcome");
mySet.add("to"); 
mySet.add("to"); 
mySet.add("my");
mySet.add("show");
mySet.add("show");
mySet.add(true);
mySet.add(false);
mySet.add(null);
mySet.add(12);
mySet.add(12);

console.log(mySet);


console.log(mySet.size);
console.log(mySet.has("my")); //return true if value is there....



for(let item of mySet){
    console.log(`the item is : ${item}`);
}





////array Desturing ........


const array = ["saurabh", 24 ,"saurabhwarhade@gmail.com",78409000183,55,true,"cosmo"]


var [setName,age,gmail,moNo, ...person] =array;

console.log(setName);
console.log(person);







