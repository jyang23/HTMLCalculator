var first;
var second;
var add = 0;
var sub = 0;
var mul = 0;
var div = 0;
var dec = 0;


function myFunction0()
{
    var number = "0";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction1()
{
    var number = "1";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction2()
{
    var number = "2";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction3()
{
    var number = "3";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction4()
{
    var number = "4";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction5()
{
    var number = "5";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction6()
{
    var number = "6";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction7()
{
    var number = "7";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction8()
{
    var number = "8";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunction9()
{
    var number = "9";
    if(document.getElementById("myText").innerHTML == 0)
    {
        document.getElementById("myText").innerHTML = number;
    }
    else
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML+number;

    }
}
function myFunctionAC()
{
    var number = "0";
    document.getElementById("myText").innerHTML = number;
}

function decimal()
{
    if(dec == 0)
    {
        document.getElementById("myText").innerHTML = document.getElementById("myText").innerHTML + ".";
    }

}

function myFunctionAdd()
{
    if(add == 0)
    {
        first = document.getElementById("myText").innerHTML;
        add++;
        myFunctionAC();
    }
}
function myFunctionSub()
{
    if(sub == 0)
    {
        first = document.getElementById("myText").innerHTML;
        sub++;
        myFunctionAC();
    }
}
function myFunctionDiv()
{
    if(div == 0)
    {
        first = document.getElementById("myText").innerHTML;
        div++;
        myFunctionAC();
    }
}
function myFunctionMul()
{
    if(mul == 0)
    {
        first = document.getElementById("myText").innerHTML;
        mul++;
        myFunctionAC();
    }
}

function myFunctionEq()
{
    second = document.getElementById("myText").innerHTML;

    if(add == 1)
    {
        var eq = +first + +second;
        document.getElementById("myText").innerHTML = eq;
    }
    else if(sub == 1)
    {
        var eq = +first - +second;
        document.getElementById("myText").innerHTML = eq;
    }
    else if(mul == 1)
    {
        var eq = +first * +second;
        document.getElementById("myText").innerHTML = eq;
    }
    else
    {
        var eq = +first / +second;
        document.getElementById("myText").innerHTML = eq;
    }
    first = 0;
    second = 0;
    add = 0;
    sub = 0;
    mul = 0;
    div = 0;
    eq = 0;
}
