function addStudent() {
  let rows = document.querySelectorAll(".row");
  let theRow = rows[rows.length - 2];
  let columns = theRow.querySelectorAll(".col-4");

  let cards = theRow.querySelectorAll(".card");
  let theCol = columns[cards.length];

  let newCard = document.createElement("div");
  newCard.className = "card";

  let newimage = document.createElement("img");
  newimage.src = "assets/images/download.svg";
  newimage.className = "card-img-top";

  let newCardBody = document.createElement("div");
  newCardBody.className = "card-body text-center";

  let newCardTitle = document.createElement("h5");
  newCardTitle.className = "card-title";
  newCardTitle.innerText = "Rimon El-Ataf";

  let newCardText = document.createElement("p");
  newCardText.className = "card-text";
  newCardText.innerText =
    "Rimon El-Ataf lives in Haifa. He is now taking the John Bryce fullstack course.";

  let newCardButton = document.createElement("a");
  newCardButton.className = "btn btn-primary";
  newCardButton.innerText = "View Profile";
  newCardButton.href = "#";

  newCard.appendChild(newimage);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardText);
  newCardBody.appendChild(newCardButton);
  theCol.appendChild(newCard);
}
