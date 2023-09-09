let modal = document.getElementById('modal')
let showbtn = document.getElementById('show_btn')
let close = document.querySelector('.close')
let modblock = document.getElementById('mod_block')
let green = document.getElementById('green')
let red = document.getElementById('red')


showbtn.onclick = function() {
    modblock.style.display= "block";
}
close.onclick = function() {
    modblock.style.display ="none";
    modblock.style.backgroundColor = "rgb(0, 0, 0, 0)"
}
window.onclick = function(e) {
if(e.target == modblock){
    modblock.style.display ="none";
    modblock.style.backgroundColor = "rgb(0, 0, 0, 0)"

}
}
green.onclick = function() {
    modblock.style.backgroundColor = "green"
}
red.onclick = function() {
    modblock.style.backgroundColor = "red"
}