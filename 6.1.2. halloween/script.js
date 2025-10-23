
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
    console.log("🎃 Chào mừng đến với lễ hội Halloween!");
    for (let i = 0; i < 5; i++) {
        const ghost = document.createElement("div");
        ghost.classList.add("ghost");
        ghost.style.left = Math.random() * 100 + "vw";
        ghost.style.animationDuration = 10 + Math.random() * 10 + "s";
        document.body.appendChild(ghost);
    }
});
