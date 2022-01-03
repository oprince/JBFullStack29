<<<<<<< HEAD
$(document).ready(function () {
    $("form").submit(function (event) {
        console.log("form submitted");
        event.preventDefault();
        student = {
            fname: $("#fname").val(),
            lname: $("#lname").val(),
            mail: $("#studentEmail").val()
        };
        console.log(student);
        let inc = 0;        // addStudent(student);
        addStudentJQuery(student, increment)

    });
});

function addStudent(student) {
    console.log("addStudent", student);
    //Find the grid row with querySelectorAll
    let rows = document.querySelectorAll(".row");
    console.log(rows.length);
    //Ignore last row as this is the button row, use the one before it
    let theRow = rows[rows.length - 1];
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
function addStudentJQuery(student) {
    //     $("#cardRow").append(`<div class="col-4">
    //     <div class="card">
    //       <img src="images/sample.svg" class="card-img-top" alt="...">
    //       <div class="card-body text-center">
    //         <h5 class="card-title">${student.fname} ${student.lname}</h5>
    //         <p class="card-text">My email is ${student.mail}.</p>
    //         <a href="#" class="btn btn-primary">View Profile</a>
    //       </div>
    //     </div>
    //   </div>
    // `,

    const img = document.createElement("img");
    inc++;
    img.id = `imgID${inc}`
    $("#cardRow").append(
        $("<div></div>").attr("class", "col-4").append(
            $("<div></div>").attr("class", "card").append(
                $(img).after(
                    $("<div></div>").attr("class", "card-body text-center").append(
                        $("<h5></h5>").attr("class", "card-title").text("aaa").after(
                            $("<p></p>").attr("class", "card-text").text("aaa").after(
                                $("<a></a>").attr("class", "btn btn-primary").text("aaa")
                            )
                        )
                    )
                )
            )
        )

    )

}

=======
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
>>>>>>> master
