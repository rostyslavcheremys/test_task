let time = 5 * 60;

const registrationTimer = document.getElementById("registrationTimer");

const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    registrationTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (time <= 0) {
        clearInterval(interval);
        registrationTimer.textContent = "00:00";
    }

    time--;
}, 1000);