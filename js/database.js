// Insere todas as respostas na base de dados
function saveAnswers(formName, questions) {
 
  // Obtem as respostas selecionadas
  var fields = document.getElementsByTagName('input');

  var answers = new Array();

  for(i=0; i< fields.length; i++) {
    if(fields[i].checked) {
      var name = fields[i].name.split('_')[1];
      var value = fields[i].value;
      var category = fields[i].getAttribute("category");
      var answer = {
        pergunta : name,
        resposta : value,
        category : category || 'default'
      };
      answers.push(answer);
    }
  }

  // Valida se todas as perguntas foram respondidas
  if(answers.length < questions.length) {
    alert("Todas as perguntas precisam ser respondidas.");
    return;
  }

  // Cria o objeto com as respostas
  var answerObject = {
    respostas: answers
  };  

  var code = $('#code').val();
  if(code == '' || code == null) {
    alert("Você precisa informar o código gerado no passo anterior.");
    return false;
  }

  // Envia para a base de dados
  if(code == 'generate') {
    code = getCode();
    firebase.database().ref(formName + '/' + code).set(answerObject)
      .then(function(snapshot) {
        alert("Dados inseridos com sucesso.");
        $("#codigo").html(code);
        $("#next").attr('href', $("#next").attr('href') + code);
        $("#success").show();
     }, function(error) {
      alert(error);
    });
  } else {
    firebase.database().ref(formName + '/' + code).update(answerObject)
    .then(function(snapshot) {
      alert("Dados atualizados com sucesso.");
      $("#codigo").html(code);
      $("#next").attr('href', $("#next").attr('href') + code);
      $("#success").show();
    }, function(error) {
    alert(error);
  });
 }

}

// Gera codigo para o usuario resgatar o premio
function getCode() {
  var LETTERS = ["A","E","K","L","D","F"];
  var time = (new Date()). getTime() + "";
  var code = "";
  for(i=0; i<time.length; i++) {
    if(i < LETTERS.length)
      code += LETTERS[i];
    else
      code += time[i];
  }
  return code;
}
