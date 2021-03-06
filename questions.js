var questions = [
    {
        id: 1,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinião, indicando seu grau de concordância com elas. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela',
        description: 'A obtenção de vacinas é uma boa maneira de proteger a mim e minha futura criança(s) de doença.',
        options: '1-7',
        category: ''
    },
    {
        id: 2,
        description: 'Geralmente eu faria o que meu médico recomenda sobre vacinas.',
        options: '1-7',
        category: ''
    },
    {
        id: 3,
        description: 'As novas vacinas só são recomendadas se forem tão seguras quanto as vacinas mais antigas.',
        options: '1-7',
        category: ''
    },
    {
        id: 4,
        description: 'Meu(s) futuro(s) filho(s) não precisará(ão) de vacinas para doenças que já não são mais comuns.',
        options: '1-7',
        category: ''
    }, 
    {
        id: 5,
        description: 'Os pais devem ter o direito de recusar vacinas que são necessárias para a escola por qualquer razão.',
        options: '1-7',
        category: ''
    },
    {
        id: 6,
        description: 'Tantas crianças são vacinadas que minha futura(s) criança(s) estará(ão) segura(s) destas doenças, mesmo se eu não os vacinarei.',
        options: '1-7',
        category: ''
    },
    {
        id: 7,
        description: 'Os graves efeitos adversos das vacinas me preocupam.',
        options: '1-7',
        category: ''
    },
    {
        id: 8,
        description: 'Algumas vacinas causam autismo em crianças saudáveis.',
        options: '1-7',
        category: ''
    },
   {
        id: 9,
        description: 'Tenho receio de tomar a vacina e de me contaminar com o coronavírus.',
        options: '1-7',
        category: ''
    }, 
    {
        id: 10,
        description: 'A vacina pode provavelmente causar outras doenças.',
        options: '1-7',
        category: ''
    },
    {
        id: 11,
        description: 'A  vacina pode conter chips implantados para controle da população.',
        options: '1-7',
        category: ''
    },
    {
        id: 12,
        description: 'A vacina pode alterar nosso DNA.',
        options: '1-7',
        category: ''
    },
    {
        id: 13,
        description: 'A vacina é produzida a partir de células de fetos abortados.',
        options: '1-7',
        category: ''
    },
    {
        id: 14,
        description: 'Nenhuma dessas razões indicam minha ideia e/ou comportamento sobre vacinas.',
        options: '1-7',
        category: ''
    }];
    
var questions_intencao_vacina_antes= [    
    {
        id: 20,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinião. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela',
        description: 'Qual a sua intenção de  tomar a vacina e vacinar sua família contra a covid-19 quando estiver disponível?',
        options: '1-7',
        category: 'intencao_antes'
    },
	{
		id: 21,
        description: 'Quando você pretende se vacinar contra a covid-19?',
        list:['o quanto antes','em até seis meses', 'após seis meses', 'nunca'],
        category: 'intencao_tempo'
	}
    {
        id: 22,
        description: 'Baseado em seus conhecimentos, quão provável que ao se vacinar contra a covid-19 você venha a sofrer complicações de saúde?',
        options: '1-7',
        category: 'complicacoes_antes'
    }];
   
var questions_ciencia= [
    {
        id: 30,
        description: 'A ciência nos fornece uma melhor compreensão do universo do que a religião. ',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 31,
        description: 'O método científico é o melhor caminho confiável para o conhecimento.',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 32,
        description: 'O real conhecimento que podemos ter é o conhecimento científico. ',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 33,
        description: 'A ciência é a parte mais valiosa da cultura humana.',
        options: '1-7',
        category: 'ciencia'
    },
    {
        id: 34,
        description: 'A ciência é o meio mais eficiente de alcançar a cura para o COVID-19.',
        options: '1-7',
        category: 'ciencia'
    }
]; 

