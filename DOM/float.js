clickMe.addEventListener('click',function (e) {

   if (popover.style.display=='block'){
       popover.style.display='none'
   }else{
       popover.style.display='block'
   }
    e.stopPropagation()
})
document.addEventListener('click',function () {
    console.log("2")
    popover.style.display='none'
})
wrapper.addEventListener('click',function (e) {
    e.stopPropagation()
})
