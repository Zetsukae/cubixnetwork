// Fonction pour copier l'IP du serveur
function copyIP() {
    const ip = "play.cn-minecraft.com"; // Remplace par ton IP
    navigator.clipboard.writeText(ip).then(() => {
        document.getElementById("copied").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("copied").classList.add("hidden");
        }, 2000);
    });
}

// Simule un nombre de joueurs en ligne
document.addEventListener("DOMContentLoaded", () => {
    let randomPlayers = Math.floor(Math.random() * 200);
    document.getElementById("player-count").textContent = randomPlayers;
});
