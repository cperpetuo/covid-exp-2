var questions = [
    {
        id: 1,
        title: 'Para responder as questões a seguir, use a escala fornecida abaixo, pensando na sua percepção em relação ao COVID-19.',
        description: 'A gripe sazonal é tão perigosa quanto o coronavírus.',
        options: '1-7',
        category: 'otimista'
    },
    {
        id: 2,
        description: 'Você só pode espalhar o coronavírus se estiver doente.',
        options: '1-7',
        category: 'otimista'
    },
 /*   {
        id: 3,
        description: 'O coronavírus não sobrevive em plástico ou aço por mais de alguns minutos.',
        options: '1-7',
        category: 'otimista'
    },
    {
        id: 4,
        description: 'Os sintomas do coronavírus têm vida curta.',
        options: '1-7',
        category: 'otimista'
    }, */
    {
        id: 5,
        description: 'O clima quente impede efetivamente a propagação do coronavírus.',
        options: '1-7',
        category: 'otimista'
    },
    {
        id: 6,
        description: 'Você pode dizer quase imediatamente (dentro de um dia) se você contraiu o coronavírus.',
        options: '1-7',
        category: 'otimista'
    },
    {
        id: 7,
        description: 'O vírus é relativamente grande, então qualquer tipo de máscara pode filtrá-lo.',
        options: '1-7',
        category: 'otimista'
    },
    {
        id: 8,
        description: 'O coronavírus permanece vivo na sua mão por cerca de 5 a 10 minutos.',
        options: '1-7',
        category: 'otimista'
    },
/*  {
        id: 9,
        description: 'O coronavírus não é transportado pelo ar.',
        options: '1-7',
        category: 'otimista'
    }, */
    {
        id: 10,
        description: 'Cães e gatos podem contrair e espalhar o coronavírus.',
        options: '1-7',
        category: 'pessimista'
    },
    {
        id: 11,
        description: 'A grande maioria das pessoas que contraem o coronavírus precisará ser hospitalizada.',
        options: '1-7',
        category: 'pessimista'
    },
    {
        id: 12,
        description: 'O coronavírus mata a maioria das pessoas que o contraem.',
        options: '1-7',
        category: 'pessimista'
    },
    {
        id: 13,
        description: 'A maioria das pessoas provavelmente entrará em contato com o coronavírus simplesmente saindo de casa e dando uma volta.',
        options: '1-7',
        category: 'pessimista'
    },
    {
        id: 14,
        description: 'A vitamina C pode curar o coronavírus.',
        options: '1-7',
        category: 'mistico'
    },
    {
        id: 15,
        description: 'Prender a respiração por 10 segundos sem desconforto é uma maneira eficaz de testar se você tem coronavírus.',
        options: '1-7',
        category: 'mistico'
    },
    {
        id: 16,
        description: 'A hidroxicloroquina mostrou-se um medicamento eficaz no tratamento do coronavírus.',
        options: '1-7',
        category: 'mistico'
    },
    {
        id: 17,
        description: 'Ivermectina ajuda na prevenção ou cura do coronavírus.',
        options: '1-7',
        category: 'mistico'
    },
    {
        id: 18,
        description: 'O gargarejo com água morna e sal ou vinagre, elimina o coronavírus.',
        options: '1-7',
        category: 'mistico'
    },
    {
        id: 19,
        description: 'O coronavírus foi criado em um laboratório.',
        options: '1-7',
        category: 'conspiratoria'
    },
    {
        id: 20,
        description: 'O coronavírus foi criado para ser uma arma biológica.',
        options: '1-7',
        category: 'conspiratoria'
    },
    {
        id: 21,
        description: 'Uma cura para o coronavírus já foi descoberta, mas está sendo suprimida por pessoas que desejam que a pandemia continue.',
        options: '1-7',
        category: 'conspiratoria'
    },
    {
        id: 22,
        description: 'O coronavírus é provavelmente uma farsa.',
        options: '1-7',
        category: 'conspiratoria'
    },
    {
        id: 23,
        description: 'As ondas eletromagnéticas da tecnologia do 5G enfraquecem a imunidade e aumentam o risco de contrair o coronavírus.',
        options: '1-7',
        category: 'conspiratoria'
    }, 
    {
        id: 24,
        description: 'O coronavírus foi inventado para esconder os perigos do 5G.',
        options: '1-7',
        category: 'conspiratoria'
    },
    {
        id: 25,
        description: 'A vacina está sendo desenvolvida para o COVID-19 com o objetivo de injetar microchips nas pessoas.',
        options: '1-7',
        category: 'conspiratoria'
    }
];

