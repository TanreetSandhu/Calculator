let total = "";
let curr = "";
let operator = "";

const display = document.getElementById("display");

function calculate() {
    if (curr === "" || operator === "") return;
    switch (operator) {
        case "+":
            total = Number(total) + Number(curr);
            break; 
            
        case "-":
            total = Number(total) - Number(curr);
            break;
            
        case "*":
            total = Number(total) * Number(curr); 
            break;
            
        case "/":
            total = Number(total) / Number(curr);
            break;
            
        case "%":
            total = Number(total) % Number(curr);
            break; 
        }
        
        total = total.toString(); 
        curr = ""; 
    }
    
function appendNumber(num) {
    curr += num;
    display.value += num;
}


function setOperator(op) {

    if (curr === "") return;

    if (operator !== "") {
        calculate();
    } else {
        total = curr;
    }

    curr = "";
    operator = op;
    display.value += op;
}

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


document.getElementById("btnAdd").addEventListener("click", function () {
    
    if (operator !== "") { 
        calculate(); 
    } 
    else {
         total = curr; 
         curr = "";
    } 
    operator = "+"; 
    display.value += "+"; 
}); 

document.getElementById("btnSub").addEventListener("click", function () { 
    if (operator !== "") { 
        calculate(); 
    } 
    else {
         total = curr; 
         curr = "";
    } 
    operator = "-"; 
    display.value += "-"; 
}); 

document.getElementById("btnMul").addEventListener("click", function () { 
    if (operator !== "") { 
        calculate(); 
    } 
    else {
         total = curr; 
         curr = "";
    } 
    operator = "*"; 
    display.value += "*"; 
});

// Divide 
document.getElementById("divide").addEventListener("click", function () { 
    if (operator !== "") { 
        calculate(); 
    } else { 
        total = curr; 
        curr = ""; 
    } 
    operator = "/"; 
    display.value += "/"; 
}); 

// Modulo 
document.getElementById("modulo").addEventListener("click", function () { 
    if (operator !== "") { calculate(); 
    } else { 
        total = curr; 
        curr = ""; 
    } 
    operator = "%"; 
    display.value += "%"; 
}); 
    
// Equal 
document.getElementById("equal").addEventListener("click", function () { 
    calculate(); 
    display.value = total; 
    curr = total.toString(); 
    operator = ""; 
});
 
// Delete 
 
document.getElementById("del").addEventListener("click", function () { 
    display.value = display.value.slice(0, -1); 
    if (curr.length > 0) { 
        curr = curr.slice(0, -1); 
    } 
}); 

// Clear 
 
document.getElementById("clear").addEventListener("click", function () { 
    display.value = ""; 
    total = ""; 
    curr = ""; 
    operator = ""; 
});



