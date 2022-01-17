console.log("welllcome to js file");


let takeBtn = document.getElementById("updateBtn");
takeBtn.addEventListener("click",buttonClickhandler);

function buttonClickhandler(){
    console.log("yes you clicked the button")


   const xhr= new XMLHttpRequest();

   xhr.open("GET","saurabh.txt",true);
   
   xhr.onprogress = function(){
       console.log("on progress");

   }
   xhr.onload = function(){
    if(this.status === 200){
        console.log(this.responseText);
    }else{
        console.error("some error is occured")
    }
   }
   xhr.send();
  console.log("hi i am last console");

  
}