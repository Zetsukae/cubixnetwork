document.addEventListener("DOMContentLoaded", () => {
    // Gestion des onglets
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Récupération des joueurs connectés
    async function fetchPlayers() {
        const serverIP = "178.194.224.249";

        try {
            const response = await fetch(https://api.mcsrvstat.us/2/${serverIP});
            const data = await response.json();
            const playerListDiv = document.getElementById("player-list");

            if (!data.online) {
                playerListDiv.innerHTML = "Le serveur est hors ligne.";
                return;
            }

            if (data.players.online === 0) {
                playerListDiv.innerHTML = "Aucun joueur connecté.";
            } else {
                playerListDiv.innerHTML = <strong>${data.players.online}</strong> joueurs en ligne :<br>;
                const ul = document.createElement("ul");

                data.players.list.forEach(player => {
                    const li = document.createElement("li");
                    li.textContent = player;
                    ul.appendChild(li);
                });

                playerListDiv.appendChild(ul);
            }
        } catch (error) {
            document.getElementById("player-list").innerHTML = "Erreur de récupération des joueurs.";
            console.error("Erreur lors de la récupération des joueurs :", error);
        }
    }

    setInterval(fetchPlayers, 30000);
    fetchPlayers();
});
