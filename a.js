//lấy độ dài của th1 luôn bằng độ dài th2
let th2Width = document.getElementById("th2").offsetWidth;
document.getElementById("th1").style.width = th2Width + "px";
//hiện thị số lượng
let n = 0
document.getElementById('numProducts').innerHTML = n + ' products'

function addProduct() {
    let productName = document.getElementById('inputProduct').value
    document.getElementById('inputProduct').value = ""

    let table = document.getElementById('myTable')
    let newRow = table.insertRow(-1)
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = productName

    let cell2 = newRow.insertCell(1)
    cell2.innerHTML = `<button type="button" onclick="edit1('${productName}')">Edit</button>`

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = ''

    let cell4 = newRow.insertCell(3)
    cell4.innerHTML = `<button type="button" onclick="delete1('${productName}')">Delete</button>`

    let cell5 = newRow.insertCell(4);
    cell3.innerHTML = ''

    n = n + 1
    document.getElementById('numProducts').innerHTML = n + ' products';
}
function delete1(name) {
    let table = document.getElementById("myTable");
    let rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let cells = row.cells;
        for (let j = 0; j < cells.length; j++) {
            let cell = cells[j];
            if (cell.innerHTML === name) {
                row.parentNode.removeChild(row);
                n--;
                document.getElementById('numProducts').innerHTML = n + ' products';
                return;
            }
        }
    }
}
function edit1(name) {
    let table = document.getElementById("myTable");
    let rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let cells = row.cells;
        for (let j = 0; j < cells.length; j++) {
            let cell = cells[j];
            // console.log(cell.innerHTML)
            if (cell.innerHTML === name) {
                cell.innerHTML = prompt("Nhập tên để sửa");
                return;
            }
        }
    }
}