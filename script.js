let num1 = 0;
let num2 = 0;
let neg1 = false;
let var2 = false;
let check1 = 0;
let p1 = "";
let audio = new Audio("./audio/click.wav")
let audio_C = new Audio("./audio/clear.wav");
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
        audio.play();
        p1 = document.querySelector("#content1").textContent += input;
        num1 = parseFloat((document.querySelector("#content1").textContent), 10);
        audio.currentTime = 0;
    }
    else {
        audio.play();
        document.querySelector("#content2").textContent += input;
        num2 = parseFloat((document.querySelector("#content2").textContent), 10);
        var2 = true;
        audio.currentTime = 0;
    }
}
function cleardisplay() {
    document.querySelector("#content1").textContent = "";
    document.querySelector("#content2").textContent = "";
}
let allowed = true;
let input2 = false;
let op = "";
let sev = document.querySelector("#sev");
sev.addEventListener("click", function () {
    populatedisplay("7");
    sev.classList.add("clicked2");
    setTimeout(() => {
        $(sev).removeClass("clicked2");


    }, 250);
});
let eig = document.querySelector("#eig");
eig.addEventListener("click", function () {
    populatedisplay("8");
    eig.classList.add("clicked2");
    setTimeout(() => {
        $(eig).removeClass("clicked2");


    }, 250);
});
let nin = document.querySelector("#nin");
nin.addEventListener("click", function () {
    populatedisplay("9");
    nin.classList.add("clicked2");
    setTimeout(() => {
        $(nin).removeClass("clicked2");


    }, 250);
});
let fou = document.querySelector("#fou");
fou.addEventListener("click", function () {
    populatedisplay("4");
    fou.classList.add("clicked2");
    setTimeout(() => {
        $(fou).removeClass("clicked2");


    }, 250);
});
let fiv = document.querySelector("#fiv");
fiv.addEventListener("click", function () {
    populatedisplay("5");
    fiv.classList.add("clicked2");
    setTimeout(() => {
        $(fiv).removeClass("clicked2");


    }, 250);
});
let six = document.querySelector("#six");
six.addEventListener("click", function () {
    populatedisplay("6");
    six.classList.add("clicked2");
    setTimeout(() => {
        $(six).removeClass("clicked2");


    }, 250);
});
let one = document.querySelector("#one");
one.addEventListener("click", function () {
    populatedisplay("1");
    one.classList.add("clicked2");
    setTimeout(() => {
        $(one).removeClass("clicked2");


    }, 250);
});
let two = document.querySelector("#two");
two.addEventListener("click", function () {
    populatedisplay("2");
    two.classList.add("clicked2");
    setTimeout(() => {
        $(two).removeClass("clicked2");


    }, 250);
});
let thre = document.querySelector("#thre");
thre.addEventListener("click", function () {
    populatedisplay("3");
    thre.classList.add("clicked2");
    setTimeout(() => {
        $(thre).removeClass("clicked2");


    }, 250);
});
let zer = document.querySelector("#zer");
zer.addEventListener("click", function () {
    populatedisplay("0");
    zer.classList.add("clicked2");
    setTimeout(() => {
        $(zer).removeClass("clicked2");


    }, 250);
});
let div = document.querySelector("#div");
div.addEventListener("click", function () {
    if (allowed && p1 != "") {
        op = "/";
        populatedisplay(" / ");
        allowed = false;
        input2 = true;
    }
    div.classList.add("clicked");
    setTimeout(() => {
        $(div).removeClass("clicked");


    }, 250);

});
let mul = document.querySelector("#mul");
mul.addEventListener("click", function () {
    if (allowed && p1 != "") {
        op = "*";
        populatedisplay(" * ");
        allowed = false;
        input2 = true;
        mul.classList.add("clicked");
        setTimeout(() => {
            $(mul).removeClass("clicked");


        }, 250);

    }

});
let addi = document.querySelector("#add");
addi.addEventListener("click", function () {

    if (allowed) {
        op = "+";
        populatedisplay(" + ");
        allowed = false;
        input2 = true;
        addi.classList.add("clicked");
    }

    setTimeout(() => {
        $(addi).removeClass("clicked");


    }, 250);
});
let sub = document.querySelector("#sub");
sub.addEventListener("click", function () {

    sub.classList.add("clicked");
    if (allowed && p1 == "") {
        neg1 = true;
        allowed = true;
        populatedisplay("-");
    }
    else if (allowed) {
        op = "-";
        populatedisplay(" - ");
        input2 = true;
        allowed = false;
    }
    else if (!allowed && check1 == 0) {
        populatedisplay("-");
        check1 = 1;
    }
    setTimeout(() => {
        $(sub).removeClass("clicked");


    }, 250);
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
        check1 = 0;
    }
});
let clea = document.querySelector("#clea");
clea.addEventListener("click", function () {
    if (p1 != "") {
        cleardisplay();
        audio_C.play();
        audio_C.currentTime = 0;
        neg1 = false;
        allowed = true;
        input2 = false;
        num1 = 0;
        num2 = 0;
        var2 = false;
    }
});
