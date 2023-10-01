const screenDisplay = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
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

btn1.addEventListener("click", ()=> {
    screenDisplay.textContent = "1";
})

screenDisplay.textContent= "0";