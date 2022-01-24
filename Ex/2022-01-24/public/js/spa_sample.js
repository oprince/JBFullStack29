import About from "../views/About.js";
import Home from "../views/Home.js";
import Locations from "../views/Locations.js";

const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}

const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/locations", view: Locations},
        {path: "/about", view: About}
    ];

    const currRoutes = routes.map(route => {
        return {
            route: route,
            isSelected: location.pathname === route.path
        }
    });
    let currRoute = currRoutes.find(aRoute => aRoute.isSelected);

    if (!currRoute){
        currRoute = {
            route: routes[0],
            isSelected: true
        }
    }
    const view = new currRoute.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
    console.log(currRoute);
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});