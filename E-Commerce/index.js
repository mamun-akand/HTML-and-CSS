const menuIcon = document.getElementById("menu__bar");
const menuNav = document.getElementById("nav__bar");

menuIcon.addEventListener("click", () =>
{
    if(menuNav.className == "hidden"){
        menuNav.classList.remove("hidden");
    }else{
        menuNav.classList.add("hidden");       
    }
});