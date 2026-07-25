const slider = document.getElementById("slider");
const currentValue = document.getElementById("currentValue");

const resultDay = document.getElementById("resultDay");
const resultMonth = document.getElementById("resultMonth");
const resultHalfYear = document.getElementById("resultHalfYear");

function formatEuro(value) {
    return "€" + Math.round(value).toLocaleString("de-DE");
}

function updateCalculator() {
    const investment = Number(slider.value);

    currentValue.textContent = formatEuro(investment);

    const day = investment * 3.00;
    const month = day * 30;
    const halfYear = day * 180;

    resultDay.textContent = formatEuro(day);
    resultMonth.textContent = formatEuro(month);
    resultHalfYear.textContent = formatEuro(halfYear);
}

slider.addEventListener("input", updateCalculator);

updateCalculator();