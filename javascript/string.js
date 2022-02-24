

var str3 ="javascript language is more more intresting";
var b=str3.replace("more","verry");
console.log(b);//it find first matching word and replace it..

//////////////////////////////////////


var str4 ="javascript language is more more intresting";
var c=str4.replace(/more/,"verry");
console.log(b);//it find first matching word and replace it..


//////////////////////////////////

var str5 ="javascript language is more more intresting";
var d =str5.slice(3,5);
var g =str5.slice(-5);

console.log(d);//it return 4 and 5 number charecter 
document.write(d);
console.log(g)
//////////////////////////////////////

var str6="javascript language is more more intresting";
var e =str6.substr(3,5);//it return from 3 number to letter coming 5 charecter..

console.log(e);
document.write(e);


//////////////////////////////////////

var str7="javascript language is more more intresting";
var f =str7.substring(3,5)
console.log(f);//it return 4 and 5 number charecter