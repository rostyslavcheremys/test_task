document.querySelectorAll("[href='#registration-form']").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("registration-form").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});