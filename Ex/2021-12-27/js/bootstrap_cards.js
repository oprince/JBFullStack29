// function addStudent(){
//     //Find the grid row and col
//     let currentRows = document.querySelectorAll(".row");
//     //Ignore last row as this is the button row
//     //Get columns of the row before last row
//     let columns = currentRows[currentRows.length -2].querySelectorAll(".col-4");
//     //count how many columns are populated with a card
//     let cards = currentRows[currentRows.length -2].querySelectorAll(".card");
//     //find the first column with no card
//     let theColumn = columns[cards.length];
//     //Create the new card
//     let newCrad = document.createElement("div");
//     newCrad.classList.add("card");
//     let newimage = document.createElement("img");
//     newimage.src = "images/sample.svg";
//     newimage.classList.add("card-img-top");
//     newCrad.appendChild(newimage);
//     theColumn.appendChild(newCrad);
// }

function addStudent(){
    //Find the grid row with querySelectorAll
    let rows = document.querySelectorAll(".row");
    console.log(rows.length);
    //Ignore last row as this is the button row, use the one before it
    let theRow = rows[rows.length -2];
    //Get columns of the row before last row
    let columns = theRow.querySelectorAll(".col-4");
    console.log(columns.length);
    //Get cards element in the selected row
    let cards = theRow.querySelectorAll(".card");
    console.log(cards.length);    
    //find the first column with no card
    let theCol = columns[cards.length];
    //Create the new card with its sub elements
    let newCrad = document.createElement("div");
    newCrad.classList.add("card");
    let newimage = document.createElement("img");
    newimage.src = "images/sample.svg";
    newimage.classList.add("card-img-top");
    newCrad.appendChild(newimage);
    theCol.appendChild(newCrad);
}