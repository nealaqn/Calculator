const display = document.querySelector(".display");

const equal = document.createElement("button");
equal.classList = "equal"
equal.textContent = "="
equal.style.animation = "goDown 2s ease forwards"
equal.addEventListener("click", () => {
    calcNumber();
});
document.querySelector(".calculator").append(equal);


const check = () => {
    if (display.value != '') {
        equal.style.bottom = "-120px"          
        equal.style.zIndex = "999"    
    }
}

const appendNumber = (input) => {
    display.value += input;
    check();
}

const clearNumber = () => {
    display.value = '';
    equal.style.bottom = "50px"          
    equal.style.zIndex = "-119999"    
    check();
}

const calcNumber = () => {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error"
    }
}