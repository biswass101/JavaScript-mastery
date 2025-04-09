function upperCase () {
    const ipt = document.getElementById('ipt');
    ipt.value = ipt.value.toUpperCase();
}

const container = document.querySelector('#container');

container.addEventListener('mouseover', () => {
    container.style.backgroundColor = 'aqua';
})
container.addEventListener('mouseout', () => {
    container.style.backgroundColor = 'rgb(137, 234, 145)';
})