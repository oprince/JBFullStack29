$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        student = {
            fname: $("#fname").val(),            
            lname: $("#lname").val(),
            info: $("#info").val(),
            mail: $("#studentEmail").val()
        };
        addStudent(student);
    });
});

function addStudent(student){

    $(".row").append("<div class='col-4 d-flex align-self-stretch'></div>");
    
    //Create the new card with its sub elements
    $(".col-4:last").append("<div class='card'></div>");

    //create image section for card
    $(".card:last").append("<img class='card-img-top' src='images/sample.svg'/>");

    //creating body section with info on student to card
    $(".card:last").append("<div class='card-body text-center d-flex flex-column'></div>");


    $(".card-body:last").append(
        `<h5 class='card-title'>${student.fname} ${student.lname}</h5>`, 
        `<p class='card-text'>${student.info}</p>`,
        `<a class='btn btn-primary mt-auto'>VIEW PROFILE</a>`
        );
}
