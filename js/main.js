let openmenu = document.querySelector("#open-menu");
let closemenu = document.querySelector("#close-menu");
let menui = document.querySelector("#menu_i");


openmenu.addEventListener("click" , () => {
    menui.classList.add("active");

})

closemenu.addEventListener("click" , () => {
    menui.classList.remove("active");

})



