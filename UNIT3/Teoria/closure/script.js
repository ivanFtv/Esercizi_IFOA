document.getElementById('font-16').onclick = clickHandler(16)
document.getElementById('font-20').onclick = clickHandler(20)
document.getElementById('font-24').onclick = clickHandler(24)


function clickHandler(misura) {
    return function() {
        document.body.style.fontSize = misura + 'px'
    }
}








