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
    },
    {
        id: 3,
        description: 'O coronavírus não sobrevive em plástico ou aço por mais de alguns minutos.',
        options: 'yes_no',
        type: 'ciencia',
        image: 'images/fakenews.jpg'
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
        list: ['até 1.874,00','R$ 1.874,01 a R$ 3.748,00','R$ 3.748,01 a R$ 9.370,00','R$ 9.370,01 a R$ 18.740,00','Acima de R$ 18.740,00'],
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
        description: '1. Minhas primeiras impressões das pessoas geralmente são certas.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 402,
        description: '2. Seria difícil para mim abandonar qualquer um dos meus maus hábitos.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 403,
        description: '3. Não quero saber o que as outras pessoas realmente pensam de mim.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 404,
        title: ' ',
        description: '3. Não quero saber o que as outras pessoas realmente pensam de mim.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 405,
        description: '4. Nem sempre fui honesto comigo mesmo.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 406,
        description: '5. Eu sempre sei porque gosto das coisas.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 407,
        description: '6. Meus pensamentos são guiados pelas minhas emoções.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 408,
        description: '7. Depois de me decidir, outras pessoas raramente me fazem mudar de opinião.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 409,
        description: '8. Não sou um motorista cuidadoso quando ultrapasso o limite de velocidade.',
        options: '1-7',
        type: 'autoengano'
    },
    {
        id: 410,
        description: '9. Estou totalmente no controle de meu próprio destino.',
        options: '1-7',
        type: 'autoengano'
    },
      {
        id: 411,
        description: '10. É difícil para mim desligar de um pensamento perturbador.',
        options: '1-7',
        type: 'autoengano'
    },
      {
        id: 412,
        description: '11. Nunca me arrependo de minhas decisões.',
        options: '1-7',
        type: 'autoengano'
    },
      {
        id: 413,
        description: '12. Às vezes, perco as coisas porque não consigo me decidir o quanto antes.',
        options: '1-7',
        type: 'autoengano'
    },
      {
        id: 414,
        description: '13. A razão pela qual eu voto é porque meu voto pode fazer a diferença.',
        options: '1-7',
        type: 'autoengano'
    },
      {
        id: 415,
        description: '14. Meus pais nem sempre eram justos quando me puniam.',
        options: '1-7',
        type: 'autoengano'
    },
      {
        id: 416,
        description: '15. Eu sou uma pessoa completamente racional.',
        options: '1-7',
        type: 'autoengano'
    },
    
      
    
