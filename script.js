function copyIP() {
    const ip = "178.194.224.249"; // ip
    navigator.clipboard.writeText(ip).then(() => {
        document.getElementById("copied").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("copied").classList.add("hidden");
        }, 2000);
    });
}
