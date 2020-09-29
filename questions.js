var questions = [
    {
        id: 1,
        title: 'Para responder as questões a seguir, use a escala fornecida abaixo, pensando na sua percepção em relação ao COVID-19.',
        description: 'A gripe sazonal é tão perigosa quanto o coronavírus.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 2,
        description: 'Você só pode espalhar o coronavírus se estiver doente.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 3,
        description: 'O coronavírus não sobrevive em plástico ou aço por mais de alguns minutos.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 4,
        description: 'Os sintomas do coronavírus têm vida curta.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 5,
        description: 'O clima quente impede efetivamente a propagação do coronavírus.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 6,
        description: 'Você pode dizer quase imediatamente (dentro de um dia) se você contraiu o coronavírus.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 7,
        description: 'O vírus é relativamente grande, então qualquer tipo de máscara pode filtrá-lo.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 8,
        description: 'O coronavírus permanece vivo na sua mão por cerca de 5 a 10 minutos.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 9,
        description: 'O coronavírus não é transportado pelo ar.',
        options: '1-7',
        type: 'otimista'
    },
    {
        id: 10,
        description: 'Cães e gatos podem contrair e espalhar o coronavírus.',
        options: '1-7',
        type: 'pessimista'
    },
    {
        id: 11,
        description: 'A grande maioria das pessoas que contraem o coronavírus precisará ser hospitalizada.',
        options: '1-7',
        type: 'pessimista'
    },
    {
        id: 12,
        description: 'O coronavírus mata a maioria das pessoas que o contraem.',
        options: '1-7',
        type: 'pessimista'
    },
    {
        id: 13,
        description: 'A maioria das pessoas provavelmente entrará em contato com o coronavírus simplesmente saindo de casa e dando uma volta.',
        options: '1-7',
        type: 'pessimista'
    },
    {
        id: 14,
        description: 'A vitamina C pode curar o coronavírus.',
        options: '1-7',
        type: 'mistico'
    },
    {
        id: 15,
        description: 'Prender a respiração por 10 segundos sem desconforto é uma maneira eficaz de testar se você tem coronavírus.',
        options: '1-7',
        type: 'mistico'
    },
    {
        id: 16,
        description: 'A hidroxicloroquina mostrou-se um medicamento eficaz no tratamento do coronavírus.',
        options: '1-7',
        type: 'mistico'
    },
    {
        id: 17,
        description: 'Ivermectina ajuda na prevenção ou cura do coronavírus.',
        options: '1-7',
        type: 'mistico'
    },
    {
        id: 18,
        description: 'O gargarejo com água morna e sal ou vinagre, elimina o coronavírus.',
        options: '1-7',
        type: 'mistico'
    },
    {
        id: 19,
        description: 'O coronavírus foi criado em um laboratório.',
        options: '1-7',
        type: 'conspiratoria'
    },
    {
        id: 20,
        description: 'O coronavírus foi criado para ser uma arma biológica.',
        options: '1-7',
        type: 'conspiratoria'
    },
    {
        id: 21,
        description: 'Uma cura para o coronavírus já foi descoberta, mas está sendo suprimida por pessoas que desejam que a pandemia continue.',
        options: '1-7',
        type: 'conspiratoria'
    },
    {
        id: 22,
        description: 'O coronavírus é provavelmente uma farsa.',
        options: '1-7',
        type: 'conspiratoria'
    },
    {
        id: 23,
        description: 'As ondas eletromagnéticas da tecnologia do 5G enfraquecem a imunidade e aumentam o risco de contrair o coronavírus.',
        options: '1-7',
        type: 'conspiratoria'
    }, 
    {
        id: 24,
        description: 'O coronavírus foi inventado para esconder os perigos do 5G.',
        options: '1-7',
        type: 'conspiratoria'
    },
    {
        id: 25,
        description: 'A vacina está sendo desenvolvida para o COVID-19 com o objetivo de injetar microchips nas pessoas.',
        options: '1-7',
        type: 'conspiratoria'
    }
];

