const students =[
    {name:"saurabh",sub:"javascript"},
    {name:"ganesh" , sub:"testing"}

]
console.log("helo brother")

function enrollStudent(student){

return new Promise(function(resolve,reject){
    setTimeout(() => {
        students.push(student);
        console.log("new student enrolled");
        console.log(students[2].name);   
        const error =false;     
        if(!error){
            resolve()
        }else{
            reject();

        }
    }, 5000);
    resolve();

})
}

 let newStudent ={name:"mager",sub:"SAP"}
 enrollStudent(newStudent).then(function(){
     getStudent();
 }).catch(function(){
     consoloe.log("some error is occured")
 })

 console.log("helo brother")



////////////////////////////////////////////////////////////////////

function getStudent() {
setTimeout(() => {
    let str ="";
    students.forEach((element) => {
        str +=`<li>${element.name}</>`;

        
    });
    document.getElementById("list").innerHTML=str;


},2000);

    
}

getStudent();
 





