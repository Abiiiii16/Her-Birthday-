let pin = "";

function updateDots() {
    let dots = "";

    for (let i = 0; i < 4; i++) {
        dots += i < pin.length ? "❤️ " : "○ ";
    }

    document.getElementById("dots").innerHTML = dots;
}

function press(num) {
    if (pin.length >= 4) return;

    pin += num;
    updateDots();
}

function clearPin() {
    pin = "";
    updateDots();
}

function submitPin() {
    document.getElementById("password").value = pin;
    document.getElementById("pinForm").submit();
}

updateDots();