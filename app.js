document.addEventListener("keypress", function (event) {
    let audio = new Audio("media/" + event.key.toUpperCase() + ".mp3");


    if (event.code == "KeyA" || event.code == "KeyS" || event.code == "KeyD" || event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" || event.code == "KeyJ" || event.code == "KeyW" || event.code == "KeyE" || event.code == "KeyT" || event.code == "KeyY" || event.code == "KeyU") {
        audio.play()
        console.log("The '" + event.key + "' key is pressed.");
    } else {
        console.log("Invalid Key");
    }
});