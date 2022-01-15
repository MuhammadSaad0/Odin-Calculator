let num1 = 0;
let num2 = 0;
let neg1 = false;
let var2 = false;
let check1 = 0;
let check2 = 0;
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
    if (check2 == 0) {
        sev.classList.add("clicked2");
    }
    else {
        sev.classList.add("clicked3");
    }
    setTimeout(() => {
        $(sev).removeClass("clicked2");
        $(sev).removeClass("clicked3");

    }, 250);
});
let eig = document.querySelector("#eig");
eig.addEventListener("click", function () {
    populatedisplay("8");
    if (check2 == 0) {
        eig.classList.add("clicked2");
    }
    else {
        eig.classList.add("clicked3");
    }
    setTimeout(() => {
        $(eig).removeClass("clicked2");
        $(eig).removeClass("clicked3");

    }, 250);
});
let nin = document.querySelector("#nin");
nin.addEventListener("click", function () {
    populatedisplay("9");
    if (check2 == 0) {
        nin.classList.add("clicked2");
    }
    else {
        nin.classList.add("clicked3");
    }
    setTimeout(() => {
        $(nin).removeClass("clicked2");
        $(nin).removeClass("clicked3");


    }, 250);
});
let fou = document.querySelector("#fou");
fou.addEventListener("click", function () {
    populatedisplay("4");
    if (check2 == 0) {
        fou.classList.add("clicked2");
    }
    else {
        fou.classList.add("clicked3");
    }
    setTimeout(() => {
        $(fou).removeClass("clicked2");
        $(fou).removeClass("clicked3");


    }, 250);
});
let fiv = document.querySelector("#fiv");
fiv.addEventListener("click", function () {
    populatedisplay("5");
    if (check2 == 0) {
        fiv.classList.add("clicked2");
    }
    else {
        fiv.classList.add("clicked3");
    }
    setTimeout(() => {
        $(fiv).removeClass("clicked2");
        $(fiv).removeClass("clicked3");
    }, 250);
});
let six = document.querySelector("#six");
six.addEventListener("click", function () {
    populatedisplay("6");
    if (check2 == 0) {
        six.classList.add("clicked2");
    }
    else {
        six.classList.add("clicked3");
    }
    setTimeout(() => {
        $(six).removeClass("clicked2");
        $(six).removeClass("clicked3");

    }, 250);
});
let one = document.querySelector("#one");
one.addEventListener("click", function () {
    populatedisplay("1");
    if (check2 == 0) {
        one.classList.add("clicked2");
    }
    else {
        one.classList.add("clicked3");
    }
    setTimeout(() => {
        $(one).removeClass("clicked2");
        $(one).removeClass("clicked3");
    }, 250);
});
let two = document.querySelector("#two");
two.addEventListener("click", function () {
    populatedisplay("2");
    if (check2 == 0) {
        two.classList.add("clicked2");
    }
    else {
        two.classList.add("clicked3");
    }
    setTimeout(() => {
        $(two).removeClass("clicked2");
        $(two).removeClass("clicked3");
    }, 250);
});
let thre = document.querySelector("#thre");
thre.addEventListener("click", function () {
    populatedisplay("3");
    if (check2 == 0) {
        thre.classList.add("clicked2");
    }
    else {
        thre.classList.add("clicked3");
    }
    setTimeout(() => {
        $(thre).removeClass("clicked2");
        $(thre).removeClass("clicked3");

    }, 250);
});
let zer = document.querySelector("#zer");
zer.addEventListener("click", function () {
    populatedisplay("0");
    if (check2 == 0) {
        zer.classList.add("clicked2");
    }
    else {
        zer.classList.add("clicked3");
    }
    setTimeout(() => {
        $(zer).removeClass("clicked2");
        $(zer).removeClass("clicked3");
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
    if (check2 == 1) {
        div.classList.add("clicked4");
    }
    else {
        div.classList.add("clicked");
    }
    setTimeout(() => {
        $(div).removeClass("clicked");
        $(div).removeClass("clicked4");

    }, 250);

});
let mul = document.querySelector("#mul");
mul.addEventListener("click", function () {
    if (allowed && p1 != "") {
        op = "*";
        populatedisplay(" * ");
        allowed = false;
        input2 = true;
        if (check2 == 1) {
            mul.classList.add("clicked4");
        }
        else {
            mul.classList.add("clicked");
        }
        setTimeout(() => {
            $(mul).removeClass("clicked");
            $(mul).removeClass("clicked4");


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
        if (check2 == 1) {
            addi.classList.add("clicked4");
        }
        else {
            addi.classList.add("clicked");
        }
    }

    setTimeout(() => {
        $(addi).removeClass("clicked");
        $(addi).removeClass("clicked4");



    }, 250);
});
let sub = document.querySelector("#sub");
sub.addEventListener("click", function () {

    if (check2 == 1) {
        sub.classList.add("clicked4");
    }
    else {
        sub.classList.add("clicked");
    }
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
        $(sub).removeClass("clicked4");
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
        if (check2 == 1) {
            clea.classList.add("clicked4");
        }
        else {
            clea.classList.add("clicked");
        }
        cleardisplay();
        audio_C.play();
        audio_C.currentTime = 0;
        neg1 = false;
        allowed = true;
        input2 = false;
        num1 = 0;
        num2 = 0;
        var2 = false;
        setTimeout(() => {
            $(clea).removeClass("clicked");
            $(clea).removeClass("clicked4");
        }, 250);
    }
});
let invert = false;
let random = document.querySelector("#random");
let cont = document.querySelector("body");
let but = document.querySelector("#buttons")
let header = document.querySelector("#header");
let dis = document.querySelector("#display");
let c2 = document.querySelector(".clicked2");
let footer = document.querySelector("#footer");
random.addEventListener("click", function () {
    if (!invert) {
        cont.classList.add("light2");
        but.style.backgroundColor = "#F5F5F3"
        dis.style.color = "black";
        footer.style.backgroundColor = "black";
        footer.style.color = "white";
        $('button, input:button').addClass('light');
        $('button, input:button').css('transition', "all 0s ease");
        check2 = 1;
        equ.style.backgroundColor = "blue";
        mul.style.color = "blue";
        div.style.color = "blue";
        addi.style.color = "blue";
        sub.style.color = "blue";
        clea.style.color = "blue";
        header.style.color = "blue";
        invert = !invert;
    }
    else {
        cont.classList.remove("light2");
        but.style.backgroundColor = "#252525";
        dis.style.color = "#D8D8D8";
        footer.style.backgroundColor = "white";
        footer.style.color = "black";
        check2 = 0;
        $('button, input:button').removeClass('light');
        equ.style.backgroundColor = "#26cc00";
        mul.style.color = "#26cc00";
        div.style.color = "#26cc00";
        addi.style.color = "#26cc00";
        sub.style.color = "#26cc00";
        clea.style.color = "#26cc00";
        header.style.color = "#26cc00";
        invert = !invert;

    }

});
