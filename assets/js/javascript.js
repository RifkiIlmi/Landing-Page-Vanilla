// topBtn = document.getElementById("topBtn");
const idHref = document.querySelectorAll('a[href^="#"]');
const nav = document.querySelector("nav ul");
var navList = document.getElementById("nav-lists");

idHref.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = document.querySelector(this.getAttribute("href"));
    href.scrollIntoView({
      behavior: "smooth",
    });
  });
});


function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}
