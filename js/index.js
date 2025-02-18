document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    const logo = document.querySelector(".logo");

    heading.style.opacity = "0";
    heading.style.transform = "translateY(20px)";
    setTimeout(() => {
        heading.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
    }, 800);

    logo.style.opacity = "0";
    logo.style.transform = "translateY(20px)";
    setTimeout(() => {
        logo.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    }, 1200);
});
