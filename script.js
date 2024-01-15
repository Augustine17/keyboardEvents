document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keycode = event.keyCode;
    

    const keyboardkey = document.getElementById('text');
    const keyValue = document.getElementById('keyCode');
    keyValue.classList.remove("zero")
    var newSpan = document.createElement('span');
    newSpan.innerText = key;
    newSpan.classList.add("color_change")
    keyboardkey.innerText = "You pressed ";
    keyboardkey.appendChild(newSpan);
    keyValue.innerText =`${keycode}`;

    });
