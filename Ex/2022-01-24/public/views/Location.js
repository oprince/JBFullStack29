import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Israel Weather");
    }
    async getHtml(){ 
        $.getJSON ("cities.json", function (data) {
            let selectedCities = [];
            data.forEach(city => {
                if (city["country"] == "IL")
                    selectedCities.push (city);    
                console.log(selectedCities.length); 
            });    
            return $.get("/views/location.html");
        });
    }
}  