const btn = document.getElementById('btn');
const text = document.getElementById('demo');


//onclick
// btn.addEventListener('click', () => {
//     text.innerText = "Button Clicked";
// })

//onemouseover
// btn.addEventListener('mouseover', () => {
//     text.innerText = "Mouse Over"
// })

//onmuseout
// btn.addEventListener('mouseout', () => {
//     text.innerText = "Mouse Out"
// })

//onmuseout
btn.addEventListener('keydown', () => {
    text.innerText = "Key Pressed";
})