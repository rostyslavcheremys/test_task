let time = 5 * 60;

const timer = document.getElementById("registrationTimer");

const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (time <= 0) {
        clearInterval(interval);
        timer.textContent = "00:00";
    }

    time--;
}, 1000);