var questions_risk = [
    {
        id: 101,
        title: 'Para responder às questões a seguir, use a escala fornecida abaixo, pensando nos receios/riscos que você sente(iu) em sua experiência durante a pandemia.',
        description: 'Qual é a probabilidade de você ficar infectado com o COVID-19 nas próximas semanas?',
        options: '1-7',
        type: 'risco_pessoal'
    },
    {
        id: 102,
        description: 'Qual a probabilidade de você ser infectado pelo COVID-19 nos próximos meses?',
        options: '1-7',
        type: 'risco_pessoal'
    },
    {
        id: 103,
        description: 'Qual é a probabilidade de você conhecer alguém que será infectado pelo COVID-19 nas próximas semanas? ',
        options: '1-7',
        type: 'risco_outro'
    },
    {
        id: 104,
        description: 'Qual a probabilidade de você conhecer alguém que será infectado pelo COVID-19 nos próximos meses?',
        options: '1-7',
        type: 'risco_outro'
    },
    {
        id: 105,
        description: 'O COVID-19 representa um grande risco à saúde da minha comunidade.',
        options: '1-7',
        type: 'risco_social'
    },
    {
        id: 106,
        description: 'O COVID-19 representa um grande risco à saúde do meu estado.',
        options: '1-7',
        type: 'risco_social'
    },
    {
        id: 107,
        description: 'O COVID-19 representa um grande risco à saúde dos brasileiros.',
        options: '1-7',
        type: 'risco_social'
    }
];

var questions_crenças= [    
    {
        id: 201,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinião, indicando seu grau de concordância com elas. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela',
        description: 'Tenho acompanhado de perto as notícias relacionadas ao COVID-19.',
        options: '1-7',
        type: 'autoconhecimento'
    },
    {
        id: 202,
        description: 'Estou bem informado sobre a questão do COVID-19.',
        options: '1-7',
        type: 'autoconhecimento'
    },
    {
        id: 203,
        description: 'A mídia tem sido precisa na cobertura do COVID-19.',
        options: '1-7',
        type: 'midia'
    },
    {
        id: 204,
        description: 'A mídia exagerou a severidade do COVID-l9 [pontuação inversa].',
        options: '1-7',
        type: 'midia'
    },
    {
        id: 205,
        description: 'A mídia exagerou no COVID-19 para confrontar o presidente Jair Bolsonaro.',
        options: '1-7',
        type: 'midia'
    },
    {
        id: 206,
        description: 'Confio na maneira como a mídia cobriu a história do COVID-19.',
        options: '1-7',
        type: 'midia'
    },
    {
        id: 207,
        description: 'A ciência nos fornece uma melhor compreensão do universo do que a religião. ',
        options: '1-7',
        type: 'ciencia'
    },
    {
        id: 208,
        description: 'O método científico é o melhor caminho confiável para o conhecimento.',
        options: '1-7',
        type: 'ciencia'
    },
    {
        id: 209,
        description: 'O real conhecimento que podemos ter é o conhecimento científico. ',
        options: '1-7',
        type: 'ciencia'
    },
    {
        id: 210,
        description: 'A ciência é a parte mais valiosa da cultura humana.',
        options: '1-7',
        type: 'ciencia'
    },
    {
        id: 211,
        description: 'A ciência é o meio mais eficiente de alcançar a cura para o COVID-19.',
        options: '1-7',
        type: 'ciencia'
    },
    {
        id: 212,
        description: 'Evitei intencionalmente qualquer forma de aglomeração social devido ao COVID-19. ',
        options: '1-7',
        type: 'distanciamento'
    },   
    {
        id: 213,
        description: 'Em geral, segui as diretrizes do governo relacionadas ao distanciamento social. ',
        options: '1-7',
        type: 'distanciamento'
    },   
    {
        id: 214,
        description: 'Eu mantenho uma distância de 1,5m de outras pessoas fora da minha família imediata por causa do COVID-19.',
        options: '1-7',
        type: 'distanciamento'
    },   
    {
        id: 215,
        description: 'O distanciamento social é uma medida eficiente para o controle do COVID-19. ',
        options: '1-7',
        type: 'distanciamento'
     }    
];  
    
    
var demograficas= [    
    {
        id: 301,
        title: 'As questões a seguir tratam do seu perfil pessoal. Sinta-se à vontade para responder, lembrando que seus dados serão tratados de forma confidencial de forma a preservar sua privacidade e o sigilo das informações disponibilizadas.',
        description: 'Sexo:',
        options: 'list',
        list: ['Masculino','Feminino','Outro'],
        type: 'perfil_respondente'
    },
    {
        id: 302,
        description: 'Idade:',
        options: 'list',
        list: ['Entre 20 e 29 anos','Entre 30 e 39 anos','Entre 40 e 49 anos','Entre 50 e 59 anos','Acima de 60 anos'],
        type: 'perfil_respondente'
    },
    {
        id: 303,
        description: 'Renda Familiar Bruta Mensal (incluindo todas as fontes de renda, tais como: salários, comissões, aluguéis, outros)',
        options: 'list',
        list: ['até R$ 1.874,00','R$ 1.874,01 a R$ 3.748,00','R$ 3.748,01 a R$ 9.370,00','R$ 9.370,01 a R$ 18.740,00','Acima de R$ 18.740,00'],
        type: 'perfil_respondente'
    },  
    {
        id: 304,
        description: 'Qual o tamanho da população onde você mora?',
        options: 'list',
        list: ['mais de 10 M habitantes','5.1 M – 10 M habitantes','1.1 M  - 5 M habitantes','menos de 1 M habitantes'],
        type: 'perfil_respondente'
    },  
    {
        id: 305,
        description: 'Qual é o seu nível de escolaridade?',
        options: 'list',
        list: ['sem educação formal','até o ensino médio','ensino superior','pós-graduação'],
        type: 'perfil_respondente'
    },  
    {
        id: 306,
        description: 'Em que estado você reside?',
        options: 'list',
        list: ['Capital', 'Interior'],
        type: 'perfil_respondente'
    },  
    {
        id: 307,
        description: 'Quantas pessoas no total moram em sua casa?',
        options: 'list',
        list: ['Uma pessoa / Moro sozinho (a)', 'Duas pessoas', 'Três pessoas','Quatro pessoas', 'Cinco ou mais pessoas'],
        type: 'perfil_respondente'
     },     
     {
        id: 308,
        description: 'Quais tipos de mídias sociais você utiliza?',
        options: 'check-list',
        list: ['Twitter', 'Facebook', 'Instagram','Telegram','Wechat', 'WhatsApp', 'Linkedin', 'Nenhuma'],
        type: 'perfil_respondente'
     },     
     {
        id: 309,
        description: 'Quais tipos de mensagens você consideraria compartilhar na mídia social (se alguma)?',
        options: 'check-list',
        list: ['Notícias de esportes', 'Notícias políticas', 'Celebridades','Notícias de negócio (tendências de mercado, oportunidades de emprego)','Ciência e tecnologia', 'Bem-estar e saúde', 'Humor, piadas, memes', 'Outras'],
        type: 'perfil_respondente'
     }, 
     {
        id: 310,
        description: 'Com que frequência você verifica as mensagens mídias sociais?',
        options: 'check-list',
        list: ['BBC News', 'G1', 'Secom','OMS','CNN', 'TV Senado', 'Google News', 'Outros'],
        type: 'perfil_respondente'
      }, 
];