var questions_distanciamento= [
    {
        id: 40,
        description: 'Evitei intencionalmente qualquer forma de aglomeração social devido ao COVID-19. ',
        options: '1-7',
        category: 'distanciamento'
    },   
    {
        id: 41,
        description: 'Em geral, segui as diretrizes do governo relacionadas ao distanciamento social. ',
        options: '1-7',
        category: 'distanciamento'
    },   
    {
        id: 42,
        description: 'Eu mantenho uma distância de 1,5m de outras pessoas fora da minha família imediata por causa do COVID-19.',
        options: '1-7',
        category: 'distanciamento'
    },   
    {
        id: 43,
        description: 'O distanciamento social é uma medida eficiente para o controle do COVID-19. ',
        options: '1-7',
        category: 'distanciamento'
     }    
];  
    
    
var demograficas = [    
    {
        id: 51,
        title: 'As questões a seguir tratam do seu perfil pessoal. Sinta-se à vontade para responder, lembrando que seus dados serão tratados de forma confidencial de forma a preservar sua privacidade e o sigilo das informações disponibilizadas.',
        description: 'Sexo:',
        options: 'list',
        list: ['Masculino','Feminino','Outro'],
        category: 'perfil_respondente'
    },
    {
        id: 52,
        description: 'Idade:',
        options: 'list',
        list: ['Entre 20 e 29 anos','Entre 30 e 39 anos','Entre 40 e 49 anos','Entre 50 e 59 anos','Acima de 60 anos'],
        category: 'perfil_respondente'
    },
    {
        id: 53,
        description: 'Renda Familiar Bruta Mensal (incluindo todas as fontes de renda, tais como: salários, comissões, aluguéis, outros)',
        options: 'list',
        list: ['até R$ 1.874,00','R$ 1.874,01 a R$ 3.748,00','R$ 3.748,01 a R$ 9.370,00','R$ 9.370,01 a R$ 18.740,00','Acima de R$ 18.740,00'],
        category: 'perfil_respondente'
    },  
    {
        id: 54,
        description: 'Qual o tamanho da população onde você mora?',
        options: 'list',
        list: ['mais de 10 M habitantes','5.1 M – 10 M habitantes','1.1 M  - 5 M habitantes','menos de 1 M habitantes'],
        category: 'perfil_respondente'
    },  
    {
        id: 55,
        description: 'Qual é o seu nível de escolaridade?',
        options: 'list',
        list: ['sem educação formal','até o ensino médio','ensino superior','pós-graduação'],
        category: 'perfil_respondente'
    },  
    {
        id: 56,
        description: 'Em que estado você reside?',
        options: 'list',
        list: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO' ],
        category: 'perfil_respondente'
    },  
    {
        id: 57,
        description: 'Quantas pessoas no total moram em sua casa?',
        options: 'list',
        list: ['Uma pessoa / Moro sozinho (a)', 'Duas pessoas', 'Três pessoas','Quatro pessoas', 'Cinco ou mais pessoas'],
        category: 'perfil_respondente'
     },     
     {
        id: 58,
        description: 'Quais tipos de mídias sociais você utiliza?',
        options: 'check-list',
        list: ['Twitter', 'Facebook', 'Instagram','Telegram','Wechat', 'WhatsApp', 'Linkedin', 'Nenhuma'],
        category: 'perfil_respondente'
     },     
     {
        id: 59,
        description: 'Quais tipos de mensagens você consideraria compartilhar na mídia social (se alguma)?',
        options: 'check-list',
        list: ['Notícias de esportes', 'Notícias políticas', 'Celebridades','Notícias de negócio (tendências de mercado, oportunidades de emprego)','Ciência e tecnologia', 'Bem-estar e saúde', 'Humor, piadas, memes', 'Outras'],
        category: 'perfil_respondente'
     }, 
     {
        id: 510,
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

var debias_mito_1 = [
    {
        id: 901,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-1.jpg',	  
    },	
    {
        id: 902,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];

var debias_mito_1 = [
    {
        id: 903,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-1.jpg',	  
    },	
    {
        id: 904,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var debias_mito_2 = [
    {
        id: 905,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-2.jpg',	  
    },	
    {
        id: 906,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var debias_mito_3 = [
    {
        id: 907,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-3.jpg',	  
    },	
    {
        id: 908,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var debias_mito_4 = [
    {
        id: 910,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-4.jpg',	  
    },	
    {
        id: 911,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var debias_mito_5 = [
    {
        id: 912,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-5.jpg',	  
    },	
    {
        id: 913,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var debias_mito_6 = [
    {
        id: 914,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-6.jpg',	  
    },	
    {
        id: 915,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var debias_mito_7 = [
    {
        id: 916,
        description: 'Você concorda com a mensagem disponibilizada?',
        options: 'list',
	list: ['Sim','Não'],
	image: 'images/mito-7.jpg',	  
    },	
    {
        id: 917,
        description: 'Você compartilharia esta mensagem em sua rede social? (por exemplo, através do Facebook ou Whatsapp)"? ',
        options: 'list',
	list: ['Sim','Não','Talvez'],
     }	
  ];
  
var questions_intencao_vacina_depois= [    
    {
        id: 201,
        title: 'Abaixo estão algumas frases que você deve avaliar de acordo com sua opinião. Use a escala de avaliação fornecida abaixo, na qual o ponto 1 significa que você discorda totalmente da frase, e o ponto 7 indica que você concorda totalmente com ela',
        description: 'Qual a sua intenção de  tomar a vacina e vacinar sua família contra a covid-19 quando estiver disponível?',
        options: '1-7',
        category: 'intencao_depois'
    },
    {
        id: 202,
        description: 'Baseado em seus conhecimentos, quão provável que ao se vacinar contra a covid-19 você venha a sofrer complicações de saúde?',
        options: '1-7',
        category: 'complicacoes_depois'
    }
  ];