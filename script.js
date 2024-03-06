const buttons = document.querySelectorAll(".collapsing")
const sections = document.querySelectorAll(".to-collapse")


/* for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        

    });
} */

for (let i=0; i<buttons.length; i++) {
buttons[i].addEventListener("click", function(e) {
    const singleButton = document.getElementById(e.target.id)
    const selectedSection = singleButton.nextElementSibling
    selectedSection.classList.toggle("to-collapse")
    })
}

