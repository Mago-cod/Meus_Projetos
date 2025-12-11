const estados = {
    "AC": {
        nome: "Acre",
        resumo: "O Acre foi incorporado ao Brasil no início do século XX após disputas com a Bolívia. Hoje é conhecido por sua floresta amazônica e cultura ligada aos povos tradicionais.",
        imagem: "https://agencia.ac.gov.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-01-06-at-09.15.29-1-C%C3%B3pia-1200x673.jpeg"
    },
    "AL": {
        nome: "Alagoas",
        resumo: "Alagoas tem forte herança cultural ligada ao período colonial, com economia baseada historicamente na cana-de-açúcar.",
        imagem: "https://aerotur.com.br/wp-content/uploads/alagoas.jpg"
    },
    "AP": {
        nome: "Amapá",
        resumo: "Localizado no extremo norte, o Amapá é marcado pela influência indígena e pela Linha do Equador.",
        imagem: "https://s2-g1.glbimg.com/-w3gOjFyDguIEyHz0XBS5AN5Heo=/0x0:1600x900/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/A/B/35WdI8S8G8aLrJWglfrw/whatsapp-image-2022-02-03-at-19.48.55.jpeg"
    },
    "AM": {
        nome: "Amazonas",
        resumo: "O Amazonas abriga a maior floresta tropical do mundo e o poderoso rio Amazonas.",
        imagem: "https://media.istockphoto.com/id/935746242/pt/foto/mata-atlantica-atlantic-forest-in-brazil.jpg?s=612x612&w=0&k=20&c=XoiwWlcQ9odpWvNrpAeq1ZM3fXEFqVbARaMo-uD9LYA="
    },
    "BA": {
        nome: "Bahia",
        resumo: "Berço de grande parte da cultura brasileira, Salvador foi a primeira capital do Brasil.",
        imagem: "https://magazine.zarpo.com.br/wp-content/uploads/2017/05/cidades-da-bahia-das-charmosas-as-paradisiacas-770x500.jpg"
    },
    "CE": {
        nome: "Ceará",
        resumo: "O Ceará tem forte identidade cultural e é famoso por suas praias mundialmente conhecidas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkkeFawwxws_p9ZV7vP2b69ttnLq35xdW_g&s"
    },
    "DF": {
        nome: "Distrito Federal",
        resumo: "Brasília foi planejada por Lúcio Costa e Oscar Niemeyer e se tornou a capital do país em 1960.",
        imagem: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2025/08/o-que-fazer-em-brasilia-capa.jpg"
    },
    "ES": {
        nome: "Espírito Santo",
        resumo: "Desenvolveu-se com a imigração europeia e é conhecido por sua culinária e praias.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7erv_SOl-wNQK61GVMRQjfOzN7Byih4J7Q&s"
    },
    "GO": {
        nome: "Goiás",
        resumo: "Goiás tem raízes no ciclo do ouro e é um polo do agronegócio.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsyIAi4AGkehj753BIJZ47h6lRtHCEx4D4A&s"
    },

    "MA": {
        nome: "Maranhão",
        resumo: "O Maranhão mistura influências indígenas, africanas e portuguesas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Mj2aJzJ6fJw8Tw8xp5AVi_tpzBsahfzXcA&s"
    },
    "MT": {
        nome: "Mato Grosso",
        resumo: "Marco da expansão do agronegócio e reduto do Pantanal e Amazônia.",
        imagem: "https://blog.123milhas.com/wp-content/uploads/2022/04/conheca-estado-mato-grosso-cuiaba-conexao123.jpg"
    },
    "MS": {
        nome: "Mato Grosso do Sul",
        resumo: "Conhecido pelo Pantanal e forte presença indígena.",
        imagem: "https://blog.123milhas.com/wp-content/uploads/2022/07/estado-do-mato-grosso-do-sul-parque-em-campo-grande-conexao123.jpg"
    },
    "MG": {
        nome: "Minas Gerais",
        resumo: "Centro do Ciclo do Ouro e famoso por suas cidades históricas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbphGPRbp-tRcmls2WP2xjI9h1aAwE3Fngqg&s"
    },
    "PA": {
        nome: "Pará",
        resumo: "Coração da Amazônia, cultura rica e culinária única.",
        imagem: "https://revistazunai.com.br/wp-content/uploads/2019/03/estado-do-para-1024x590.jpg"
    },
    "PB": {
        nome: "Paraíba",
        resumo: "Uma das capitais mais antigas e dona do ponto mais oriental das Américas.",
        imagem: "https://blog.123milhas.com/wp-content/uploads/2022/07/conheca-o-estado-da-paraiba-historia-turismo-conexao123.jpg"
    },
    "PR": {
        nome: "Paraná",
        resumo: "Recebeu grande imigração europeia e abriga as Cataratas do Iguaçu.",
        imagem: "https://blog.123milhas.com/wp-content/uploads/2022/06/conheca-o-estado-do-parana-historia-cultura-e-mais-ilha-do-mel-conexao123-1.jpeg"
    },
    "PE": {
        nome: "Pernambuco",
        resumo: "Importante centro colonial e cultural do Nordeste.",
        imagem: "https://cdn.pixabay.com/photo/2017/01/27/20/14/recife-2014127_1280.jpg"
    },
    "PI": {
        nome: "Piauí",
        resumo: "Economia ligada à pecuária e forte influência indígena.",
        imagem: "https://jcconcursos.com.br/media/_versions/noticia/piaui-teresina_widelg.jpg   "
    },
    "RJ": {
        nome: "Rio de Janeiro",
        resumo: "Famoso mundialmente por suas praias, cultura e história.",
        imagem: "https://s5.static.brasilescola.uol.com.br/be/2021/05/cristo-redentor.jpg"
    },
    "RN": {
        nome: "Rio Grande do Norte",
        resumo: "Conhecido pelo litoral paradisíaco e importância histórica.",
        imagem: ""
    },
    "RS": {
        nome: "Rio Grande do Sul",
        resumo: "Cultura gaúcha forte e rica história política.",
        imagem: "https://s2-g1.glbimg.com/HKdQ9lHWeIHzoVCMi6d-JQ-Yn-I=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/o/H/5g4oQMTwCSjjX7Abq0KA/assecom-rn.jpg"
    },
    "RO": {
        nome: "Rondônia",
        resumo: "Colonização recente e economia ligada à agricultura e pecuária.",
        imagem: "https://rondonia.ro.gov.br/wp-content/uploads/2022/04/PRM-Fotos-Frank-Nery-3-870x580.jpg"
    },
    "RR": {
        nome: "Roraima",
        resumo: "Território com vasta presença indígena e paisagens únicas.",
        imagem: "https://imagens.portalzuk.com.br/blog/635/633505c2c5943.jpg"
    },
    "SC": {
        nome: "Santa Catarina",
        resumo: "Influência alemã e italiana e praias famosas.",
        imagem: "https://www.sef.sc.gov.br/arquivos/pfdbgmnczo.jpg"
    },

    "SP": {
        nome: "São Paulo",
        resumo: "Centro industrial e econômico do Brasil, cresceu com o ciclo do café.",
        imagem: "https://t4.ftcdn.net/jpg/02/82/76/59/360_F_282765998_GoksVVY8vae5ITsiBsScRYMDIrwqxYL4.jpg"
    },
    "SE": {
        nome: "Sergipe",
        resumo: "Menor estado brasileiro, rico em cultura e história.",
        imagem: "https://m.ahstatic.com/is/image/accorhotels/pontos-turisticos-de-sergipe-2024-2:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=335&hei=223&qlt=80"
    },
    "TO": {
        nome: "Tocantins",
        resumo: "Estado mais novo do Brasil, capital planejada.",
        imagem: "https://pit.turismo.to.gov.br/imagens/destinos/16557381881oOFfbwCVZ.jpg"
    } 
}

