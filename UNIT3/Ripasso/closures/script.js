document.getElementById('size-16').onClick = clickHandler(16)

document.getElementById('size-20').onClick = clickHandler(20)

document.getElementById('size-24').onClick = clickHandler(24)

function clickHandler(size) {
    document.body.style.fontSize = size + 'px'
}


// closure
function clickHandler(size) {
    return function () {
        document.body.style.fontSize = size + 'px'
    }
}