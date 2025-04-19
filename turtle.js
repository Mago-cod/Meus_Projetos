const btn=
document.getElementById("btn-menu");
    const sidebar=
    document.getElementById("sidebar");

btn.addEventListener("click",() => {
    sidebar.classList.toggle("aberto");
})

