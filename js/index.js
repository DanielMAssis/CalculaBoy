var NumberStorage = {
    number1: 0,
    number2: 0,
    operator: null
};

function calc(x) {
    let val = document.getElementById('screen').value;
    if (val == "" && NumberStorage.operator == null)
        alert("No values!");
    else {
        NumberStorage.operator = x.value;
        document.getElementById('screen').value = "";
    }
}

function calcInput(x) {
    let val = document.getElementById('screen').value;
    if (val == "" && NumberStorage.operator == null)
        alert("No values!");
    else {
        NumberStorage.operator = x;
        document.getElementById('screen').value = "";
    }
}

function checkey(event) {
    let key = event.key;

    if(isNaN(key)){
        switch (key) {
            case '+':
                calcInput(key);
                event.preventDefault();
                break;
            case '-':
                calcInput(key);
                event.preventDefault();
                break;
            case '*':
                calcInput(key);
                event.preventDefault();
                break;
            case '/':
                calcInput(key);
                event.preventDefault();
                break;
            case '.':
                break;
            case 'Backspace':
                break;
            case 'Enter':
                resultCalc();
                break;
            case 'Delete':
                cleanScreen();
                break;
            default:
                event.preventDefault();
        }
    }
}

function keyinput(k) {
    let key = k.value;
    
    if (NumberStorage.operator == null)
        NumberStorage.number1 = key;
    else
        NumberStorage.number2 = key;
}

function keyb(k) {
    let key = k.value;
    let val = document.getElementById('screen').value;
    val = val.concat(key);
    document.getElementById('screen').value = val;

    if (NumberStorage.operator == null)
        NumberStorage.number1 = val;
    else
        NumberStorage.number2 = val;
}

function back() {
    let val = document.getElementById('screen').value = document.getElementById('screen').value.slice(0, - 1);
    if (NumberStorage.operator == null)
        NumberStorage.number1 = val;
    else
        NumberStorage.number2 = val;
}

function resultCalc() {
    if (NumberStorage.operator == '/' && NumberStorage.number2 == 0) {
        alert("Error, impossible to divide by zero!");
        cleanScreen();
    }
    else
        NumberStorage.number1 = document.getElementById('screen').value = eval(NumberStorage.number1 + NumberStorage.operator + NumberStorage.number2);
}

function cleanScreen() {
    document.getElementById('screen').value = "";
    NumberStorage.number1 = 0;
    NumberStorage.number2 = 0;
    NumberStorage.operator = null;
}