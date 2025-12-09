//tentar simplificar se possivel
const estados = {
    "AC": {
        nome: "Acre",
        resumo: "Acre é um estado no noroeste do Brasil, na Floresta Amazónica. É conhecido pela quantidade de árvores-da-borracha e castanhas-do-brasil. Na fronteira peruana, a oeste, o Parque Nacional da Serra do Divisor possui montanhas elevadas e várias quedas de água, além de diversas espécies animais, como tatus-gigantes, tapires e aves raras. A sudeste, encontra-se Rio Branco, a capital do estado, nas margens do rio Acre ",
        imagem: "https://agencia.ac.gov.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-01-06-at-09.15.29-1-C%C3%B3pia-1200x673.jpeg"
    },
    "AL": {
        nome: "Alagoas",
        resumo: "Alagoas é um pequeno estado do nordeste brasileiro cujo litoral tropical é marcado por praias de areia branca repletas de palmeiras, lagoas cristalinas e recifes de corais. Em Maceió, sua capital, estão localizadas as famosas praias Pajuçara e Ponta Verde, com hotéis, bares e restaurantes. Os recifes de corais decoram o litoral ao norte de Maceió que, por isso, tem o apelido de Costa dos Corais. ",
        imagem: "https://aerotur.com.br/wp-content/uploads/alagoas.jpg"
    },
    "AP": {
        nome: "Amapá",
        resumo: "Amapá é um estado no norte do Brasil que faz fronteira com o Suriname, a Guiana Francesa e o Oceano Atlântico. A floresta amazónica abrange uma grande parte da sua área e o rio Oiapoque faz parte da sua fronteira a norte. No sul, a capital, Macapá, é conhecida pela Fortaleza de São José de Macapá, situada à beira-mar, um forte português do século XVIII, e pelo Monumento do Marco Zero, um obelisco que marca o equador.",
        imagem: "https://s2-g1.glbimg.com/-w3gOjFyDguIEyHz0XBS5AN5Heo=/0x0:1600x900/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/A/B/35WdI8S8G8aLrJWglfrw/whatsapp-image-2022-02-03-at-19.48.55.jpeg"
    },
    "AM": {
        nome: "Amazonas",
        resumo: "Amazonas é um enorme estado no noroeste do Brasil, coberto quase na sua totalidade pela floresta tropical da Amazónia. A capital, Manaus, é um porto fluvial com pontos de referência que datam do ciclo da borracha de finais do século XIX, incluindo o Teatro Amazonas, uma grande casa de ópera. A cidade marca o Encontro das Águas, onde o rio Negro, de água negra, e o rio Solimões se juntam para formar o rio Amazonas.",
        imagem: "https://media.istockphoto.com/id/935746242/pt/foto/mata-atlantica-atlantic-forest-in-brazil.jpg?s=612x612&w=0&k=20&c=XoiwWlcQ9odpWvNrpAeq1ZM3fXEFqVbARaMo-uD9LYA="
    },
    "BA": {
        nome: "Bahia",
        resumo: "A Bahia é um estado do nordeste brasileiro com paisagens que variam da costa tropical até a aridez do Sertão. A capital, Salvador, é conhecida por seu centro histórico, o Pelourinho, com uma rica arquitetura colonial do século XVII e assentado sobre a Baía de Todos-os-Santos. O Carnaval da cidade reúne foliões fantasiados que dançam ao som do samba e do axé em uma enorme festa de rua.",
        imagem: "https://magazine.zarpo.com.br/wp-content/uploads/2017/05/cidades-da-bahia-das-charmosas-as-paradisiacas-770x500.jpg"
    },
    "CE": {
        nome: "Ceará",
        resumo: "O Ceará, um estado do nordeste brasileiro, tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. O balneário de Canoa Quebrada tem enormes dunas de areia rosadas e a Rua Dragão do Mar, muito movimentada e também conhecida como Broadway. A cidade isolada de Jericoacoara, cercada pelo Parque Nacional de Jericoacoara, repleto de dunas, é famosa por suas ruas de areia, pela prática de windsurfe e pelo pôr do sol incomum em tons de verde.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkkeFawwxws_p9ZV7vP2b69ttnLq35xdW_g&s"
    },
    "DF": {
        nome: "Distrito Federal",
        resumo: "O Distrito Federal situa-se nas montanhas centrais do Brasil e alberga a capital da nação, Brasília, cidade moderna e planeada para o efeito. A cidade tem edifícios futuristas concebidos pelo célebre arquiteto brasileiro, Oscar Niemeyer. Estes incluem a Catedral de Brasília, que é curva e tem telhados de vidro. O Palácio Itamaraty de Niemeyer é conhecido pelos arcos, o espelho de água e os jardins tropicais.",
        imagem: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2025/08/o-que-fazer-em-brasilia-capa.jpg"
    },
    "ES": {
        nome: "Espírito Santo",
        resumo: "O Espírito Santo, estado da região Sudeste do Brasil, é conhecido por suas praias tropicais e áreas naturais montanhosas preservadas. Fundada em 1551, Vitória, capital e cidade portuária, tem um pequeno centro da era colonial. Do outro lado da estreita baía de Vitória, fica Vila Velha, com a movimentada Praia da Costa e o Convento da Penha, construção do século XVI que fica no alto de um penhasco e oferece uma vista panorâmica.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7erv_SOl-wNQK61GVMRQjfOzN7Byih4J7Q&s"
    },
    "GO": {
        nome: "Goiás",
        resumo: "Goiás, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros é uma reserva de montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas de água. Fundadas durante o século XVIII, as cidades do ciclo de ouro de Pirenópolis e Goiás Velho (antiga capital do estado)",
        imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/08/63/3e/cachoeira-santa-barbara.jpg?w=500&h=-1&s=1"
    },

    //ainda falta atualizar a imagem:

    "MA": {
        nome: "Maranhão",
        resumo: "Maranhão, estado no nordeste brasileiro, é formado em parte pela Floresta Amazônica e pelas praias ao longo do Oceano Atlântico. Próximo à cidade de Barreirinhas, grandes dunas de areia branca criam paisagens que lembram um deserto no Parque Nacional Lençóis Maranhenses, onde lagoas de água fresca nas quais se pode nadar se formam durante a temporada de chuvas. É na capital, São Luís, que se encontra o agitado bairro histórico conhecido como Reviver.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sao_Luis_do_Maranhao.jpg/640px-Sao_Luis_do_Maranhao.jpg"
    },
    "MT": {
        nome: "Mato Grosso",
        resumo: "Mato Grosso, um grande estado no centro-oeste brasileiro, é coberto na maioria pela floresta tropical amazónica, as zonas húmidas e as planícies da savana. A capital, Cuiabá, é um centro de viagens que remonta à corrida ao ouro do século XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimarães possui áreas de caminhada com penhascos em arenito, quedas de água e cavernas. As extensas zonas húmidas do Pantanal albergam diversas espécies selvagens, incluindo araras, caimões e jaguares.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cuiaba_Pantanal.jpg/640px-Cuiaba_Pantanal.jpg"
    },
    "MS": {
        nome: "Mato Grosso do Sul é uma das 27 unidades federativas do Brasil. Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo e Paraná; e dois países sul-americanos: Paraguai e Bolívia.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pantanal_Mato_Grosso_do_Sul.jpg/640px-Pantanal_Mato_Grosso_do_Sul.jpg"
    },
    "MG": {
        nome: "Minas Gerais",
        resumo: "Minas Gerais, um grande estado continental no sudeste do Brasil, é conhecido por cidades da era colonial que remetem à corrida do ouro no país no século 18. Entre elas estão São João del Rei, Tiradentes e Ouro Preto, a antiga capital, todas com ruas de paralelepípedo, mansões ornamentadas e igrejas barrocas decoradas pelo escultor Aleijadinho.O famoso trem a vapor Maria Fumaça liga Tiradentes a São João del Rei.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ouro_Preto_Minas.jpg/640px-Ouro_Preto_Minas.jpg"
    },
    "PA": {
        nome: "Pará",
        resumo: "Pará, um estado no norte do Brasil, é onde se encontra o Parque Nacional da Amazônia. Protegendo uma extensa faixa da exuberante e densa Floresta Amazônica, o parque é lar de milhares de espécies da vida selvagem. Boa parte dela é alagada todos os anos, tornando o acesso a áreas distantes somente por barco. Próxima da desembocadura do Rio Amazonas está Belém, a capital do Pará. Ela é conhecida pela arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Belem_Para.jpg/640px-Belem_Para.jpg"
    },
    "PB": {
        nome: "Paraíba",
        resumo: "Paraíba, um estado no nordeste do Brasil, é conhecido pela linha da costa tropical e pela arquitetura colonial portuguesa. A capital, João Pessoa, possui praias como a Manaíra e Tambaú, além de locais de mergulho repletos de corais ao largo da costa. Junto ao rio Paraíba, o centro histórico da cidade possui casas coloridas e a igreja de São Francisco, com uma arquitetura barroca. A Ponta do Seixas, com o farol Cabo Branco nas proximidades, marca o ponto mais a leste das Américas.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Joao_Pessoa_Paraiba.jpg/640px-Joao_Pessoa_Paraiba.jpg"
    },
    "PR": {
        nome: "Paraná",
        resumo: "Paraná é um estado no sul do Brasil que alberga as Cataratas do Iguaçu, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Iguaçu, uma floresta subtropical com diversas espécies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quilómetros a este, perto das praias atlânticas de Guaratuba e do grande porto de Paranaguá, fica a frondosa capital do estado, Curitiba.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Iguazu_Falls_Brazil.jpg/640px-Iguazu_Falls_Brazil.jpg"
    },
    "PE": {
        nome: "Pernambuco",
        resumo: "Pernambuco é um estado no nordeste do Brasil, no Oceano Atlântico. A sua capital moderna, o Recife, inclui um porto, a cidade velha e a popular área balnear de Boa Viagem. Ao largo da costa, o arquipélago vulcânico de Fernando de Noronha possui uma linha costeira dentada, praias poucos urbanizadas e um parque marítimo. A sul do Recife, a praia de Porto de Galinhas, protegida por um recife, oferece piscinas naturais. A norte encontra-se Olinda, uma cidade colonial situada entre uma vegetação exuberante.",
        imagem: "https://cdn.pixabay.com/photo/2017/01/27/20/14/recife-2014127_1280.jpg"
    },
    "PI": {
        nome: "Piauí",
        resumo: "Piauí é um estado no nordeste do Brasil conhecido pelos parques nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui sítios arqueológicos com pinturas rupestres pré-históricas. Nas proximidades, o Parque Nacional Serra das Confusões tem gigantescas formações rochosas e grandes áreas de caatinga (vegetação semiárida), onde vivem aves em risco de extinção. As mangueiras ladeiam as ruas da capital à beira-rio, Teresina.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Teresina_Piaui.jpg/640px-Teresina_Piaui.jpg"
    },
    "RJ": {
        nome: "Rio de Janeiro",
        resumo: "O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Rio_de_Janeiro_Corcovado.jpg/640px-Rio_de_Janeiro_Corcovado.jpg"
    },
    "RN": {
        nome: "Rio Grande do Norte",
        resumo: "Rio Grande do Norte é um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte português do século XVI. Ponta Negra é uma praia enquadrada pela enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia de Pipa é uma estância célebre pelo surf e pelos golfinhos. ",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Natal_Rio_Grande_do_Norte.jpg/640px-Natal_Rio_Grande_do_Norte.jpg"
    },
    "RS": {
        nome: "Rio Grande do Sul",
        resumo: "Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha alberga a região vinícola do Vale dos Vinhedos e inclui cidades turísticas de estilo alemão como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, é um grande porto com estruturas clássicas como o Mercado Público e a Catedral Metropolitana, no centro histórico. ",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Porto_Alegre_Rio_Grande_do_Sul.jpg/640px-Porto_Alegre_Rio_Grande_do_Sul.jpg"
    },
    "RO": {
        nome: "Rondônia",
        resumo: "Rondônia é uma das 27 unidades federativas do Brasil. Está localizado na região Norte e tem como limites os estados de Mato Grosso a leste, Amazonas a norte, Acre a oeste e o Estado Plurinacional da Bolívia a oeste e sul.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hcpTl735y3kOyIn8Blt9t4CENpV-Dc0Njw&s"
    },
    "RR": {
        nome: "Roraima",
        resumo: "Roraima, o estado mais a norte do Brasil, é conhecido pela Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio Branco, fica próxima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan Doyle para 'O Mundo Perdido'.",
        imagem: "https://www.dicasdeviagem.com/wp-content/uploads/2020/03/monte-roraima.jpg"
    },
    "SC": {
        nome: "Santa Catarina",
        resumo: "Santa Catarina é um estado na região sul do Brasil. Com uma longa costa com o Atlântico e muitas ilhas, ela é conhecida por suas praias e montanhas. Florianópolis, a capital, tem um mercado público tradicional com bares, restaurantes e barracas de comida, além de um museu histórico instalado em um palácio do governo colonial do século 19. Florianópolis está basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte. ",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Florianopolis_Santa_Catarina.jpg/640px-Florianopolis_Santa_Catarina.jpg"
    },

    // Já atualizei a imagem:

    "SP": {
        nome: "São Paulo",
        resumo: "Centro industrial e econômico do Brasil, cresceu com o ciclo do café.",
        imagem: "https://t4.ftcdn.net/jpg/02/82/76/59/360_F_282765998_GoksVVY8vae5ITsiBsScRYMDIrwqxYL4.jpg"
    },
    "SE": {
        nome: "Sergipe",
        resumo: "Sergipe, o estado mais pequeno do Brasil, situa-se na costa atlântica da região do nordeste. A capital, Aracaju, é conhecida pelas praias, tal como a Praia da Atalaia, com o seu longo passeio. Fundada em 1590, a antiga capital, São Cristóvão, alberga edifícios da era colonial, incluindo o convento e a Igreja de São Francisco, do século XVII. O Cânion do Xingó, no rio de São Francisco, ladeia um popular lago para passeios de barco. ",
        imagem: "https://m.ahstatic.com/is/image/accorhotels/pontos-turisticos-de-sergipe-2024-2:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=335&hei=223&qlt=80"
    },
    "TO": {
        nome: "Tocantins",
        resumo: "Tocantins é um estado no centro do Brasil. Caracteriza-se pelo cerrado (prado seco e matagais), rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água. ",
        imagem: "https://pit.turismo.to.gov.br/imagens/destinos/16557381881oOFfbwCVZ.jpg"
    } 
}
//copiei e colei as informações que encontrei no google

const inputSigla = document.getElementById("sigla");
const botaoVerificar = document.getElementById("btn-verificar");
const divResultado = document.getElementById("resultado");

function verificarEstado() {
    const sigla = inputSigla.value.trim().toUpperCase();

    if (estados[sigla]) {

        divResultado.classList.remove("animar");
        void divResultado.offsetWidth;

        const info = estados[sigla];
        divResultado.innerHTML = 
        `<h2>${info.nome}</h2>
        <br>
        <img src="${info.imagem}" alt="${info.nome}" style="width: 100%; border-radius: 10px; margin-bottom: 15px;">
        <p>${info.resumo}</p>`;
    
        divResultado.classList.add("animar");
    }

    else {
        divResultado.innerHTML = `<p style="color: #9e1d1d;">Estado não encontrado. Verifique a sigla</p>`;
    }//com o innerHTML podemos modificar o HTML em momentos especificos  
}
//essa lista de evento faz com que podemos usar o enter
botaoVerificar.addEventListener("click", verificarEstado);

inputSigla.addEventListener("keypress", function(evento) {
    if (evento.key == "Enter") {
        verificarEstado();
    }
});