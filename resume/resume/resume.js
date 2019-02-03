portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
}
window.onscroll = function (x) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }

    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.remove('active')
    }
    specialTags[minIndex].classList.add('active')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li =a.parentNode
    let brotherAndMe =  li.parentNode.children
    for (let i=0; i<brotherAndMe.length; i++){
       brotherAndMe[i].classList.remove('active')
    }
    li.classList.add('active')
}


let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('nav.menu > ul > li >a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);



for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop


        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = { y: currentTop };
        var t = Math.abs((s / 100) * 200)
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}




//         let n = 25
//         let duration = 500 / n
//         let currentTop = window.scrollY
//         let targetTop = top - 80
//         let distance = (targetTop - currentTop) / n
//         console.log(targetTop)
//         let i = 0
//         let id = setInterval(() => {
//             if (i === n) {
//                 window.clearInterval(id)
//                 return
//             }
//             i = i + 1
//             window.scrollTo(0, currentTop + distance * i)
//         }, duration)
//     }

