const screenDisplay = document.querySelector(".screen");
var currentValue = document.getElementById("screen").value;
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const btnAll = document.querySelectorAll(".buttons");
const btn1 = document.querySelector(".num1");
const btn2 = document.querySelector(".num2");
const btn3 = document.querySelector(".num3");
const btn4 = document.querySelector(".num4");
const btn5 = document.querySelector(".num5");
const btn6 = document.querySelector(".num6");
const btn7 = document.querySelector(".num7");
const btn8 = document.querySelector(".num8");
const btn9 = document.querySelector(".num9");
const btn0 = document.querySelector(".num0");
const btnMulti = document.querySelector(".btMulti");
const btnMinus = document.querySelector(".btMinus");
const btnPoint = document.querySelector(".btPoint");
const btnEqual = document.querySelector(".btEqual");
const btnPlus = document.querySelector(".btPlus");
const btnDiv = document.querySelector(".btDiv");


//--clear button
clearBtn.addEventListener("click", ()=> {
    screenDisplay.value= "";
});
function isNumberKey(evt) {
    console.log(screenDisplay.value);
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode <41 || charCode >57)) //or decimals?
    return false;
    return true;  
}   
btnEqual.addEventListener("click", function() {
    var val = screenDisplay.value.split("+");
    console.log(val);
    screenDisplay.value = val.reduce((a, b) => a + Number(b), 0)
});






