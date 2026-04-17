const fileInput = document.getElementById('fileInput'); // Representa todo o campo de upload. Sem isso o JS não consegue saber quando o usuário escolhe o arquivo
const output = document.getElementById('output'); // Vai mostrar o conteúdo do arquivo (Referência ao <pre>)
const meta = document.getElementById('meta'); // Mostra as informações do arquivo (nome, tamanho, tipo) - Referência ao <pre id="meta">
const statusBox = document.getElementById('status'); // Retorna o status da validação

fileInput.addEventListener('change', handleFileSelect); // Registra o evento de selecionar/trocar de arquivo


// ------------------------------ MANIPULAÇÃO DO ARQUIVO ------------------------------ //


async function handleFileSelect() {
    clearUI(); // Limpa a interface para novos arquivos

    const file = fileInput.files?.[0]; // [0] Porque pega o primeiro e único arquivo selecionado. O "?" evita erros caso o usuário cancele a seleção ou não escolha nenhum arquivo.
    if (!file) return; // Assegura se o usuário abrir o seletor e cancelar, a função pare

    renderMeta(file);
    const content = await file.text();
    const fileType = detectedType(file.name, content);

    // Validador do XML //

    if (fileType === 'XML') {
        const result = validateXmlWellFormed(content);

        if (!result.ok) {
            setStatusError(`XML malformado \nMotivo : ${result.errorMessage}`);
            output.textContent = content; // Exibe o conteúdo mesmo que o XML esteja malformado
            return;             
        } 

        const semanticErrors = validateRequiredFields(content);

        if (semanticErrors.length > 0) {
            setStatusError('Erros de validação:\n' + semanticErrors.join('\n'));
        } else {
            setStatusOk('XML válido (campos obrigatórios presentes e preenchidos)');
        }

        output.textContent = formatXml(content); // Exibe o XML formatado
        return;
    }

    // Validador do TXT (apenas detecção por extensão ou conteúdo, sem validação de regras específicas) //

        if (fileType === 'TXT') {
            setStatusOk("Arquivo TXT detectado (próximo passo: validar layout e regras)");
            output.textContent = content; // Exibe o conteúdo do TXT
            return;
        }

        // Arquivo desconhecido //

        setStatusError('Tipo de arquivo desconhecido. Apenas XML e TXT são suportados.');

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

    function detectedType(fileName, content) {
        const lower = fileName.toLowerCase();
        if (lower.endsWith('.xml')) return 'XML';
        if (lower.endsWith('.txt')) return 'TXT';

        const trimmed = content.trimStart();
        if (trimmed.startsWith('<?xml') || trimmed.startsWith('<')) return 'XML';

        return 'TXT';
    }

    function validateXmlWellFormed(xmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'application/xml');

        const parserError = doc.querySelector('parsererror');

        if (!parserError) {
            return { ok: true };
        }

        const errorMessage = parserError.textContent
        .replace(/\s+/g, ' ')
        .trim();

        return { ok: false, errorMessage };
    }

    function setStatusOk(message) {
        statusBox.classList.add('status-ok');
        statusBox.textContent = message;
    }

    function setStatusError(message) {
        statusBox.classList.add('status-error');
        statusBox.textContent = message;
    }

    // ------------------------------ IDENTAÇÃO DO XML ------------------------------ //

    function formatXml(xml) {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, 'application/xml');

            const serializer = new XMLSerializer();
            let formatted = serializer.serializeToString(xmlDoc);

            formatted = formatted
                .replace(/(>)(<)(\/*)/g, '$1\n$2$3')
                .replace(/\n\s*\n/g, '\n');

            let pad = 0;
            return formatted.split('\n').map(line => {
                let indent = 0;

                if (line.match(/.+<\/\w[^>]*>$/)) {
                    indent = 0;
                } else if (line.match(/^<\/\w/)) {
                    pad--;
                } else if (line.match(/^<\w([^>]*[^/])?>.*$/)) {
                    indent = 1;
                }

                const padding = '  '.repeat(pad);
                pad += indent;

                return padding + line;
            }).join('\n');
        } catch {
            return xml; // Se o XML for malformado, retorna o texto original sem formatação
        }
                
    }

    // ------------------------------ VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS (XML) ------------------------------ //
        
    const requiredFields = [
        'dataEmissao',
        'numero',
        'valor',
        'cnpjEmitente',
        'cnpjDestinatario',
        'descricaoProduto',
        'quantidade',
        'valorUnitario'
    ];

    function validateRequiredFields(xmlText) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

        const errors = [];
        const nameSpace = xmlDoc.documentElement.nameSpaceURI;

        requiredFields.forEach(tag => {
            const element = xmlDoc.getElementsByTagName(tag)[0];

            if (!element) {
                errors.push(`Campo <${tag}> não encontrado.`);
                return;
            }

            if (!element.textContent.trim()) {
                errors.push(`Campo <${tag}> está vazio.`);
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