let foodList = [  
    { name: "Apple", calories: 52 },  
    { name: "Banana", calories: 89 },  
    { name: "Orange", calories: 62 },  
    { name: "Grapes", calories: 69 },  
    { name: "Strawberry", calories: 33 },  
    { name: "Blueberry", calories: 57 },  
    { name: "Raspberry", calories: 52 },  
    { name: "Pineapple", calories: 82 },  
    { name: "Mango", calories: 99 },  
    { name: "Papaya", calories: 119 },  
    { name: "Watermelon", calories: 30 },  
    { name: "Kiwi", calories: 61 },  
    { name: "Peach", calories: 59 },  
    { name: "Plum", calories: 46 },  
    { name: "Cherry", calories: 50 },];

function addRow(food) {
  let table = document.getElementById("foodTable");
  let row = table.insertRow(-1);
  let nameCell = row.insertCell(0);
  let calCell = row.insertCell(1);
  let qtyCell = row.insertCell(2);
  let actionCell = row.insertCell(3);

  nameCell.innerHTML = food.name;
  calCell.innerHTML = food.calories;
  qtyCell.innerHTML = '<input type="number" min="0" value="0" disabled>';
  actionCell.innerHTML = '<button onclick="add(this)">+</button> <button onclick="remove(this)">-</button>';
}

foodList.forEach(function(food) {
  addRow(food);
});

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

document.getElementById("searchInput").addEventListener("input", searchFood);


function updateCalories() {
    let table = document.getElementById("foodTable");
    totalCalories = 0;
  
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      let qty = parseInt(row.cells[2].querySelector("input[type='number']").value);
      let cal = parseInt(row.cells[1].innerHTML);
      totalCalories += qty * cal;
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
