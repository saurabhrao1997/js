const students =[
    {name:"saurabh",sub:"javascript"},
    {name:"ganesh" , sub:"testing"}

]
console.log("helo brother")


function pro() {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {

            const error =true;
            if (!error){
            console.log("your promise is resolved")
              resolve()
            }else{
                console.log("your promise is rejected")
                reject("sorry not fullfill")
            }



        }, 2000);
        
    })
    
}


pro().then(function(){
    console.log("thanks for resolving");
}).catch(function(){
    console.log("sorry")
})


