const minNum = 1;
const maxNum = 100;


const ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(ans);

let running = true;
let attemps = 0;


while (running) {
    attemps++;
    let num = window.prompt(`Enter a num between ${minNum} and ${maxNum}`);

    num = Number(num);

    if (num == NaN) {
        alert("Enter a valid number");
    } else if (num < minNum || num > maxNum) {
        alert(`Enter valid num between ${minNum} and ${maxNum} only.`);
    } else if (num < ans) {
        alert("TOO LOW!!! Enter a bigger number");
    } else if (num > ans) {
        alert("Too HIGH!! Enter a lower number");
    } else {
        alert(`The number is correct!!! You took ${attemps} attempt!`);
        break;
    }
}