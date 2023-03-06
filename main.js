
let block = document.querySelector(".block")
let left = document.querySelectorAll(".left")
let right = document.querySelectorAll(".right")
let left_btn = document.querySelector(".left-btn")
let right_btn = document.querySelector(".right-btn")

block.classList.add("right-anim")
right_btn.addEventListener("click", () => {
    if (block.classList.contains("right-anim")) {
        block.classList.remove("right-anim")
        block.classList.add("left-anim")
        right.forEach(e => {
            e.classList.add("deactive")
        })
        left.forEach(e => {
            e.classList.add("active")
        })
    }
})

left_btn.addEventListener("click", () => {
    if (block.classList.contains("left-anim")) {
        block.classList.remove("left-anim")
        block.classList.add("right-anim")
        right.forEach(e => {
            e.classList.remove("deactive")
        })
        left.forEach(e => {
            e.classList.remove("active")
        })
    }
})
