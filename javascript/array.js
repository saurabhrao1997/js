 const check = ["item1","item2",true,10,null];

 console.log(check[0]);
 console.log(check[1]);
 console.log(check[2]);
 console.log(check[3]);
 console.log(check[4]);



 document.write(check[0]);
 document.write(check[1]);
 document.write(check[2]);
 document.write(check[3]);
 document.write(check[4]);




 check.forEach(function  ( value,index)  {
    document.write(`<br>${index}: ${value} <br>`);

 });













 const fruits =["Banana","Orange","Apple","Mango"];
console.log(fruits.toString());
console.log(fruits.sort());

fruits.forEach(function(value,index){

    let x =value.toLowerCase()
    document.write(`<br>${index} : ${x}<br>`)
})


var d =fruits.pop();
console.log(d);

fruits.push("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits)
console.log(fruits[0]);

fruits.unshift("Apple");
console.log(fruits);

fruits.splice(1,0,"lemon");
console.log(fruits);

fruits.splice(0,0);

var girls = "girls";
var boys = "boys";
var myChildren =girls.concat(boys);
console.log(myChildren); 

var c =fruits.slice(1,3);
console.log(c);

 const yup = [1,4,8,16];

 let y =yup.map(function(element,index,array){
    document.write(element*2);
    document.write(`<br>${index}:${element} ans array name is${array}<br>`);
     
    })
 

console.log(y);


let result =yup.filter(function(element){
     
         if (element > 5){
          console.log(element)
      }else{
          console.log("error");
      }
     
})

console.log(result);


let p =yup.reduce((accumelater,current)=>{
   return accumelater+current
})


console.log(p);