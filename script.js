function copyIP() {
    const ip = "play.cn-minecraft.com"; // Remplace par ton IP
    navigator.clipboard.writeText(ip).then(() => {
        document.getElementById("copied").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("copied").classList.add("hidden");
        }, 2000);
    });
}
