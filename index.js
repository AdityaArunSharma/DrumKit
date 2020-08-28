var numberButtons = document.querySelectorAll(".drum").length;
var button_drum = document.querySelectorAll(".drum");
console.log(numberButtons);
for (var x = 0; x < numberButtons; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click", clickDetected);

}

document.addEventListener("keydown",function(event) {
    var button_clicked = document.querySelector("."+event.key);
    button_clicked.style.color = "red";
    makeSound(event.key);
    setTimeout(function() {
        button_clicked.style.color = "#DA0463";
    }, 250);
});


function clickDetected() {
    var button_clicked = this;
    button_clicked.style.color = "red";
    var innerHTML = button_clicked.innerHTML;

    makeSound(innerHTML);

    setTimeout(function() {
        button_clicked.style.color = "#DA0463";
    }, 250);
}

function makeSound(key) {
    var innerHTML=key;
    if (innerHTML == "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if (innerHTML == "a") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } else if (innerHTML == "s") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if (innerHTML == "d") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    } else if (innerHTML == "j") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    } else if (innerHTML == "k") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    } else if (innerHTML == "l") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
}
