import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Manage locations");
    }
    async getHtml(){
        return $.get( "/views/location.html");
    }    
}