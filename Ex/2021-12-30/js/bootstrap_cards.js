let students = [];
$(document).ready(function () {
  $("form").submit(function (event) {
    console.log("form submitted");
    event.preventDefault();
    student = {
      fname: $("#fname").val(),
      lname: $("#lname").val(),
      mail: $("#studentEmail").val(),
    };
    addStudent(student);
  });
});

function addStudent(student) {
  students.push(student);
  displayStudent(student);
}

function displayStudent(student) {
  let newColumn = $("<div class='col-4 mb-3 mt-3'></div>");
  $(".students").append(newColumn);
  let newCard = $("<div class='card'></div>");
  newColumn.append(newCard);
  let newCardImage = $("<img src='images/sample.svg' class='card-img-top' />");
  newCard.append(newCardImage);
  let newCardBody = $("<div class='card-body text-center'></div>");
  newCard.append(newCardBody);
  let newCardTitle = $("<h5 class='card-title'></h5>");
  newCardTitle.text(student.fname + " " + student.lname);
  newCardBody.append(newCardTitle);
  let newCardText = $("<p class='card-text'></p>");
  newCardText.html(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit."
  );
  newCardBody.append(newCardText);
  newButton = $("<a href='#' class='btn btn-primary'>View Profile</a>");
  newCard.hide();
  newCard.fadeIn(200);
}
