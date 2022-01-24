import Home from "../views/Home.js";
import Locations from "../views/Locations.js";
import About from "../views/About.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/locations", view: Locations },
    { path: "/about", view: About },
  ];

  let currRoute = routes
    .map((route) => {
      return {
        route,
        isSelected: location.pathname === route.path,
      };
    })
    .find((aRoute) => aRoute.isSelected);

  if (!currRoute) {
    currRoute = {
      route: routes[0],
      isSelected: true,
    };
  }
  // what is the type of currRoutes?
  const view = new currRoute.route.view();
  $("#app").html(await view.getHtml());
  console.log(currRoute);
};

window.addEventListener("popstate", router);

const navigateOnClick = () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  navigateOnClick();
  router();
});
