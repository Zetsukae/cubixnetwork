function copyIP() {
    const ip = "178.194.224.249"; // IP
    navigator.clipboard.writeText(ip).then(() => {
        document.getElementById("copied").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("copied").classList.add("hidden");
        }, 2000);
    });
}

// Changement d'onglet
function showTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabName).classList.remove('hidden');
}
