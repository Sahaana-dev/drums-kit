//detecting button press
var noOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var alph = this.textContent;//w
        audioClick(alph);
        buttonAnimation(alph);
    });
}
//detecting keyboard press
document.addEventListener("keydown", function (event) {
    audioClick(event.key);
    buttonAnimation(event.key);
});
function audioClick(alph) {
    switch (alph) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("Wrong one");
    }
}
function buttonAnimation(alph)
{
    var activeButton = document.querySelector("."+alph);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
