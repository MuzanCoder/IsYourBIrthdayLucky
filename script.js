const dateofBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

function checkBirthdateIsLucky() {
    const dob = dateofBirth.value;
    const sum = calculatedSum(dob);
    console.log(sum);
}

function calculatedSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0;index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;

}



checkNumberButton.addEventListener('click', checkBirthdateIsLucky)