const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")

const anisha = document.querySelector(".testimonial1")
const ali = document.querySelector(".testimonial2")
const richard = document.querySelector(".testimonial3")
const optionAnisha = document.querySelector(".option-one")
const optionAli = document.querySelector(".option-two")
const optionRichard = document.querySelector(".option-three")

const toggleTest = (owner, optionOne, optionTwo) => {
  owner.style.display = "block"
  optionOne.style.display = "none"
  optionTwo.style.display = "none"
}

optionAnisha.addEventListener("click", () => toggleTest(anisha, ali, richard))
optionAli.addEventListener("click", () => toggleTest(ali, anisha, richard))
optionRichard.addEventListener("click", () => toggleTest(richard, ali, anisha))

btn.addEventListener("click", () => {
  btn.classList.toggle("open")
  nav.classList.toggle("flex")
  nav.classList.toggle("hidden")
})
