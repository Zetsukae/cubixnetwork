document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tab-content');

    // Fonction pour afficher une section
    function showTab(tabName) {
        sections.forEach(section => {
            if (section.id === tabName) {
                section.classList.add('active');
                section.style.display = "block";
                setTimeout(() => section.style.opacity = "1", 10);
            } else {
                section.classList.remove('active');
                section.style.opacity = "0";
                setTimeout(() => section.style.display = "none", 300);
            }
        }

    // Définir le premier onglet affiché au chargement
    showTab('home');

    // Gestion des clics sur les onglets
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            showTab(tab.dataset.tab);
        });
    });

    // Mise à jour des joueurs connectés
    async function fetchPlayers() {
        const serverIP = "178.194.224.249"; // IP du serveur
        const apiURL = https://api.mcsrvstat.us/2/${serverIP};

        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            const playerListDiv = document.getElementById("player-list");

            if (!data.online) {
                playerListDiv.innerHTML = "Le serveur est hors ligne.";
                return;
            }

            if (data.players.online ===
