// document.body.ontouchstart = function(eee){
//     eee.preventDefault()
// }
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var lineWidth = 5
autoSetCanvas(canvas)

lisenTomouse(canvas)


var usingEraser = false
pen.onclick = function () {
    usingEraser = false
    pen.classList.add('active')
    eraser.classList.remove('active')

}
eraser.onclick = function () {
    usingEraser = true
    eraser.classList.add('active')//新增class
    pen.classList.remove('active')//消除class

}
clear.onclick =function () {
    context.clearRect(0,0,canvas.width,canvas.height)
}
save.onclick = function () {
    var url =canvas.toDataURL("image/png")
    console.log(url)
    var a =document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = 'image'
    a.click()
}



red.onclick = function () {
    context.fillStyle = "red"
    context.strokeStyle = "red"
    red.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
green.onclick = function () {
    context.fillStyle = "green"
    context.strokeStyle = "green"
    green.classList.add('active')
    red.classList.remove('active')
    blue.classList.remove('active')
}
blue.onclick = function () {
    context.fillStyle = "blue"
    context.strokeStyle = "blue"
    blue.classList.add('active')
    green.classList.remove('active')
    red.classList.remove('active')
}

thin.onclick =function(){
    lineWidth = 5
    thin.classList.add('active')
    thick.classList.remove('active')
}
thick.onclick =function (){
    lineWidth = 15
    thick.classList.add('active')
    thin.classList.remove('active')
}



/************************************/



function autoSetCanvas(canvas) {
    change()
    window.onresize = function () {
        change()
    }
    function change() {
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}


/************************************/



function lisenTomouse(canvas) {
    var painting = false
    var Lastpoint = { x: undefined, y: undefined }
    if (document.body.ontouchstart !== undefined) {
        canvas.ontouchstart = function (a) {
            painting = true
            
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            Lastpoint = { x: x, y: y }
            painting = true
            if (usingEraser) {
                
                context.clearRect(x, y, 10, 10)
            } else {
                Lastpoint = { x: x, y: y }
            }
        }
        canvas.ontouchmove = function (a) {
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            
            if (!painting) { return }
            if (usingEraser) {
        
                context.clearRect(x, y, 10, 10)
            } else {
                var Newpoint = { x: x, y: y }
                drawLine(Lastpoint.x, Lastpoint.y, Newpoint.x, Newpoint.y)
                Lastpoint = Newpoint

            }
        }
        canvas.ontouchend = function (a) {
            painting = false
        }
    } else {
        canvas.onmousedown = function (a) {
            painting = true
            var x = a.clientX
            var y = a.clientY
            Lastpoint = { x: x, y: y }
            painting = true
            if (usingEraser) {
                context.clearRect(x, y, 10, 10)
            } else {
                Lastpoint = { x: x, y: y }
            }
        }
        canvas.onmousemove = function (a) {
            var x = a.clientX
            var y = a.clientY
            if (!painting) { return }
            if (usingEraser) {
                context.clearRect(x, y, 10, 10)
            } else {
                var Newpoint = { x: x, y: y }
                drawLine(Lastpoint.x, Lastpoint.y, Newpoint.x, Newpoint.y)
                Lastpoint = Newpoint

            }
        }
        canvas.onmouseup = function (a) {
            painting = false
        }
    }
}
function drawCircle(x, y, radius) {
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.lineWidth = lineWidth
    context.stroke()
    context.closePath()
}    