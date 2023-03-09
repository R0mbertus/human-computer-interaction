function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("foodTable");
    for (let i = 0; i < table.rows.length; i++) {
      let foodName = table.rows[i].cells[0].innerHTML.toLowerCase();
      if (foodName.includes(input)) {
        table.rows[i].style.display = "";
      } else {
        table.rows[i].style.display = "none";
      }
    }
  }
function add(button) {
    let row = button.parentNode.parentNode;
    let quantity = row.cells[2].querySelector("input[type='number']");
    let currentQuantity = parseInt(quantity.value);
    quantity.value = currentQuantity + 1;
  }
function remove(button) {
    let row = button.parentNode.parentNode;
    let quantity = row.cells[2].querySelector("input[type='number']");
    let currentQuantity = parseInt(quantity.value);
    if (currentQuantity > 0) {
      quantity.value = currentQuantity - 1;
    }
}