var autoengano= [    
    {
        id: 401,
        title: 'As questões a seguir tratam de como você se comporta em certas situações. ',
        description: 'Minhas primeiras impressões das pessoas geralmente são certas.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 402,
        description: 'Seria difícil para mim abandonar qualquer um dos meus maus hábitos.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 403,
        description: 'Não quero saber o que as outras pessoas realmente pensam de mim.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 404,
        title: ' ',
        description: 'Não quero saber o que as outras pessoas realmente pensam de mim.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 405,
        description: 'Nem sempre fui honesto comigo mesmo.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 406,
        description: 'Eu sempre sei porque gosto das coisas.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 407,
        description: 'Meus pensamentos são guiados pelas minhas emoções.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 408,
        description: 'Depois de me decidir, outras pessoas raramente me fazem mudar de opinião.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 409,
        description: 'Não sou um motorista cuidadoso quando ultrapasso o limite de velocidade.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 410,
        description: 'Estou totalmente no controle de meu próprio destino.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 411,
        description: 'É difícil para mim desligar de um pensamento perturbador.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 412,
        description: 'Nunca me arrependo de minhas decisões.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 413,
        description: 'Às vezes, perco as coisas porque não consigo me decidir o quanto antes.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 414,
        description: 'A razão pela qual eu voto é porque meu voto pode fazer a diferença.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 415,
        description: 'Meus pais nem sempre eram justos quando me puniam.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 416,
        description: 'Eu sou uma pessoa completamente racional.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 417,
        description: 'Raramente aprecio críticas.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 418,
        description: 'Sou muito confiante quanto aos meus julgamentos.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 419,
        description: 'Às vezes, duvido de minha capacidade como amante.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 420,
        description: 'Não me importo se algumas pessoas não gostam de mim.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 421,
        description: 'Eu nem sempre sei as razões pelas quais faço as coisas que faço.',
        options: '1-7',
        type: 'autoengano'
    },  
    {
        id: 422,
        description: 'Às vezes digo mentiras, se for preciso.',
        options: '1-7',
        type: 'autoengano-im'
    },  
    {
        id: 423,
        description: 'Eu nunca encubro meus erros.',
        options: '1-7',
        type: 'autoengano-im'
    },     
    {
        id: 424,
        description: 'Houve ocasiões em que tirei vantagem de alguém.',
        options: '1-7',
        type: 'autoengano-im'
    },     
    {
        id: 425,
        description: 'Eu nunca falo palavrões',
        options: '1-7',
        type: 'autoengano-im'
    },   
    {
        id: 426,
        description: 'Às vezes, tento me vingar, em vez de perdoar e esquecer.',
        options: '1-7',
        type: 'autoengano-im'
    },   
    {
        id: 427,
        description: 'Eu sempre obedeço às leis, mesmo que seja improvável que seja pego.',
        options: '1-7',
        type: 'autoengano-im'
    },   
    {
        id: 428,
        description: 'Eu disse algo ruim sobre um amigo pelas costas.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 429,
        description: 'Quando ouço pessoas conversando em particular, evito ouvir.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 430,
        description: 'Recebi muitas alterações de um vendedor sem informar a ele.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 431,
        description: 'Eu sempre declaro tudo na alfândega.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 432,
        description: 'Quando eu era jovem, às vezes roubava coisas.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 433,
        description: 'Eu nunca joguei lixo na rua.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 434,
        description: 'Às vezes, dirijo mais rápido que o limite de velocidade.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 435,
        description: 'Nunca leio livros ou revistas sensuais.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 436,
        description: 'Eu fiz coisas que não falo para outras pessoas.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 437,
        description: 'Eu nunca pego coisas que não me pertencem.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 438,
        description: 'Tirei licença médica do trabalho ou da escola, embora não estivesse realmente doente.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 439,
        description: 'Nunca danifiquei um livro da biblioteca ou armazenei mercadorias sem reportá-lo.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 440,
        description: 'Eu tenho hábitos bastante desagradáveis.',
        options: '1-7',
        type: 'autoengano-im'
    }, 
    {
        id: 441,
        description: 'Eu não falo aos outros sobre os assuntos de outras pessoas.',
        options: '1-7',
        type: 'autoengano-im'
    }
];

