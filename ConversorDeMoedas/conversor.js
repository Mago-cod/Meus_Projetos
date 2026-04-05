async function converter() {
    const valor = Number(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const resultado = document.getElementById("resultado");

    if (!valor) {
        resultado.textContent = "Por favor, insira um valor.";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`);
        const data = await response.json();
        const taxaCambio = data.rates[moedaDestino];
        
        if (taxaCambio) {
            const valorConvertido = valor * taxaCambio;
            resultado.innerHTML = `Resultado: <span>${valorConvertido.toFixed(2)}</span> ${moedaDestino}`;
        } 
        
        else {
            resultado.textContent = "Moedas não suportadas.";
        }

        } catch (error) {
        console.error("Erro ao buscar taxas de câmbio:", error);
        resultado.textContent = "Erro ao converter. Tente novamente.";
    }
}

function trocarMoedas() {
    const moedaOrigem = document.getElementById("moedaOrigem");
    const moedaDestino = document.getElementById("moedaDestino");

    const temp = moedaOrigem.value;
    moedaOrigem.value = moedaDestino.value;
    moedaDestino.value = temp;
}