var questions_crencas= [    
    /*{
        id: 201,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinião, indicando seu grau de concordância com elas. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela',
        description: 'Tenho acompanhado de perto as notícias relacionadas ao COVID-19.',
        options: '1-7',
        category: 'autoconhecimento'
    },
    {
        id: 202,
        description: 'Estou bem informado sobre a questão do COVID-19.',
        options: '1-7',
        category: 'autoconhecimento'
    },
    {
        id: 203,
        description: 'A mídia tem sido precisa na cobertura do COVID-19.',
        options: '1-7',
        category: 'midia'
    },
    {
        id: 204,
        description: 'A mídia exagerou a severidade do COVID-l9 [pontuação inversa].',
        options: '1-7',
        category: 'midia'
    },
    {
        id: 205,
        description: 'A mídia exagerou no COVID-19 para confrontar o presidente Jair Bolsonaro.',
        options: '1-7',
        category: 'midia'
    },
    {
        id: 206,
        description: 'Confio na maneira como a mídia cobriu a história do COVID-19.',
        options: '1-7',
        category: 'midia'
    },*/
    {
        id: 207,
        description: 'A ciência nos fornece uma melhor compreensão do universo do que a religião. ',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 208,
        description: 'O método científico é o melhor caminho confiável para o conhecimento.',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 209,
        description: 'O real conhecimento que podemos ter é o conhecimento científico. ',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 210,
        description: 'A ciência é a parte mais valiosa da cultura humana.',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 211,
        description: 'A ciência é o meio mais eficiente de alcançar a cura para o COVID-19.',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 212,
        description: 'Evitei intencionalmente qualquer forma de aglomeração social devido ao COVID-19. ',
        options: '1-7',
        category: 'distanciamento'
    },   
    {
        id: 213,
        description: 'Em geral, segui as diretrizes do governo relacionadas ao distanciamento social. ',
        options: '1-7',
        category: 'distanciamento'
    },   
    {
        id: 214,
        description: 'Eu mantenho uma distância de 1,5m de outras pessoas fora da minha família imediata por causa do COVID-19.',
        options: '1-7',
        category: 'distanciamento'
    },   
    {
        id: 215,
        description: 'O distanciamento social é uma medida eficiente para o controle do COVID-19. ',
        options: '1-7',
        category: 'distanciamento'
     }    
];  
    
    
var demograficas = [    
    {
        id: 301,
        title: 'As questões a seguir tratam do seu perfil pessoal. Sinta-se à vontade para responder, lembrando que seus dados serão tratados de forma confidencial de forma a preservar sua privacidade e o sigilo das informações disponibilizadas.',
        description: 'Sexo:',
        options: 'list',
        list: ['Masculino','Feminino','Outro'],
        category: 'perfil_respondente'
    },
    {
        id: 302,
        description: 'Idade:',
        options: 'list',
        list: ['Entre 20 e 29 anos','Entre 30 e 39 anos','Entre 40 e 49 anos','Entre 50 e 59 anos','Acima de 60 anos'],
        category: 'perfil_respondente'
    },
    {
        id: 303,
        description: 'Renda Familiar Bruta Mensal (incluindo todas as fontes de renda, tais como: salários, comissões, aluguéis, outros)',
        options: 'list',
        list: ['até R$ 1.874,00','R$ 1.874,01 a R$ 3.748,00','R$ 3.748,01 a R$ 9.370,00','R$ 9.370,01 a R$ 18.740,00','Acima de R$ 18.740,00'],
        category: 'perfil_respondente'
    },  
    {
        id: 304,
        description: 'Qual o tamanho da população onde você mora?',
        options: 'list',
        list: ['mais de 10 M habitantes','5.1 M – 10 M habitantes','1.1 M  - 5 M habitantes','menos de 1 M habitantes'],
        category: 'perfil_respondente'
    },  
    {
        id: 305,
        description: 'Qual é o seu nível de escolaridade?',
        options: 'list',
        list: ['sem educação formal','até o ensino médio','ensino superior','pós-graduação'],
        category: 'perfil_respondente'
    },  
    {
        id: 306,
        description: 'Em que estado você reside?',
        options: 'list',
        list: ['Capital', 'Interior'],
        category: 'perfil_respondente'
    },  
    {
        id: 307,
        description: 'Quantas pessoas no total moram em sua casa?',
        options: 'list',
        list: ['Uma pessoa / Moro sozinho (a)', 'Duas pessoas', 'Três pessoas','Quatro pessoas', 'Cinco ou mais pessoas'],
        category: 'perfil_respondente'
     },     
     {
        id: 308,
        description: 'Quais tipos de mídias sociais você utiliza?',
        options: 'check-list',
        list: ['Twitter', 'Facebook', 'Instagram','Telegram','Wechat', 'WhatsApp', 'Linkedin', 'Nenhuma'],
        category: 'perfil_respondente'
     },     
     {
        id: 309,
        description: 'Quais tipos de mensagens você consideraria compartilhar na mídia social (se alguma)?',
        options: 'check-list',
        list: ['Notícias de esportes', 'Notícias políticas', 'Celebridades','Notícias de negócio (tendências de mercado, oportunidades de emprego)','Ciência e tecnologia', 'Bem-estar e saúde', 'Humor, piadas, memes', 'Outras'],
        category: 'perfil_respondente'
     }, 
     {
        id: 310,
        description: 'Com que frequência você verifica as mensagens mídias sociais?',
        options: 'check-list',
        list: ['BBC News', 'G1', 'Secom','OMS','CNN', 'TV Senado', 'Google News', 'Outros'],
        category: 'perfil_respondente'
      }, 
];
    