var autoengano_autora = [
    {
        id: 501,
        title: 'Responda como você se identifica ao se deparar com as mensagens da COVID-19 pela mídia social.',
        description: 'Não vejo o vírus do COVID-19 como um risco para mim.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 502,
        description: 'Eu tento esquecer do impacto do vírus.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 503,
        description: 'Evito acessar fontes de notícias que não me agradam.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 504,
        description: 'Considero as notícias compartilhadas pelos meus grupos sociais como verdadeiras.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 505,
        description: 'Confio nas mensagens comunicadas pela mídia.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 506,
        description: 'Avalio com cautela as informações antes de encaminhá-las, tais como julgamento de fonte segura.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 507,
        description: 'Sinto-me motivada a compartilhar as informações encaminhadas por meus grupos sociais.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 508,
        description: 'Ao ler uma mensagem em minha rede social verifico quantas pessoas reagiram e isto me basta para concluir que a mensagem é verdadeira.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 509,
        description: 'Sinto que tenho conhecimento satisfatório sobre o assunto, com condições intelectuais e autoconfiança em avaliar as mensagens, não havendo a necessidade de verificar outras fontes.',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 510,
        description: 'Sinto que tenho autocontrole, não deixo que as emoções e que outras pessoas influenciem no meu julgamento. ',
        options: '1-7',
        type: 'autoengano-autora'
    },
    {
        id: 511,
        description: 'Na dúvida confio nos meus instintos.',
        options: '1-7',
        type: 'autoengano-autora'
    }
];
    
