$(document).ready(function () {
  $("#reset").click(function (e) {
    $("#citySelect").val("Select");
    $("#message").html("");
  });

  $("#submit").click(function (e) {
    let validate = Validate();
    $("#message").html(validate);
    if (validate.length == 0) {
      let selectedCity = $("#citySelect").val();

      let BASE_URL = "http://api.openweathermap.org/data/2.5";
      let API_KEY = "de6d52c2ebb7b1398526329875a49c57";
      let API_URL = `${BASE_URL}/weather?id=${selectedCity}&appid=${API_KEY}&units=metric`;
      let API_URL_FORECAST = `${BASE_URL}/forecast?id=${selectedCity}&cnt=10&appid=${API_KEY}&units=metric`;

      return new Promise((resolve, reject) => {
        // use XMLHttpRequest to get the data from the API
        let xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL);
        xhr.onload = function () {
          if (this.status == 200) {
            resolve(drawCityWeather(JSON.parse(this.response)));
          } else {
            reject(this.statusText);
          }
        };
        xhr.onerror = function () {
          reject(this.statusText);
        };
        xhr.send();
      });
      //   $.get(API_URL_FORECAST, (data) => {
      //     console.log({ forecast: data });
      //   }).catch((xhr, status, error) => {
      //     alert(
      //       `Error: ${error} Status: ${status} Response: ${xhr.responseText}`
      //     );
      //   });

      //   $.post(API_URL, (data) => {
      //     drawCityWeather(data);
      //   }).catch((xhr, status, error) => {
      //     alert(
      //       `Error: ${error} Status: ${status} Response: ${xhr.responseText}`
      //     );
      //   });
      // }
    }
  });

  function drawCityWeather(result) {
    var table = $("<table><tr><th>Weather Description</th></tr>");

    table.append("<tr><td>City:</td><td>" + result["name"] + "</td></tr>");
    table.append(
      "<tr><td>Country:</td><td>" + result["sys"]["country"] + "</td></tr>"
    );
    table.append(
      "<tr><td>Current Temperature:</td><td>" +
        result["main"]["temp"] +
        "°C</td></tr>"
    );
    table.append(
      "<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "</td></tr>"
    );
    table.append(
      "<tr><td>Weather:</td><td>" +
        result["weather"][0]["description"] +
        "</td></tr>"
    );

    $("#message").html(table);
  }

  $(document).ajaxStart(function () {
    $("img").show();
  });

  $(document).ajaxStop(function () {
    $("img").hide();
  });

  function Validate() {
    var errorMessage = "";
    if ($("#citySelect").val() == "Select") {
      errorMessage += "► Select City";
    }
    return errorMessage;
  }
});
