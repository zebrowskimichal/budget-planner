function save() {
	fetch("insert.php?date=" + date + "&shop=" + shop + "&total=" + total, {
		method: "get",
	})
		.then(function (response) {
			if (response.status >= 200 && response.status < 300) {
				return response.text();
			}
			throw new Error(response.statusText);
		})
		.then(function (response) {
			console.log(response);
			load();
		});
}
function load() {
	fetch("load.php", {
		method: "get",
	})
		.then(function (response) {
			if (response.status >= 200 && response.status < 300) {
				return response.text();
			}
			throw new Error(response.statusText);
		})
		.then(function (responseText) {
			var container = document.createElement("section");
			document.getElementsByClassName("table")[0].innerHTML = "";
			document.getElementsByClassName("table")[0].appendChild(container);
			container.innerHTML = responseText;
		});
}
function shops() {
	fetch("shops.php", {
		method: "get",
	})
		.then(function (response) {
			if (response.status >= 200 && response.status < 300) {
				return response.text();
			}
			throw new Error(response.statusText);
		})
		.then(function (responseText) {
			document.getElementsByName("shop")[0].innerHTML = responseText;
		});
}
function addShop() {
	// Get the select element
	var select = document.getElementsByName("shop")[0];
	// Create the input element
	var input = document.createElement("input");
	input.type = "text";
	input.id = "shopInput";
	// Replace the select element with the input element
	select.parentNode.replaceChild(input, select);
	shopButton.value = "Add this shop";
	shopButton.onclick = insertShop(shopInput.value);
}
function insertShop(shop) {
	fetch("insertShop.php?shop=" + shop, {
		method: "get",
	})
		.then(function (response) {
			if (response.status >= 200 && response.status < 300) {
				return response.text();
			}
			throw new Error(response.statusText);
		})
		.then(function (response) {
			console.log(response);
		});
}
