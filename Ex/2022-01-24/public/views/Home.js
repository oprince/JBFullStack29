import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Home");
    }
    async getHtml(){        
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
            dataType: "json",
            success: function (result, status, xhr) {
                var table = $("<table><tr><th>Weather Description</th></tr>");
        
                table.append("<tr><td>City:</td><td>" + result["name"] + "</td></tr>");
                table.append("<tr><td>Country:</td><td>" + result["sys"]["country"] + "</td></tr>");
                table.append("<tr><td>Current Temperature:</td><td>" + result["main"]["temp"] + "°C</td></tr>");
                table.append("<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "</td></tr>");
                table.append("<tr><td>Weather:</td><td>" + result["weather"][0]["description"] + "</td></tr>");
        
                $("#message").html(table);
            },
            error: function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        });   
        return $.get( "/views/home.html");     
    }    
}