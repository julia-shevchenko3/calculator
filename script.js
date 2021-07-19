const calc = document.querySelector(".calc");
const result = document.querySelector("#result");

calc.addEventListener("click", function (event) {
	if (!event.target.classList.contains("calc__btn")) return;

	const value = event.target.innerText;

	switch (value) {
		case "=": 
			/* Поскольку калькулятор не использует никаких пользовательских данных, функция eval в этом случае не представляет опасности*/

			if (result.innerText.search(/[^0-9/+-.*]/im) != -1) return;
			result.innerText = eval(result.innerText).toFixed(2);
			break;

		case "С":
			result.innerText = "";
			break;

		case "BS":
			let exp = result.innerText;
			result.innerText = exp.substring(0, exp.length - 1);
			break;

		default:
			result.innerText += value;
	}
});
