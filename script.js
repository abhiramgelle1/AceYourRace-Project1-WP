document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
});

document.getElementById("restart-btn").addEventListener("click", function() {
    document.getElementById("game-over-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
});

document.getElementById("back-btn").addEventListener("click", function() {
    document.getElementById("rules-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
});

document.getElementById("nav-home").addEventListener("click", function() {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    document.getElementById("start-screen").classList.remove("hidden");
});

document.getElementById("nav-game").addEventListener("click", function() {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    document.getElementById("game-screen").classList.remove("hidden");
});

document.getElementById("nav-rules").addEventListener("click", function() {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    document.getElementById("rules-screen").classList.remove("hidden");
});
