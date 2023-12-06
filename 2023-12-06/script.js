let count = document.querySelector(".count");
let subtract = document.querySelector(".subtract");
let reset = document.querySelector(".reset");
let add = document.querySelector(".add");



subtract.addEventListener("click", function() {
    count.innerHTML --
})
reset.addEventListener("click", function() {
count.innerHTML = 0
})
add.addEventListener("click", function() {
    count.innerHTML ++
})
