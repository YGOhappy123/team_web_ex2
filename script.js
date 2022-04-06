function isInViewPort (element) {
    const {top, bottom} = element.getBoundingClientRect()
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    
    return ((top <= 0 && bottom > 0) ||                            // half top out viewport
            (top < viewHeight && bottom >= viewHeight) ||          // half bottom out viewport
            (top >= 0 && bottom <= viewHeight)                     // full in viewport  (0 <= top <= bottom <= view height)
    )
}

const elToAnimate = document.querySelectorAll('.aos-card')
function checkForRendering () {
    elToAnimate.forEach (element => {
        if (isInViewPort(element)) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })
}
checkForRendering()

window.onscroll = checkForRendering