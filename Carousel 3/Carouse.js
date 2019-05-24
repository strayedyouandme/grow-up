let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')

let current=0

makeFakeSlides()
$slides.css({transform:'translateX(-400px)'})
bindEvents()

$('#previous').on('click',function () {
    goToSlide(current + 1)
})
$('#next').on('click',function () {
    goToSlide(current - 1)
})

let timer = setInterval(function () {
    goToSlide(current+1)         //自动增加
},2000)
$('.container').on('mouseenter',function () {
    window.clearInterval(timer)
}).on('mouseleave',function () {
    timer = setInterval(function () {
        goToSlide(current+1)         //自动增加
    },2000)
})







function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true) //true复制所有 false只复制自己
    let $lastCopy =$images.eq($images.length-1).clone(true) //拷贝最后一张照片

    $slides.append($firstCopy)              //append 追加
    $slides.prepend($lastCopy)              //prepend 插在后面

}
function bindEvents() {
    $('#buttonWrapper').on('click','button',function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)

    })
}
function goToSlide(index) {
    if (index > $buttons.length - 1 ){
        index = 0
    } else if(index < 0){
        index = $buttons.length - 1
    }

    if(current === $buttons.length -1 && index === 0){

        $slides.css({transform: `translateX(${-($buttons.length + 1) * 400}px)`})
            .one('transitionend',function () {
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index + 1) * 400}px)`}).show()
            })


    }
    else if (current === 0 && index === $buttons.length - 1) {

        $slides.css({transform:`translateX(0px)`})
            .one('transitionend',function () {
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index + 1) * 400}px)`}).show()

            })

    }else {


        $slides.css({transform:`translateX(${- (index+1) * 400}px)`})

    }
    current = index


}





    // $buttons.eq(0).on('click',function () {
    //     if (current==2){
    //         $slides.css({transform:'translateX(-1600px)'})
    //             .one('transitionend',function(){                    //transitionend 事件会在 CSS transition 结束后触发
    //                 $slides.hide()
    //                     .offset()
    //                 $slides.css({transform:'translateX(-400px)'})
    //                     .show()
    //
    //             })
    //     }else{
    //         $slides.css({transform:'translateX(-400px)'})
    //     }
    //
    //
    //     current=0
    //
    // })
    // $buttons.eq(1).on('click',function () {
    //
    //     $slides.css({transform:'translateX(-800px)'})
    //     current=1
    // })
    // $buttons.eq(2).on('click',function () {
    //     if (current==0){
    //         $slides.css({transform:'translate(0px)'})
    //             .one('transitionend',function () {
    //                 $slides.hide()
    //                     .offset()
    //                 $slides.css({transform:'translateX(-1200px)'})
    //                     .show()
    //
    //             })
    //     } else{
    //         $slides.css({transform:'translateX(-1200px)'})
    //     }
    //
    //     current=2
    // })
