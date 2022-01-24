import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Home");
    }
    async getHtml(){
        return $.get( "/views/home.html");
    }    
}