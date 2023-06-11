let numberElement = document.querySelector(".confirm-number");
const letters = "12345678901234567890ABCDEFHIJKLMNOPQRSTUVWXYZ";
const letterAmount = letters.length;

function randomNumber(digits) {
    let number = '';
    let count = 0;
    while(count<digits){
        number+=letters.charAt(Math.floor(Math.random()*letterAmount));
        count++;
    }
    return number;
}

numberElement.innerText = randomNumber(7);