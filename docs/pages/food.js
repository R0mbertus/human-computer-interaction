isElementLoaded("#food").then((food) => {
	loadNavbar();
	document.getElementById("totalCalories").innerHTML = totalCalories;

	foodList.forEach(function(food) {
		addRow(food);
	});

	document.getElementById("searchInput").addEventListener("input", searchFood);
});

function addRow(food) {
	let table = document.getElementById("foodTable");
	let row = table.insertRow(-1);
	let nameCell = row.insertCell(0);
	let calCell = row.insertCell(1);
	let qtyCell = row.insertCell(2);
	let actionCell = row.insertCell(3);

	nameCell.innerHTML = food.name;
	calCell.innerHTML = food.calories;
	qtyCell.innerHTML = `<input type="number" min="0" value="${food.quantity}" disabled>`;
	actionCell.innerHTML = '<button class="back-button box-style" onclick="add(this)">+</button> <button class="back-button box-style" onclick="remove(this)">-</button>';
}

function searchFood() {
	let input = document.getElementById("searchInput").value.toLowerCase();
	let table = document.getElementById("foodTable");

	for (let i = 0; i < table.rows.length; i++) {
		let row = table.rows[i];
		let name = row.cells[0].innerHTML.toLowerCase();
		if (name.includes(input)) {
			row.style.display = "";
		} else {
			row.style.display = "none";
		}
	}
}

function updateCalories() {
	let table = document.getElementById("foodTable");

	totalCalories = 0;
	for (let i = 0; i < table.rows.length; i++) {
		let row = table.rows[i];
		let qty = parseInt(row.cells[2].querySelector("input[type='number']").value);
		foodList[i].quantity=qty;
		let cal = parseInt(row.cells[1].innerHTML);
		totalCalories += qty * cal;
	}
	
    let task_4 = document.getElementById(`task-4`);
	if (totalCalories == 329) {
		clearInterval([tasks[3].intervalId]);
		tasks[3].time = task_4.querySelector('#task-4-timer').innerHTML;
		task_4.classList.add("completed");
		document.getElementById(`task-5`).classList.remove("hidden");
		addBlocker();
	}

	document.getElementById("totalCalories").innerHTML = totalCalories;
}

function add(button) {
	let row = button.parentNode.parentNode;
	let quantity = row.cells[2].querySelector("input[type='number']");
	let currentQuantity = parseInt(quantity.value);
	quantity.value = currentQuantity + 1;

	updateCalories();
}

function remove(button) {
	let row = button.parentNode.parentNode;
	let quantity = row.cells[2].querySelector("input[type='number']");
	let currentQuantity = parseInt(quantity.value);
	if (currentQuantity > 0) {
		quantity.value = currentQuantity - 1;
		updateCalories();
	}
}