var cognitiva_CRT = [
    {
        id: 601,
        title: 'Nesta seção você responderá várias questões. Por favor, responda da forma mais precisa possível.',
        description: 'Um taco e uma bola custam R$ 1,10 no total. O taco custa R$ 1,00 a mais do que a bola. Quanto custa a bola?',
        options: 'open',
        type: 'habilidate-cognitiva-crt'
    },
    {
        id: 602,
	description: 'As idades de Marcos e João somam 28 anos no total. Marcos é 10 anos mais velho do que João. Quantos anos tem João?',
        options: 'open',
        type: 'habilidate-cognitiva-crt'
    },
    {
        id: 603,
        description: 'Considerando que 5 impressoras 3D levam 5 minutos para fazer 5 ferramentas, quanto tempo levaria (em minutos) para 100 máquinas para fazer 100 ferramentas?',
        options: 'open',
        type: 'habilidate-cognitiva-crt'
    },
    {
        id: 604,
        description: 'Em um bolo, há um pedaço de bolor. Todos os dias, o pedaço de bolor dobra de tamanho. Se demorar 40 dias para que o bolor cubra todo o bolo, quantos dias seriam necessários para que o remendo cubra metade do bolo?',
        options: 'open',
        type: 'habilidate-cognitiva-crt'
    },
    {
        id: 605,
        description: 'Se você estivesse correndo uma maratona e você ultrapassasse o terceiro lugar, em qual posição da competição você estaria?',
        options: 'open',
        type: 'habilidate-cognitiva-crt'
    },
    {
        id: 606,
        description: 'Um fazendeiro tinha 20 ovelhas, todas exceto 8 morreram. Quantas ovelhas morreram?',
        options: 'open',
        type: 'habilidate-cognitiva-crt'
    },
    {
        id: 607,
        description: 'Você já conhecia alguns dos problemas listados anteriormente?',
        options: 'list',
	list: ['Sim','Não','Talvez'],
        type: 'habilidate-cognitiva-crt'
    }
];
var cognitiva_AOT = [
    {
        id: 701,
        title: 'Nesta seção você responderá algumas questões. Por favor, responda da forma mais precisa possível.',
        description: 'Uma pessoa deve sempre considerar novas possibilidades.',
        options: '1-7',
        type: 'habilidate-cognitiva-aot'
    },
    {
        id: 702,
        description: 'As pessoas devem sempre levar em consideração as evidências que vão contra suas crenças.',
        options: '1-7',
        type: 'habilidate-cognitiva-aot'
    },
    {
        id: 703,
        description: 'É importante persistir em suas crenças, mesmo quando as provas são apresentadas contra elas.',
        options: '1-7',
        type: 'habilidate-cognitiva-aot'
    },
    {
        id: 704,
        description: 'Certas crenças são importantes demais para serem abandonadas, não importa o quão bom possa ser um caso contra elas.',
        options: '1-7',
        type: 'habilidate-cognitiva-aot'
    },
    {
        id: 705,
        description: 'Deve-se desconsiderar as evidências que conflitam com suas crenças estabelecidas.',
        options: '1-7',
        type: 'habilidate-cognitiva-aot'
    },
    {
        id: 706,
        description: 'As crenças devem ser sempre revistas em resposta à novas informações ou evidências.',
        options: '1-7',
        type: 'habilidate-cognitiva-aot'
    },
    {
        id: 707,
        description: 'Ninguém pode me dissuadir de algo que eu sei que está certo.',
        options: '1-7',
	type: 'habilidate-cognitiva-aot'
    },
    {
        id: 708,
        description: 'Acredito que a lealdade aos ideais e princípios de cada um é mais importante do que "a mente aberta"',
        options: '1-7',
	type: 'habilidate-cognitiva-aot'
    }	
];


var lideranca_partidaria = [
    {
        id: 801,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinão, indicando seu grau de concordância com elas. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela.',
        description: 'O Presidente Bolsonaro é uma boa fonte de informação sobre o coronavírus.',
        options: '1-7',
        type: 'lideranca-partidaria'
    },	
    {
        id: 802,
	description: 'O Presidente Bolsonaro está fazendo o possível para prevenir que o coronavírus se espalhe.',
        options: 'open',
        type: 'lideranca-partidaria'
    },
    {
        id: 803,
        description: 'O Brasil é um dos países mais bem preparado em relação à epidemia causada pelo coronavírus.',
        options: 'open',
        type: 'lideranca-partidaria'
    },
    {
        id: 804,
        description: 'A responsabilidade pelo controle e implementação de medidas de prevenção ao COVID-19 é do Governador do estado e não do Presidente Bolsonaro.',
        options: 'open',
        type: 'lideranca-partidaria'
    },
    {
        id: 805,
        description: 'Eu concordo com as medidas desempenhadas pelo governo para conter o alastramento e consequências causadas pelo coronavírus.',
        options: 'open',
        type: 'lideranca-partidaria'
    },
    {
        id: 806,
        description: 'No geral, estou satisfeito com o governo do Presidente Jair Bolsonaro quanto as decisões para o controle da pandemia causada pelo COVID-19.',
        options: 'open',
        type: 'lideranca-partidaria'
    }
];

var vies_confirmacao = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito, indicando seu grau de concordância com elas. Use a escala de avaliação fornecida abaixo.',
        description: 'O Presidente Bolsonaro é uma boa fonte de informação sobre o coronavírus.',
        options: 'list',
	list: ['Sim','Não'],
    },	
	
	


    
