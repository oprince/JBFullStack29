import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Locations");
  }
  async getHtml() {
    return $.get("/views/html/locations.html");
  }
}
