const btnAbrir = document.getElementById("abrirAgendamento");
const modal = document.getElementById("modalAgendamento");
const form = document.getElementById("formAgendamento");
const msg = document.getElementById("msgAgendamento");

let ultimoFoco = null;

// Abrir o modal
function abrirModal() {
    ultimoFoco = document.activeElement;
    modal.classList.add("ativo")
    modal.setAttribute("aria-hidden", "false");

    // Foca no primeiro campo do FORM
    const primeiroCampo = modal.querySelector("select, input, button");
    if (primeiroCampo) primeiroCampo.focus();

    // Evita o scroll do body
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (ultimoFoco) ultimoFoco.focus();
}

btnAbrir.addEventListener("click", abrirModal);

// Fechar clicando em elementos com data-close
modal.addEventListener("click", (e) => {
    if (e.target.dataset.close === "true") {
        fecharModal();
    }
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) {
        fecharModal();
    }
});

// Envio do FORM (simulação)
form.addEventListener("submit", (e) => {
    e.preventDefault();

const servico = document.getElementById("servico").value;
const dia = document.getElementById("dia").value;
const profissional = document.getElementById("profissional").value;
const horario = document.getElementById("horario").value;
const nome = document.getElementById("nome").value;
const whatsapp = document.getElementById("whatsapp").value;

// Validação
if (!servico || !dia || !profissional) {
    msg.textContent = "Por favor, preencha os campos obrigatórios.";
    return;
}

const resumo = [
    `Agendamento confirmado!`,
    `Serviço: ${servico}`,
    `Dia: ${dia}`,
    `Profissional: ${profissional}`,
    horario ? `Horário: ${horario}` : null,
    nome ? `Nome: ${nome}` : null,
    whatsapp ? `WhatsApp: ${whatsapp}` : null
].filter(Boolean).join(" | ");

msg.textContent = resumo;

form.reset();

});

// Dark Mode Toggle //

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Aplica tema salvo ou preferência do sistema
const temaSalvo = localStorage.getItem("theme");

if (temaSalvo) {
    root.setAttribute("data-theme", temaSalvo);
    themeToggle.textContent = temaSalvo === "dark" ? "☀️" : "🌙"
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
}

// Alternar tema no botão
themeToggle.addEventListener("click", () => {
    const temaAtual = root.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    root.setAttribute("data-theme", temaAtual);
    localStorage.setItem("theme", temaAtual);

    themeToggle.textContent = temaAtual === "dark" ? "☀️" : "🌙";
})