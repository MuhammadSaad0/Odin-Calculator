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
    document.querySelector("#content").textContent += input;
}
let num1 = 0;
let num2 = 0;
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