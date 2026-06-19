let total = "";
let curr = "";
let operator = "";

const display = document.getElementById("display");

function calculate() {
    if (total === "" || curr === "" || operator === "") return;

    const num1 = Number(total);
    const num2 = Number(curr);

    switch (operator) {
        case "+":
            total = num1 + num2;
            break;

        case "-":
            total = num1 - num2;
            break;

        case "*":
            total = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                display.value = "Error";
                clearAll();
                return;
            }
            total = num1 / num2;
            break;

        case "%":
            total = num1 % num2;
            break;
    }

    total = total.toString();
    curr = "";
}

function appendNumber(num) {

    if (num === "." && curr.includes(".")) {
        return;
    }

    curr += num;
    display.value += num;
}

function setOperator(op) {

    if (curr === "" && total === "") return;

    // Replace previous operator instead of adding another
    if (curr === "" && operator !== "") {
        display.value =
            display.value.slice(0, -1) + op;

        operator = op;
        return;
    }

    if (total === "") {
        total = curr;
    } else if (operator !== "") {
        calculate();
    }

    operator = op;
    curr = "";

    display.value = total + operator;
}

function clearAll() {
    total = "";
    curr = "";
    operator = "";
}

/* Numbers */
const buttons = document.querySelectorAll(".btn");

let btn7 =document.getElementById("btn7");
btn7.addEventListener("click", function () {
    display.value += "7";
    curr += "7";
});

let btn8 =document.getElementById("btn8");
btn8.addEventListener("click", function () {
    display.value += "8";
    curr += "8";
});

let btn9 =document.getElementById("btn9");
btn9.addEventListener("click", function () {
    display.value += "9";
    curr += "9";
});

let btn4 =document.getElementById("btn4");
btn4.addEventListener("click", function () {
    display.value += "4";
    curr += "4";
});

let btn5 =document.getElementById("btn5");
btn5.addEventListener("click", function () {
    display.value += "5";
    curr += "5";
});

let btn6 =document.getElementById("btn6");
btn6.addEventListener("click", function () {
    display.value += "6";
    curr += "6";
});

let btn1 =document.getElementById("btn1");
btn1.addEventListener("click", function () {
    display.value += "1";
    curr += "1";
});

let btn2 =document.getElementById("btn2");
btn2.addEventListener("click", function () {
    display.value += "2";
    curr += "2";
});

let btn3 =document.getElementById("btn3");
btn3.addEventListener("click", function () {
    display.value += "3";
    curr += "3";
});

let zero =document.getElementById("zero");
zero.addEventListener("click", function () {
    display.value += "0";
    curr += "0";
});

let btn00 =document.getElementById("btn00");
btn00.addEventListener("click", function () {
    display.value += "00";
    curr += "00";
});

let btnDot =document.getElementById("btnDot");
btnDot.addEventListener("click", function () {
    display.value += ".";
    curr += ".";
});


/* Operators */

document.getElementById("btnAdd").onclick =
    () => setOperator("+");

document.getElementById("btnSub").onclick =
    () => setOperator("-");

document.getElementById("btnMul").onclick =
    () => setOperator("*");

document.getElementById("divide").onclick =
    () => setOperator("/");

document.getElementById("modulo").onclick =
    () => setOperator("%");

/* Equal */

document.getElementById("equal").onclick = () => {

    calculate();

    display.value = total;

    curr = total.toString();
    operator = "";
};

/* Delete */

document.getElementById("del").onclick = () => {

    if (display.value === "") return;

    const lastChar =
        display.value[display.value.length - 1];

    display.value =
        display.value.slice(0, -1);

    if ("+-*/%".includes(lastChar)) {
        operator = "";
    } else {
        curr = curr.slice(0, -1);
    }
};

/* Clear */

document.getElementById("clear").onclick = () => {

    display.value = "";

    clearAll();
};
