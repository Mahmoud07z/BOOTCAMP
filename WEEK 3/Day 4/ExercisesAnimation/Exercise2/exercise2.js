function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(frame, 1);

    function frame() {
        if (pos >= 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
