let num1 = 0;
let num2 = 0;
let var2 = false;
let p1 = "";
function add(inp1, inp2) {
    return inp1 + inp2;
}
function subtract(inp1, inp2) {
    return inp1 - inp2;
}
function multiply(inp1, inp2) {
    return inp1 * inp2;
}
function divide(inp1, inp2) {
    return inp1 / inp2;
}
function operate(operation, inp1, inp2) {
    let result = 0;
    if (operation == "+") {
        result = add(inp1, inp2);
    }
    else if (operation == "-") {
        result = subtract(inp1, inp2);
    }
    else if (operation == "*") {
        result = multiply(inp1, inp2);
    }
    else if (operation == "/") {
        result = divide(inp1, inp2);
    }
    return result;
}
function populatedisplay(input) {
    if (!input2) {
        p1 = document.querySelector("#content1").textContent += input;
        num1 = parseFloat((document.querySelector("#content1").textContent), 10);
    }
    else {
        document.querySelector("#content2").textContent += input;
        num2 = parseFloat((document.querySelector("#content2").textContent), 10);
        var2 = true;
    }
}
function cleardisplay() {
    document.querySelector("#content1").textContent = "";
    document.querySelector("#content2").textContent = "";
}
let allowed = true;
let input2 = false;
console.log(num1);
let op = "";
let sev = document.querySelector("#sev");
sev.addEventListener("click", function () {
    populatedisplay("7");
});
let eig = document.querySelector("#eig");
eig.addEventListener("click", function () {
    populatedisplay("8");
});
let nin = document.querySelector("#nin");
nin.addEventListener("click", function () {
    populatedisplay("9");
});
let fou = document.querySelector("#fou");
fou.addEventListener("click", function () {
    populatedisplay("4");
});
let fiv = document.querySelector("#fiv");
fiv.addEventListener("click", function () {
    populatedisplay("5");
});
let six = document.querySelector("#six");
six.addEventListener("click", function () {
    populatedisplay("6");
});
let one = document.querySelector("#one");
one.addEventListener("click", function () {
    populatedisplay("1");
});
let two = document.querySelector("#two");
two.addEventListener("click", function () {
    populatedisplay("2");
});
let thre = document.querySelector("#thre");
thre.addEventListener("click", function () {
    populatedisplay("3");
});
let zer = document.querySelector("#zer");
zer.addEventListener("click", function () {
    populatedisplay("0");
});
let div = document.querySelector("#div");
div.addEventListener("click", function () {
    if (allowed && p1 != "") {
        op = "/";
        populatedisplay(" / ");
        allowed = false;
        input2 = true;
    }

});
let mul = document.querySelector("#mul");
mul.addEventListener("click", function () {
    if (allowed && p1 != "") {
        op = "*";
        populatedisplay(" * ");
        allowed = false;
        input2 = true;
    }

});
let addi = document.querySelector("#add");
addi.addEventListener("click", function () {

    if (allowed) {
        op = "+";
        populatedisplay(" + ");
    }
    allowed = false;
    input2 = true;
});
let sub = document.querySelector("#sub");
sub.addEventListener("click", function () {
    if (allowed) {
        op = "-";
        populatedisplay(" - ");
    }
    allowed = false;
    input2 = true;
});
let equ = document.querySelector("#equ");
equ.addEventListener("click", function () {
    if (num2 == 0 && op == "/") {
        alert("Division by zero??😒😒");
        cleardisplay();
        allowed = true;
        input2 = false;
        var2 = false;
    }
    else if (!var2) {
        alert("Second input is required!😁😁");
        cleardisplay();
        allowed = true;
        input2 = false;
        var2 = false;
    }
    else if (var2) {

        let answer = operate(op, num1, num2);
        answer = answer.toFixed(2);
        num1 = answer;
        cleardisplay();
        input2 = false;
        populatedisplay(answer);
        allowed = true;
        var2 = false;
    }
});
let clea = document.querySelector("#clea");
clea.addEventListener("click", function () {
    cleardisplay();
    allowed = true;
    input2 = false;
    num1 = 0;
    num2 = 0;
    var2 = false;
});