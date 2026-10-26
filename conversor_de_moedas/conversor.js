const API_URL = "https://api.frankfurter.dev/v2/rates";

const form = document.getElementById("formConversor");
const valorInput = document.getElementById("valor");
const moedaOrigem = document.getElementById("moedaOrigem");
const moedaDestino = document.getElementById("moedaDestino");
const btnTrocar = document.getElementById("btnTrocar");
const btnConverter = document.getElementById("btnConverter");
const resultado = document.getElementById("resultado");
const mensagemErro = document.getElementById("mensagemErro");
const simboloMoeda = document.getElementById("simboloMoeda");

const simbolos = { BRL: "R$", USD: "US$", EUR: "€", GBP: "£", JPY: "¥", CAD: "C$", CHF: "CHF" };

function formatarMoeda(valor, moeda) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda,
    minimumFractionDigits: moeda === "JPY" ? 0 : 2,
    maximumFractionDigits: moeda === "JPY" ? 0 : 2
  }).format(valor);
}

function formatarNumero(valor, casas = 4) {
  return new Intl.NumberFormat("pt-BR", { maximumFractionDigits: casas }).format(valor);
}

function atualizarSimbolo() {
  simboloMoeda.textContent = simbolos[moedaOrigem.value] || moedaOrigem.value;
}

function definirCarregamento(ativo) {
  btnConverter.disabled = ativo;
  btnConverter.classList.toggle("is-loading", ativo);
  btnConverter.querySelector(".button-text").textContent = ativo ? "Consultando cotação" : "Converter agora";
}

function exibirErro(mensagem) {
  resultado.hidden = true;
  mensagemErro.textContent = mensagem;
  mensagemErro.hidden = false;
}

function exibirResultado(valor, convertido, origem, destino, taxa, data) {
  mensagemErro.hidden = true;
  resultado.innerHTML = `
    <p class="result-label">Valor convertido</p>
    <p class="result-value">${formatarMoeda(convertido, destino)}</p>
    <p class="result-meta">
      ${formatarMoeda(valor, origem)} · 1 ${origem} = ${formatarNumero(taxa, 6)} ${destino}<br>
      Cotação de referência: ${new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${data}T12:00:00Z`))}
    </p>`;
  resultado.hidden = false;
}

async function converter(event) {
  event?.preventDefault();
  const valor = Number(valorInput.value);
  const origem = moedaOrigem.value;
  const destino = moedaDestino.value;

  if (!Number.isFinite(valor) || valor <= 0) {
    exibirErro("Informe um valor maior que zero para realizar a conversão.");
    valorInput.focus();
    return;
  }

  if (origem === destino) {
    exibirResultado(valor, valor, origem, destino, 1, new Date().toISOString().slice(0, 10));
    return;
  }

  definirCarregamento(true);
  mensagemErro.hidden = true;

  try {
    const url = `${API_URL}?base=${encodeURIComponent(origem)}&quotes=${encodeURIComponent(destino)}`;
    const response = await fetch(url, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`A API respondeu com o status ${response.status}.`);

    const taxas = await response.json();
    const cotacao = Array.isArray(taxas) ? taxas.find(item => item.quote === destino) : null;
    if (!cotacao || !Number.isFinite(Number(cotacao.rate))) throw new Error("Cotação não encontrada.");

    const taxa = Number(cotacao.rate);
    exibirResultado(valor, valor * taxa, origem, destino, taxa, cotacao.date);
  } catch (error) {
    console.error("Erro ao consultar a cotação:", error);
    exibirErro("Não foi possível obter a cotação atual. Verifique sua conexão e tente novamente.");
  } finally {
    definirCarregamento(false);
  }
}

function trocarMoedas() {
  [moedaOrigem.value, moedaDestino.value] = [moedaDestino.value, moedaOrigem.value];
  atualizarSimbolo();
  resultado.hidden = true;
  mensagemErro.hidden = true;
  valorInput.focus();
}

form.addEventListener("submit", converter);
btnTrocar.addEventListener("click", trocarMoedas);
moedaOrigem.addEventListener("change", atualizarSimbolo);
atualizarSimbolo();
