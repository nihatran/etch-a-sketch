
let container = document.querySelector(".container")

for(let i = 0; i < 16; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < 15; j++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
    }
    container.append(column)
}