var cognitiva_CRT = [
    {
        id: 601,
        title: 'Nesta seção você responderá várias questões. Por favor, responda da forma mais precisa possível.',
        description: 'Um taco e uma bola custam R$ 1,10 no total. O taco custa R$ 1,00 a mais do que a bola. Quanto custa a bola?',
        options: 'open',
        category: 'habilidate-cognitiva-crt'
    },
    {
        id: 602,
	description: 'As idades de Marcos e João somam 28 anos no total. Marcos é 10 anos mais velho do que João. Quantos anos tem João?',
        options: 'open',
        category: 'habilidate-cognitiva-crt'
    },
    {
        id: 603,
        description: 'Considerando que 5 impressoras 3D levam 5 minutos para fazer 5 ferramentas, quanto tempo levaria (em minutos) para 100 máquinas para fazer 100 ferramentas?',
        options: 'open',
        category: 'habilidate-cognitiva-crt'
    },
//   {
//        id: 604,
//        description: 'Em um bolo, há um pedaço de bolor. Todos os dias, o pedaço de bolor dobra de tamanho. Se demorar 40 dias para que o bolor cubra todo o bolo, quantos dias seriam necessários para que o remendo cubra metade do bolo?',
//        options: 'open',
//        category: 'habilidate-cognitiva-crt'
//   },
    {
        id: 605,
        description: 'Se você estivesse correndo uma maratona e você ultrapassasse o terceiro lugar, em qual posição da competição você estaria?',
        options: 'open',
        category: 'habilidate-cognitiva-crt'
    },
    {
        id: 606,
        description: 'Um fazendeiro tinha 20 ovelhas, todas exceto 8 morreram. Quantas ovelhas morreram?',
        options: 'open',
        category: 'habilidate-cognitiva-crt'
    },
    {
        id: 607,
        description: 'Você já conhecia alguns dos problemas listados anteriormente?',
        options: 'list',
	list: ['Sim','Não','Talvez'],
        category: 'habilidate-cognitiva-crt'
    }
];

var cognitiva_AOT = [
    {
        id: 701,
        title: 'Nesta seção você responderá algumas questões. Por favor, responda da forma mais precisa possível.',
        description: 'Uma pessoa deve sempre considerar novas possibilidades.',
        options: '1-7',
        category: 'habilidate-cognitiva-aot'
    },
    {
        id: 702,
        description: 'As pessoas devem sempre levar em consideração as evidências que vão contra suas crenças.',
        options: '1-7',
        category: 'habilidate-cognitiva-aot'
    },
    {
        id: 703,
        description: 'É importante persistir em suas crenças, mesmo quando as provas são apresentadas contra elas.',
        options: '1-7',
        category: 'habilidate-cognitiva-aot'
    },
    {
        id: 704,
        description: 'Certas crenças são importantes demais para serem abandonadas, não importa o quão bom possa ser um caso contra elas.',
        options: '1-7',
        category: 'habilidate-cognitiva-aot'
    },
    {
        id: 705,
        description: 'Deve-se desconsiderar as evidências que conflitam com suas crenças estabelecidas.',
        options: '1-7',
        category: 'habilidate-cognitiva-aot'
    },
    {
        id: 706,
        description: 'As crenças devem ser sempre revistas em resposta à novas informações ou evidências.',
        options: '1-7',
        category: 'habilidate-cognitiva-aot'
    },
    {
        id: 707,
        description: 'Ninguém pode me dissuadir de algo que eu sei que está certo.',
        options: '1-7',
	category: 'habilidate-cognitiva-aot'
    },
    {
        id: 708,
        description: 'Acredito que a lealdade aos ideais e princípios de cada um é mais importante do que "a mente aberta"',
        options: '1-7',
	category: 'habilidate-cognitiva-aot'
    }	
];


