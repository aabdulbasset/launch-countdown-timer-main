$().ready(flipcards)
setInterval(flipcards, 950)
function flipcards(){
    var secondCheck = increaseseconds()
    
}
function increaseseconds(){

    var toCheck = Number($(".seconds")[0].innerText)
    console.log(typeof(toCheck))
    if(toCheck==0){
        $(".seconds").text(60)
        increaseMinutes();
    }else{
        $(".seconds").text(toCheck-=1)
    }
}
function increaseMinutes(){
    var toCheck = Number($(".minutes")[0].innerText)
    console.log(typeof(toCheck))
    if(toCheck==0){
        $(".minutes").text(60)
        increaseHours();
    }else{
        $(".minutes").text(toCheck-=1)
    }
}

function increaseHours(){
    var toCheck = Number($(".hours")[0].innerText)
    console.log(typeof(toCheck))
    if(toCheck==0){
        $(".hours").text(24)
        increasedays();
    }else{
        $(".hours").text(toCheck-=1)
    }
}