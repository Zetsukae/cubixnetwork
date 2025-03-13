document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tab-content');

    // Fonction pour afficher un onglet et cacher les autres
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
        });
    }

    // Événements sur les liens de navigation
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            showTab(tab.dataset.tab);
        });
    });

    // Affichage de l'onglet actif au chargement
    showTab("home");
});
