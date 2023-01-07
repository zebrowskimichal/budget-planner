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
	input.className = "formInputs";
	select.parentNode.replaceChild(input, select);
	shopButton.style.marginRight = "1px";
	shopButton.onclick = function () {
		insertShop(shopInput.value);
		shopList();
		shopButton.value = "+";
		shopButton.onclick = function () {
			addShop();
		};
	};
	hideButton.style.display = "inline";
}
function hideShopAdding() {
	shopList();
	hideButton.style.display = "none";
	shopButton.style.marginRight = "0px";
	shopButton.onclick = function () {
		addShop();
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
			select.className = "shopInput";
			document.getElementById("shopInput").replaceWith(select);
			select.innerHTML = data;
		});
}
