$(document).ready(function(){
    $("form").submit(function(event){
        console.log("form submitted");
        event.preventDefault();
        student = {
            fname: $("#fname").val(),            
            lname: $("#lname").val(),
            city: $("#city").val()
        };
        console.log(student);
        addStudent(student);
    });
});

function addStudent(student){
    
    console.log("addStudent", student);
    let columns = $(".row:last > .col-4");
    console.log("columns.length", columns.length);
    //Get cards element in the selected row
    let cards = $(".row:last > * .card");
    console.log("cards.length", cards.length);    
    //find the first column with no card
    let theCol = columns[cards.length];

    //Create the new card with its sub elements
    let newCrad = document.createElement("div");
    newCrad.classList.add("card");
    let newimage = document.createElement("img");    
    newimage.src = "images/sample.svg";
    newimage.classList.add("card-img-top");
    let newHeader = document.createElement("h5");
    newHeader.innerHTML = student.fname + " " + student.lname;
    let newParagraph = document.createElement("p");
    newParagraph.classList.add("card-text");
    newParagraph.innerHTML = newHeader.innerHTML + " lives in " + student.city;
    newCrad.appendChild(newimage);
    newCrad.appendChild(newHeader);
    newCrad.appendChild(newParagraph);
    theCol.appendChild(newCrad);
}