function filters() {
	var element = document.getElementById("filters");
	var button = document.getElementById("filter-button");
	if (element.style.display === "block") {
		element.style.display = "none";
		button.value = "Show filters";
	} else {
		element.style.display = "block";
		button.value = "Hide filters";
	}
}
function filter() {
	//get date inputs values
	counter = document.getElementsByClassName("table")[0].rows.length;
	dateStart = document.getElementsByName("date-start")[0].value;
	dateEnd = document.getElementsByName("date-end")[0].value;
	//get checked checkboxes values
	checkboxes = document.querySelectorAll('input[type="checkbox"]');
	selectedValues = [];
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			selectedValues.push(checkboxes[i].value);
		}
	}
	//get number inputs values
	minPrice = document.getElementsByName("min-price")[0].value;
	maxPrice = document.getElementsByName("max-price")[0].value;
	//Check if date row are between given dates
	for (var i = 0; i < counter - 1; i++) {
		row = "r" + i;
		valueDate = document.getElementById("d" + i).textContent;
		valueShop = document.getElementById("s" + i).textContent;
		valuePrice = document.getElementById("t" + i).textContent;
		if (dateStart) {
			if (valueDate < dateStart) {
				document.getElementById(row).style.display = "none";
			}
		}
		if (dateEnd) {
			if (valueDate > dateEnd) {
				document.getElementById(row).style.display = "none";
			}
		}
		if (selectedValues.length > 0) {
			if (selectedValues.includes(valueShop)) {
			} else {
				document.getElementById(row).style.display = "none";
			}
		}
		if (minPrice.length > 0) {
			if (valuePrice < minPrice) {
				document.getElementById(row).style.display = "none";
			}
		}
		if (maxPrice.length > 0) {
			if (valuePrice > maxPrice) {
				document.getElementById(row).style.display = "none";
			}
		}
	}
	//Change filteringButton action and value
	filteringButton.value = "Reset";
	filteringButton.onclick = function () {
		reset();
	};
}
function reset() {
	for (var i = 0; i < counter - 1; i++) {
		row = "r" + i;
		document.getElementById(row).style.display = "";
	}
	filteringButton.onclick = function () {
		filter();
	};
	filteringButton.value = "Filter";
}
