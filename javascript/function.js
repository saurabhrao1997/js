 
 
 //swap the two number with help of third variable
 
 function getFunc() {
     a=10;
     b=20;


     c=a;
     a=b;
     b=c;
     let func = new function() 
     {
     
        console.log("the value of a :"+a+" "+"the vaule of b :"+b)
         
     }
     return func;
 }

 getFunc();



///swap the two nuber without third variable
 function swapFunc() {
    a=10;
    b=20;

    a =a+b;
    b=a-b;
    a=a-b;

    let func = new function() 
    {
    
       console.log("the value of a :"+a+" "+"the vaule of b :"+b)
        
    }
    return func;
}
swapFunc();




//using function find out length of argument........



function adder() {
    
    return console.log(arguments.length);
    
    
}

adder("saurabh",2,"warhade");


//addition with the help of if condition................................



function add() {
    if (arguments.length==0) {
        console.log("no parameter is passed");
    }
    else{
        var sum =0;
        for(let i=0; i<arguments.length;i++)
        {
            sum= sum + arguments[i];
    
        }
         
    }
    console.log(sum);
}
add("saurabh","warhade");




/// constant object try to change ..........


const obj ={
    type:"Fiat",
    model:"500",
    color:"white"

}
  console.log(obj);

  obj.color="blue";
  console.log(obj)
  obj.price=1000000;
  console.log(obj)



  function roughScale(x,base){
      const parsed = parseInt(x,base);
      if(isNaN(parsed)){
          return 0;
      }
      return parsed * 100;

  }
console.log(roughScale("12",16 ));











