document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('createTableButton').addEventListener('click', createTable);
});

function createTable() {
    // Prompt for number of rows and columns
    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");

    // Get the table element
    let table = document.getElementById('myTable');

    // Clear any existing table content
    table.innerHTML = '';

    // Validate input
    if (rows > 0 && cols > 0) {
        // Create the table rows and columns
        for (let i = 0; i < rows; i++) {
            let row = table.insertRow();
            for (let j = 0; j < cols; j++) {
                let cell = row.insertCell();
                cell.innerText = `Row-${i} Column-${j}`;
            }
        }
    } else {
        alert('Please enter valid numbers for rows and columns.');
    }
}
