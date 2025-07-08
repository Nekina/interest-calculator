const calcFutureAmount = () => {
	// Get input values
	const pa = document.getElementById("pa").value;
	const ir = document.getElementById("ir").value;
	const c = document.getElementById("c").value;
	const t = document.getElementById("t").value;
	const fa = document.getElementById("future-amount");
	const ig = document.getElementById("interest-gained");

	// Check if inputs are empty
	if (!pa || !ir || !t) {
		fa.classList.add("invisible");
		ig.classList.add("invisible");
	}
	// Check if Principal Amount is valid
	if(pa <= 0) {
		document.getElementById("pa-warning").classList.remove("invisible");
		return;
	}
	document.getElementById("pa-warning").classList.add("invisible");
	// Check if Interest Rate is valid
	if(ir <= 0 || ir >= 100) {
		document.getElementById("ir-warning").classList.remove("invisible");
		return;
	}
	document.getElementById("ir-warning").classList.add("invisible");
	// Check if Compounding Frequency is valid
	if (t <= 0) {
		document.getElementById("t-warning").classList.remove("invisible");
		return;
	}
	document.getElementById("t-warning").classList.add("invisible");
	
	let futureAmount = 0;
	if (c == 0) {
		const e = Math.E;
		futureAmount = pa * (e ** (ir / 100 * t));
	}
	else {
		futureAmount = pa * (1 + (ir / 100 / c)) ** (t * c);
	}
	fa.innerText = futureAmount.toLocaleString('en-US');
	ig.innerText = (futureAmount - pa).toLocaleString('en-US');
	fa.classList.remove("invisible");
	ig.classList.remove("invisible");
}
