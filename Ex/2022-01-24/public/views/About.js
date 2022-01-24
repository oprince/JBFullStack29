import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("About");
  }
  async getHtml() {
    return $.get("/views/html/about.html");
  }
}
