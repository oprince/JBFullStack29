import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }
  async getHtml() {
    $.getJSON("../helpers/cities.json", (data) => {
      const cities = data.filter((city) => city.country === "IL");
      cities.forEach((city) => {
        $("#dropdown").append(
          `<option value="${city.id}">${city.name}</option>`
        );
      });
      this.handleDropDown();
    });
    return $.get("/views/html/home.html");
  }

  handleDropDown() {
    $("#dropdown").on("change", (e) => {
      const cityId = e.target.value;
      if (cityId === "0") {
        if ($("#message") !== null) {
          $("#message").html("");
        }
        return;
      }
      $.ajax({
        type: "POST",
        url: `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=de6d52c2ebb7b1398526329875a49c57&units=metric`,
        dataType: "json",
        success: function (result, status, xhr) {
          const { name, sys, main, weather } = result;
          let table = $("<table><tr><th>Weather Description</th></tr>");
          table.append(`<tr><td>City:</td><td>${name}</td></tr>`);
          table.append(`<tr><td>Country:</td><td>${sys.country}</td></tr>`);
          table.append(
            `<tr><td>Current Temperature:</td><td>${main.temp}°C</td></tr>`
          );
          table.append(`<tr><td>Humidity:</td><td>${main.humidity}</td></tr>`);
          table.append(
            `<tr><td>Weather:</td><td>${weather[0].description}</td></tr>`
          );
          $("#message").html(table);
        },
        error: function (xhr, status, error) {
          alert(
            "Result: " +
              status +
              " " +
              error +
              " " +
              xhr.status +
              " " +
              xhr.statusText
          );
        },
      });
    });
  }
}
