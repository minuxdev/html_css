/* * CLASS WINDOW * */
// window.alert("Welcome to our site...")


/* * CLASS DOCUMENT * */
function changeTitle(){
    window.document.getElementById("h1-id").innerHTML ="Changing The Title";
};

// function msg(){
//     window.console;
// }

// console.log(document.onmouseenter);

// var box = document.getElementById('test')

// function changeColor() {
//     box.style.height = "20vh"
//     box.style.width = "30vw"
//     box.style.color = "white"
//     box.style.backgroundColor = "tomato"
// }

var menu = document.getElementById("submenu")
var hr = document.getElementById("hr")

function show_menu(){
    menu.style.display = "flex"
    menu.style.height = "30px"
    hr.style.display = "block"
}

function close_menu() {
    menu.style.display = "flex"
    menu.style.height = "0px"
    hr.style.display = "none"
}