const inputSigla = document.getElementById("sigla");
const botaoVerificar = document.getElementById("btn-verificar");
const divResultado = document.getElementById("resultado");

// Função que cria o card

function criarCardEstado(info) {
    return `
    <h2>${info.nome}</h2>
    <img class="imagem-estado" src="${info.imagem}" alt="${info.nome}">
    <p>${info.resumo}</p>
    `;
}

// Funcão que mostra mensagem de erro

function mostraErro(msg) {
    divResultado.innerHTML = `<p style="color:#ffbaba; font-weight:600;">${msg}</p>`;
    divResultado.classList.add("animar");
}

function verificarEstado() {
    const sigla = inputSigla.value.trim().toUpperCase();

    divResultado.classList.remove("animar");

    if (!sigla) {
        mostraErro("Digite uma sigla para continuar.");
        return;
    }

    if (!/^[A-Za-z]{2}$/.test(sigla)) {
        mostraErro("Digite apenas duas letras (A-Z).");
        return;
    }

    const info = estados[sigla];
    if (!info) {
        mostraErro("Estado não encontrado. Verifique a sigla.");
        return;
    }

    divResultado.innerHTML = criarCardEstado(info);

    requestAnimationFrame(() => {
        divResultado.classList.add("animar")
    });

}

botaoVerificar.addEventListener("click", verificarEstado);

inputSigla.addEventListener("keypress", function(evento) {
    if (evento.key == "Enter") {
        verificarEstado();
    }
});

inputSigla.addEventListener("input", () => {
    inputSigla.value = inputSigla.value.toUpperCase().replace(/[^A-Za-z]/g, "")
});