import Home from "../views/Home.js";
import Locations from "../views/Locations.js";
import About from "../views/About.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/locations", view: Locations },
        { path: "/about", view: About }
    ];

    const currentRout = routes.find(element => element.path === location.pathname)

    if (!currentRout) {
        currentRout = {
            route: routes[0],
            isSelected: true
        }
    }
    const view = new currentRout.view;
    document.querySelector("#app").innerHTML = await view.getHtml();
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});