//document.getElementById("demo").innerHTML= "welcome to dom";
//document.getElementById("demo2").innerHTML= "welcome to dom2";




function sumofTwo(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var c = +a + +b;

    document.getElementById("demo").innerHTML = c;

}
function subofTwo(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var c = +a - +b;
    
    document.getElementById("demo").innerHTML = c;

}
function divofTwo(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var c = +a / +b;
    
    document.getElementById("demo").innerHTML = c;

}
function multofTwo(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var c = +a * +b;
    
    document.getElementById("demo").innerHTML = c;

}