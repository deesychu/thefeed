document.addEventListener("DOMContentLoaded", () => {
    const leftSection = document.querySelector(".left");
    const rightSection = document.querySelector(".right");

    leftSection.style.opacity = "0";
    leftSection.style.transform = "translateY(30px)";
    
    setTimeout(() => {
        leftSection.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        leftSection.style.opacity = "1";
        leftSection.style.transform = "translateY(0)";
    }, 800);

    rightSection.style.opacity = "0";
    rightSection.style.transform = "translateY(30px)";
    
    setTimeout(() => {
        rightSection.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        rightSection.style.opacity = "1";
        rightSection.style.transform = "translateY(0)";
    }, 1200);
});
