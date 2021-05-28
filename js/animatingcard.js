setInterval(decreaseSeconds, 990)
function decreaseSeconds(){
    var changeBackText = $(".card-back-text")[3].innerText
    if(changeBackText==0){
        decreaseMinutes()
        changeBackText = 60
    }
    $(".card-back-text")[3].innerText = changeBackText-1
    var addAnimationTop = $(".card-top")[3].classList
    var addAnimationBottom = $(".card-bottom")[3].classList
    addAnimationTop.add("animating-top")
    setTimeout(function(){
        addAnimationBottom.add("animating-bottom")
        $(".animating-top > .seconds").text(changeBackText-1)
        $(".animating-bottom > .seconds").text(changeBackText-1)
    },400)
    setTimeout(function(){
        
        addAnimationBottom.remove("animating-bottom")
        addAnimationTop.remove("animating-top")
    },900)
}

function decreaseMinutes(){
    var changeBackText = $(".card-back-text")[2].innerText
    if(changeBackText==0){
        decreaseHours()
        changeBackText = 60
    }
    $(".card-back-text")[2].innerText = changeBackText-1
    var addAnimationTop = $(".card-top")[2].classList
    var addAnimationBottom = $(".card-bottom")[2].classList
    addAnimationTop.add("animating-top")
    setTimeout(function(){
        addAnimationBottom.add("animating-bottom")
        $(".animating-top > .minutes").text(changeBackText-1)
        $(".animating-bottom > .minutes").text(changeBackText-1)
    },400)
    setTimeout(function(){
        
        addAnimationBottom.remove("animating-bottom")
        addAnimationTop.remove("animating-top")
    },900)
    
}

// function increaseHours(){
//     var toCheck = Number($(".hours")[0].innerText)
//     console.log(typeof(toCheck))
//     if(toCheck==0){
//         $(".hours").text(24)
//         increasedays();
//     }else{
//         $(".hours").text(toCheck-=1)
//     }
// }