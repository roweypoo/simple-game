let cheese = 0;

const cheeseImg = document.getElementById("cheese");
const counter = document.getElementById("counter");

cheeseImg.addEventListener("click", () => {
    cheese++;
    counter.textContent = "Cheese: " + cheese;

    // Small pop animation
    cheeseImg.style.transform = "scale(1.1)";
    setTimeout(() => {
        cheeseImg.style.transform = "scale(1)";
    }, 100);
});
