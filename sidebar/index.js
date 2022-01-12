const toggleOpen = document.querySelector("#menu-button")

toggleOpen.addEventListener("click", (e) => {
    toggleOpen.classList.toggle("change");
    document.querySelector(".container__sidebar").classList.toggle("open")
    document.querySelectorAll(".option__content>span").forEach((element) => {
        element.classList.toggle("open")
        
    })
})