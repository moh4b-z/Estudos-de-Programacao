let cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.pageX + 'px'
    cursor.style.top = event.pageY + 'px'
    console.log(event.pageX)
})