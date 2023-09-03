// NUMBER selection
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");

// sign's terminology
let sign_min = document.getElementById("sign_min");
let sign_div = document.getElementById("sign_div");
let sign_mul = document.getElementById("sign_mul");
let sign_plus = document.getElementById("sign_plus");
let sign_equal = document.getElementById("sign_equal");
let screen = document.getElementById("screenme");

// reset button
let reset = document.getElementById("reset");

// constants
let myvalue1 = 0;
let myvalue2 = 0;
let myvaluefinal = 0;
let my_sign;


// INput Numbers
num1.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 1;
    screen.innerHTML += myvalue2;
});
num2.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 2;
    screen.innerHTML += myvalue2;
});
num3.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 3;
    screen.innerHTML += myvalue2;
});
num4.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 4;
    screen.innerHTML += myvalue2;
});
num5.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 5;
    screen.innerHTML += myvalue2;
});
num6.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 6;
    screen.innerHTML += myvalue2;
});
num7.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 7;
    screen.innerHTML += myvalue2;
});
num8.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 8;
    screen.innerHTML += myvalue2;
});
num9.addEventListener("click", (e) => {
    myvalue1 = myvalue2;
    myvalue2 = 9;
    screen.innerHTML += myvalue2;
});
// // logic
// num1.addEventListener("keypress", (e) => {
//     myvalue1 = myvalue2;
//     if (e.key === "z" && e.ctrlKey) {
//         console.log("hello");
//         myvalue2 = 1;
//     }
//     else if (e.key === "2") {
//         myvalue2 = 2;
//     }
//     else if (e.key === "3") {
//         myvalue2 = 3;
//     }
//     else if (e.key === "4") {
//         myvalue2 = 4;
//     }
//     else if (e.key === "5") {
//         myvalue2 = 5;
//     }
//     else if (e.key === "6") {
//         myvalue2 = 6;
//     }
//     else if (e.key === "7") {
//         myvalue2 = 7;
//     }
//     else if (e.key === "8") {
//         myvalue2 = 8;
//     }
//     else if (e.key === "9") {
//         myvalue2 = 9;
//     }
//     else if (e.key === "0") {
//         myvalue2 = 0;
//     }
//     screen.innerHTML += myvalue2;
// });


// main logic
sign_div.addEventListener("click", (e) => {
    my_sign = "/";
    screen.innerHTML += my_sign;
});
sign_mul.addEventListener("click", (e) => {
    my_sign = "x";
    screen.innerHTML += my_sign;
});
sign_min.addEventListener("click", (e) => {
    my_sign = "-";
    screen.innerHTML += my_sign;
});
sign_plus.addEventListener("click", (e) => {
    my_sign = "+";
    screen.innerHTML += my_sign;
});
sign_percent.addEventListener("click", (e) => {
    my_sign = "%";
    screen.innerHTML += my_sign;
});
sign_power.addEventListener("click", (e) => {
    my_sign = "^";
    screen.innerHTML += my_sign;
});

// power logic
const powerlogic = (a, b) => {
    let c = a;
    for (let i = 0; i < b - 1; i++) {
        a = a * c;
    }
    return a;
};

// reset button;
reset.addEventListener("click", (e) => {
    screen.innerHTML = "";
});

// equal sign
sign_equal.addEventListener("click", (e) => {
    if (my_sign === "-") {
        myvaluefinal = myvalue1 - myvalue2;
    }
    else if (my_sign === "+") {
        myvaluefinal = myvalue1 + myvalue2;
    }
    else if (my_sign === "/") {
        myvaluefinal = myvalue1 / myvalue2;
    }
    else if (my_sign === "x") {
        myvaluefinal = myvalue1 * myvalue2;
    }
    else if (my_sign === "%") {
        myvaluefinal = myvalue1 % myvalue2;
    }
    else if (my_sign === "^") {
        myvaluefinal = powerlogic(myvalue1, myvalue2);
    }
    console.log(myvaluefinal);
    screen.innerHTML = myvaluefinal;
    myvalue2 = myvaluefinal;
});