/*var lideranca_partidaria = [
    {
        id: 801,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinão, indicando seu grau de concordância com elas. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela.',
        description: 'O Presidente Bolsonaro é uma boa fonte de informação sobre o coronavírus.',
        options: '1-7',
        category: 'lideranca-partidaria'
    },	
    {
        id: 802,
	description: 'O Presidente Bolsonaro está fazendo o possível para prevenir que o coronavírus se espalhe.',
        options: 'open',
        category: 'lideranca-partidaria'
    },
    {
        id: 803,
        description: 'O Brasil é um dos países mais bem preparado em relação à epidemia causada pelo coronavírus.',
        options: 'open',
        category: 'lideranca-partidaria'
    },
    {
        id: 804,
        description: 'A responsabilidade pelo controle e implementação de medidas de prevenção ao COVID-19 é do Governador do estado e não do Presidente Bolsonaro.',
        options: 'open',
        category: 'lideranca-partidaria'
    },
    {
        id: 805,
        description: 'Eu concordo com as medidas desempenhadas pelo governo para conter o alastramento e consequências causadas pelo coronavírus.',
        options: 'open',
        category: 'lideranca-partidaria'
    },
    {
        id: 806,
        description: 'No geral, estou satisfeito com o governo do Presidente Jair Bolsonaro quanto as decisões para o controle da pandemia causada pelo COVID-19.',
        options: 'open',
        category: 'lideranca-partidaria'
    }
];*/

var vies_confirmacao_1 = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito.', 
        description: 'De arcordo com o seu conhecimento, esta mensagem é verdadeira ou falsa?',
        options: 'list',
	list: ['Verdadeira','Falsa'],
	image: 'images/Cloroquina.jpg',	  
    },	
    {
        id: 902,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
    },	
    {
        id: 903,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];

  var vies_confirmacao_2 = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito.', 
        description: 'De arcordo com o seu conhecimento, esta mensagem é verdadeira ou falsa?',
        options: 'list',
	list: ['Verdadeira','Falsa'],
	image: 'images/gripezinha_bolsonaro',	  
    },	
    {
        id: 902,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
    },	
    {
        id: 903,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
 var vies_confirmacao_3 = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito.', 
        description: 'De arcordo com o seu conhecimento, esta mensagem é verdadeira ou falsa?',
        options: 'list',
	list: ['Verdadeira','Falsa'],
	image: 'images/covid-19 - criado em laboratorio',	  
    },	
    {
        id: 902,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
    },	
    {
        id: 903,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
 var vies_confirmacao_4 = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito.', 
        description: 'De arcordo com o seu conhecimento, esta mensagem é verdadeira ou falsa?',
        options: 'list',
	list: ['Verdadeira','Falsa'],
	image: 'images/ivermectina'	  
    },	
    {
        id: 902,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
    },	
    {
        id: 903,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
var vies_confirmacao_5 = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito.', 
        description: 'De arcordo com o seu conhecimento, esta mensagem é verdadeira ou falsa?',
        options: 'list',
	list: ['Verdadeira','Falsa'],
	image: 'images/vitamina_D'	  
    },	
    {
        id: 902,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
    },	
    {
        id: 903,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];

var vies_confirmacao_6 = [
    {
        id: 901,
        title: 'Na sequência serão apresentadas algumas mensagens que circularam pela mídia social. Para cada uma delas você deve avaliar se é verdade de acordo com seu conhecimento e sua opinão a respeito.', 
        description: 'De arcordo com o seu conhecimento, esta mensagem é verdadeira ou falsa?',
        options: 'list',
	list: ['Verdadeira','Falsa'],
	image: 'images/vitamina_D'	  
    },	
    {
        id: 902,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
    },	
    {
        id: 903,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];


