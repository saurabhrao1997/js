$(document).ready(function(){
    $("#input1").focus(function(){
       $("#input").css("background","red");
    })

    $("#list").css("color","red");
    // $("#list li").css("border","2px solid pink")
    // $("*").css("border","2px solid pink")
    $("li:first-child").css("border","2px solid pink")
    $("li:last-child").css("border","2px solid pink")
    $("ul li:eq(1)").css("border","2px solid pink")
})