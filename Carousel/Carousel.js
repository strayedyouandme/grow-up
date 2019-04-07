var allButtons =$('#buttons > button');
for (let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function (x) {
        var index = $(x.currentTarget).index();
        var n = index * -300;
        $('#images').css({
            transform:'translate(' + n + 'px)'
        });
            n = index;
            activeButton(allButtons.eq(n))

    })
}
var n=0;
var size = allButtons.length;
allButtons.eq(n%3).trigger('click');
activeButton(allButtons.eq(n % size));

var timerId = setTimer();
function playSlide(index) {
    allButtons.eq(index).trigger('click')

}
function activeButton($button){
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}
function setTimer(){
    return setInterval(()=>{
        n +=1;
        playSlide(n % size)
    },1000)
}

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
});


$('.window').on('mouseleave', function() {
    timerId = setTimer()
})
// $(p1).on('click',function () {
//     $(images).css({
//         transform:'translateX(0)'
//     })
// })
// $(p2).on('click',function () {
//     $(images).css({
//         transform:'translateX(-300px)'
//     })
// })
// $(p3).on('click',function () {
//     $(images).css({
//         transform:'translateX(-600px)'
//     })
// })