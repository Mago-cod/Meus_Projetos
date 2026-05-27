const fileInput = document.getElementById('fileInput'); // Representa todo o campo de upload. Sem isso o JS não consegue saber quando o usuário escolhe o arquivo
const output = document.getElementById('output'); // Vai mostrar o conteúdo do arquivo (Referência ao <pre>)
const meta = document.getElementById('meta'); // Mostra as informações do arquivo (nome, tamanho, tipo) - Referência ao <pre id="meta">
const statusBox = document.getElementById('status'); // Retorna o status da validação

fileInput.addEventListener('change', handleFileSelect); // Registra o evento de selecionar/trocar de arquivo


// ------------------------------ MANIPULAÇÃO DO ARQUIVO ------------------------------ //


async function handleFileSelect() {
    clearUI(); // Limpa a interface para novos arquivos

    const file = fileInput.files?.[0]; // [0] Porque pega o primeiro e único arquivo selecionado. "?" evita erros caso o usuário cancele a seleção ou não escolha nenhum arquivo.
    if (!file) return; // Assegura que a função pare se o usuário abrir o seletor e cancelar

    renderMeta(file);
    const content = await file.text();


    // Validador do TXT (apenas detecção por extensão ou conteúdo, sem validação de regras específicas) //

        if (!file.name.toLowerCase().endsWith('.txt')) {
            setStatusError("Apenas arquivos TXT são suportados.");
            return;
        }

        output.textContent = content; // Exibe o conteúdo do TXT

    const errors = validateTXT(content);

    if (errors.length === 0) {
        setStatusOk("Arquivo TXT válido!");
    } else {
        setStatusError(errors.join('\n'));
    }
}


    function clearUI() {
        meta.textContent = '';
        statusBox.textContent = '';
        statusBox.className = 'status';
        output.textContent = '';
    }

    function renderMeta(file) {
        const sizeKb = (file.size / 1024).toFixed(1);

        meta.textContent =
            `Arquivo: ${file.name}\n` +
            `Tamanho: ${sizeKb} KB\n` +
            `Tipo do navegador (MIME): ${file.type || 'Desconhecido'}`;
    }

    function setStatusOk(msg) {
        statusBox.textContent = msg;
        statusBox.className = 'status status-ok';
    }

    function setStatusError(msg) {
        statusBox.textContent = msg;
        statusBox.className = 'status status-error';
    }


// ------------------------------ VALIDADOR DE REGRAS DO TXT ------------------------------ //

    function validateTXT(content) {
        const linhas = content.split('\n');
        const errors = [];

        linhas.forEach((linha, index) => {
            const numeroLinha = index + 1;

            if (!linha.trim()) {
                errors.push(`Linha ${numeroLinha} está vazia.`);
            }

            if (linha.length < 5) {
                errors.push(`Linha ${numeroLinha} muito curta`);
            }

            const tipo = linha.substring(0, 4);

            if (!/^\d{4}$/.test(tipo)) {
                errors.push(`Linha ${numeroLinha}: tipo de registro inválido (${tipo})`);
            }
        });
        return errors;
    }

    // ------------------------------ MODO CLARO / MODO ESCURO ------------------------------ //

    const toggleButton = document.getElementById('toggleTheme');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        const isDark = document.body.classList.contains('dark');
        toggleButton.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        toggleButton.textContent = '☀️ Modo Claro';
    }