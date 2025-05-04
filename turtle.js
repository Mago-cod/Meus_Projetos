function toggleMenu() {
    const sidebar = 
document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
}

function toggleMenu() {
    const sidebar =
document.getElementById("sidebar");
    const overlay =
document.getElementById("overlay");

    sidebar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}

function closeMenu() {
    document.getElementById("sidebar").classList.add("hidden");

    document.getElementById("overlay").classList.add("hidden")
}
