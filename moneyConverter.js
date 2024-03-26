function convert(){
    const UAHtoGBR = document.getElementById("UAHtoGBR");
    const GBRtoUAH = document.getElementById("GBRtoUAH");
    const convertResult = document.getElementById("convertResult");
    let convertNumber = Number(document.getElementById("convertNumber").value);
    if(UAHtoGBR.checked){
        let toGBR = convertNumber * 0.020;
        convertResult.textContent = `${toGBR}£`;
    }

    else if(GBRtoUAH.checked){
        let toUAH = convertNumber * 49.65;
        convertResult.textContent = `${toUAH}₴`;
    }
}

convert();


function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, thePassword){
    
    const lowerChar = "abcdefghijklmnopqrstuvwxyz";
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";

    let allowedChar = "";
    let password = "";
    
    allowedChar += includeLowercase ? lowerChar : "";
    allowedChar += includeUppercase ? upperChar : "";
    allowedChar += includeNumbers ? numbers : "";

    if(passwordLength <= 0){
        return `password length must be at least one`;
    }
    if(allowedChar.length === 0){
        return `at least one character must be here`;
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }

    return password;

    
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const thePassword = document.getElementById("thePassword");
const passwordGenerator = document.getElementById("passwordGenerator");

function generateAndDisplayPassword() {
    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers);
    thePassword.textContent = password;
}

passwordGenerator.addEventListener("click", generateAndDisplayPassword);
