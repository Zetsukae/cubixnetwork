// Fonction pour copier l'IP du serveur
function copyIP() {
    const ip = "play.cn-minecraft.com"; // Remplace par l'IP de ton serveur
    navigator.clipboard.writeText(ip).then(() => {
        document.getElementById("copied").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("copied").classList.add("hidden");
        }, 2000);
    });
}

// Simule un nombre de joueurs en ligne (Tu peux utiliser une API pour des stats réelles)
document.addEventListener("DOMContentLoaded", () => {
    let randomPlayers = Math.floor(Math.random() * 100);
    document.getElementById("player-count").textContent = randomPlayers;
});
