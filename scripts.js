function save() {
	date = document.getElementsByName("date")[0].value;
	shop = document.getElementsByName("shop")[0].value;
	total = document.getElementsByName("total")[0].value;
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
	var select = document.getElementsByName("shop")[0];
	var input = document.createElement("input");
	input.type = "text";
	input.id = "shopInput";
	select.parentNode.replaceChild(input, select);
	shopButton.value = "Add this shop";
	shopButton.onclick = function () {
		insertShop(shopInput.value);
		shopList();
		shopButton.value = "Add new shop";
		shopButton.onclick = function () {
			addShop();
		};
	};
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
function shopList() {
	fetch("shops.php", {
		method: "get",
	})
		.then(function (response) {
			if (response.status >= 200 && response.status < 300) {
				return response.text();
			}
			throw new Error(response.statusText);
		})
		.then(function (response) {
			var data = "<select>" + response + "</select>";
			var select = document.createElement("select");
			select.name = "shop";
			document.getElementById("shopInput").replaceWith(select);
			select.innerHTML = data;
		});
} /*
fetch("shops-checkbox.php", {
	method: "get",
})
	.then(function (response) {
		if (response.status >= 200 && response.status < 300) {
			return response.text();
		}
		throw new Error(response);
	})
	.then(function (response) {
		document.querySelector(".popup").innerHTML = response;
	});*/

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
