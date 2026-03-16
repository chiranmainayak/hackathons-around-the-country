const cards=document.querySelectorAll(".card")

cards.forEach(card=>{
card.addEventListener("mousemove",(e)=>{
const rect=card.getBoundingClientRect()
const x=e.clientX-rect.left
const y=e.clientY-rect.top

const rotateX=(y-rect.height/2)/15
const rotateY=(rect.width/2-x)/15

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
})

card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0) scale(1)"
})
})

document.querySelector(".explore").addEventListener("click",()=>{
document.querySelector(".cards").scrollIntoView({
behavior:"smooth"
})
})