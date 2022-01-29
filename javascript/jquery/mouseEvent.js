$(document).ready(function(){
    $(".box").click(function(){
        $(this).css("background","orenge");

    });

    $(".box").dblclick(function(){
        $(this).css("background","green");

    });
    $(".box").contextmanu(function(){
        $(this).css("background","purple");

    });
    $(".box").mouseleave(function(){
        $(this).css("background","pink");

    });
})