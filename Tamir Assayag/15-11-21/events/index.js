function myClickEventHandler() {
  console.log("Button click");
}
function over() {
  console.log("Mouse Over");
}
function out() {
  console.log("Mouse Out");
}
function changed() {
  console.log("Div was changed");
}
function pageLoad() {
  console.log("page was loaded");
}
function mySelectEventHandler() {
  let el = document.getElementById("mySelect");
  let selectedValue = el.options[el.selectedIndex].text;
  console.log(selectedValue);
}
