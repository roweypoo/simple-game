// --------------------
// VARIABLES
// --------------------
let score = 0;
let clickValue = 1;

// Shop prices
let upgrade1Cost = 10;
let autoCost = 50;
let doubleCost = 200;

// Auto clickers
let autoClickers = 0;

// Load saved data
loadGame();

// UI elements
const scoreText = document.getElementById("score");

const upgrade1CostText = document.getElementById("upgrade1Cost");
const autoCostText = document.getElementById("autoCost");
const doubleCostText = document.getElementById("doubleCost");

// Buttons
document.getElementById("clickBtn").onclick = () => {
    score += clickValue;
    updateUI();
    saveGame();
};

document.getElementById("buyUpgrade1").onclick = () => buyUpgrade("click");
document.getElementById("buyAuto").onclick = () => buyUpgrade("auto");
document.getElementById("buyDouble").onclick = () => buyUpgrade("double");

// --------------------
// SHOP SYSTEM
// --------------------
function buyUpgrade(type) {

    if (type === "click" && score >= upgrade1Cost) {
        score -= upgrade1Cost;
        clickValue += 1;
        upgrade1Cost = Math.floor(upgrade1Cost * 1.6);
    }

    else if (type === "auto" && score >= autoCost) {
        score -= autoCost;
        autoClickers += 1;
        autoCost = Math.floor(autoCost * 1.7);
    }

    else if (type === "double" && score >= doubleCost) {
        score -= doubleCost;
        clickValue *= 2;
        doubleCost = Math.floor(doubleCost * 2.2);
    }

    updateUI();
    saveGame();
}

// --------------------
// AUTO CLICKERS
// --------------------
setInterval(() => {
    if (autoClickers > 0) {
        score += autoClickers;
        updateUI();
        saveGame();
    }
}, 1000);

// --------------------
// UI UPDATE
// --------------------
function updateUI() {
    scoreText.textContent = score;
    upgrade1CostText.textContent = upgrade1Cost;
    autoCostText.textContent = autoCost;
    doubleCostText.textContent = doubleCost;
}

// --------------------
// SAVE SYSTEM
// --------------------
function saveGame() {
    const saveData = {
        score,
        clickValue,
        upgrade1Cost,
        autoCost,
        doubleCost,
        autoClickers
    };
    localStorage.setItem("clickerGame", JSON.stringify(saveData));
}

function loadGame() {
    const data = JSON.parse(localStorage.getItem("clickerGame"));
    if (data) {
        score = data.score;
        clickValue = data.clickValue;
        upgrade1Cost = data.upgrade1Cost;
        autoCost = data.autoCost;
        doubleCost = data.doubleCost;
        autoClickers = data.autoClickers;
    }
}
