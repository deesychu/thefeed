document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background-image");
    const leftSection = document.querySelector(".left");
    const rightSection = document.querySelector(".right");

    background.style.opacity = "0";
    background.style.transition = "opacity 1.5s ease-in-out";

    setTimeout(() => {
        background.style.opacity = "1";
    }, 400); 
    
    leftSection.style.opacity = "0";
    leftSection.style.transform = "translateY(30px)";
    rightSection.style.opacity = "0";
    rightSection.style.transform = "translateY(30px)";

    setTimeout(() => {
        leftSection.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        leftSection.style.opacity = "1";
        leftSection.style.transform = "translateY(0)";
    }, 800);

    setTimeout(() => {
        rightSection.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        rightSection.style.opacity = "1";
        rightSection.style.transform = "translateY(0)";
    }, 1000);
});
