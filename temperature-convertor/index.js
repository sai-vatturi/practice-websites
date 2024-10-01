function convert() {
	let temp = document.getElementById("inputBox").value;
	console.log(temp);
	let ans = 0;
	if (document.getElementById("toC").checked) {
		ans = ((temp - 32) * 5) / 9;
	} else if (document.getElementById("toF").checked) {
		ans = (temp * 9) / 5 + 32;
	}
	document.getElementById("demo").innerText = ans;
}
