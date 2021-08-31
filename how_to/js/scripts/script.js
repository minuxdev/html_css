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

var width = screen.width
var sidemenu = document.getElementById("side-menu2")

var menu = document.getElementById("submenu")
var hr = document.getElementById("hr")


// console.log(width, sidemenu)


function get_widht(){
    if (width < 500)
        document.getElementsByClassName("menu")
}


function show_menu(){
    if (width < 500)
        menu.style.display = "none"
    else{
        menu.style.display = "flex"
        menu.style.height = "30px"
        hr.style.display = "block"}
}


function close_menu(){
    menu.style.display = "flex"
    menu.style.height = "0px"
    hr.style.display = "none"
}

var side_width = sidemenu.style.width
function open_sidemenu(){
    
    console.log(side_width)

    if (side_width < 200)
        sidemenu.style.width = "200px"
    else
        sidemenu.style.width = "38px"
}
