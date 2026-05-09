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
    const fileType = detectedType(file.name, content);

    // ----------- Validador do XML ------------ //

    if (fileType === 'XML') {
        const result = validateXmlWellFormed(content);

        if (!result.ok) {
            setStatusError(`XML malformado\nMotivo : ${result.errorMessage}`);
            output.textContent = content; // Exibe o conteúdo mesmo que o XML esteja malformado
            return;             
        } 

        const semanticErrors = validateSemanticRules(content);

        if (semanticErrors.length > 0) {
            setStatusError(semanticErrors.join('\n'));
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

        return 'UNKNOWN';
    }

    function validateXmlWellFormed(xmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'application/xml');
        const parserError = doc.querySelector('parsererror');

        if (!parserError) {
            return { ok: true };
        }

        return {
            ok: false,
            errorMessage: parserError.textContent.replace(/\s+/g, ' ').trim()
        };
    }

    function setStatusOk(msg) {
        statusBox.textContent = msg;
        statusBox.className = 'status status-ok';
    }

    function setStatusError(msg) {
        statusBox.textContent = msg;
        statusBox.className = 'status status-error';
    }


    // ------------------------------ VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS (XML) ------------------------------ //
        
    const fieldRules = {
        dhEmi: { required: true, type: 'date' },
        nNF: { required: true, type: 'number' },
        serie: { required: true, type: 'number' },
        tpNF: { required: true, type: 'number' },

        CNPJ: { required: true, pattern: /^\d{14}$/ },

        xNome: { required: true },

        vNF: { required: true, type: 'decimal' }
    };

    // ------------------------------ VALIDADORES DE TIPO ------------------------------ //

    function isValidDate(v) {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(v);
    }

    function isNumber(v) {
        return !isNaN(v);
    }

    function isDecimal(v) {
        return /^\d+(\.\d+)?$/.test(v);
    }

    function isCnpj(v) {
        return /^\d{14}$/.test(v);
    }

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

    // ------------------------------ REGRAS SEMÂNTICAS (XML) ------------------------------ //

    function validateSemanticRules(xmlText) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const namespace = xmlDoc.documentElement.namespaceURI;

        const errors = [];

        for (const [tag, rules] of Object.entries(fieldRules)) {
            const element = xmlDoc.getElementsByTagNameNS(namespace, tag)[0];

            if (rules.required && !element) {
                errors.push(`Rejeição: campo <${tag}> obrigatório não informado`);
                continue;
            }

            if (!element) continue; // Se o campo não é obrigatório e não existe, pula para o próximo

            const value = element.textContent.trim();
            if (!value) {
                errors.push(`Rejeição: campo <${tag}> está vazio!`);
                continue;
            }
        }

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