document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background-img");
    const heading = document.querySelector("h1");
    const logo = document.querySelector(".logo");

    [background, heading, logo].forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
    });

    setTimeout(() => {
        background.style.transition = "opacity 1.2s ease-out";
        background.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        [heading, logo].forEach(element => {
            element.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });
    }, 800);
});
