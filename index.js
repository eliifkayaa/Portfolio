let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";
    
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwbfNQUGwyb6Uc14WFh6BxBWQmuuuK0P-w6ZrO48HHjBf8Wm9VoGlCcgaAtt3HpXTqn/exec'
const form = document.forms['contactForm']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})