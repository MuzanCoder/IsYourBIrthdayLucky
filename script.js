const dateofBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky🤗";
    } else {
        outputBox.innerText = "Your Birthdate is not lucky💀";
    }
}

function checkBirthdateIsLucky() {
    const dob = dateofBirth.value;
    const sum = calculatedSum(dob);
    const luckyNum = parseInt(luckyNumber.value);

    if (!isNaN(sum) && !isNaN(luckyNum) && dob) {
        compareValues(sum, luckyNum);
    } else {
        outputBox.innerText = "Please enter valid inputs";
    }
}

function calculatedSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;

    for (let index = 0; index < dob.length; index++) {
        const digit = parseInt(dob.charAt(index));
        if (!isNaN(digit)) {
            sum += digit;
        }
    }

    return sum;
}

checkNumberButton.addEventListener('click', checkBirthdateIsLucky);
