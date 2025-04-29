const calcFutureAmount = () => {
	const pa = document.getElementById("pa").value;
	const ir = document.getElementById("ir").value;
	const c = document.getElementById("c").value;
	const t = document.getElementById("t").value;
	if(pa <= 0) {
		alert("The Principal Amount must be greater than 0.");
		document.getElementById("pa").focus();
	}
	else if(ir <= 0 || ir >= 100) {
		alert("The Interest Rate must be between 0 and 100 exclusive.");
		document.getElementById("ir").focus();
	}
	else if (t <= 0) {
		alert("The Time must be greater than 0.");
		document.getElementById("t").focus();
	}
	else {
		let futureAmount = 0;
		if (c == 0) {
			const e = 2.718281828459045;
			futureAmount = pa * (e ** (ir / 100 * t));
		}
		else {
			futureAmount = pa * (1 + (ir / 100 / c)) ** (t * c);
		}
		document.getElementById("future-amount").innerText = futureAmount.toLocaleString('en-US');
		document.getElementById("interest-gained").innerText = (futureAmount - pa).toLocaleString('en-US');
	}
}



