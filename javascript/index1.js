console.log("sey hii");


fechData = document.getElementById("popBtn");
fechData.addEventListener("click",buttonClickHandler);
console.log("here upto good")

function buttonClickHandler(){
    console.log("we entered")
    const xhr = new XMLHttpRequest();
    xhr.open("GET","http://dummy.restapiexample.com/api/v1/employees",true)

   xhr.getResponseHeader("content-type","application/json");



   xhr.onprogress = function(){
       console.log("hi  we on progress");

   }

   xhr.onload = function(){
       if(this.status ===200){
           let obj =JSON.parse(this.responseText);
           console.log(obj)

       }



       xhr.send();
       console.log("we are done!");
   }









}