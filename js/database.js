var code = "";

// Insere todas as respostas na base de dados
function saveAnswers() {
 
  // Obtem as respostas selecionadas
  var fields = document.getElementsByTagName('input');

  var answers = new Array();

  for(i=0; i< fields.length; i++) {
    if(fields[i].checked) {
      var name = fields[i].name;
      var value = fields[i].value;
      var answer = {
        pergunta : name,
        resposta : value
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

  // Envia para a base de dados
  if(code == ""){
    code = getCode();
    firebase.database().ref('users/' + code).set(answerObject)
      .then(function(snapshot) {
        alert("Dados inseridos com sucesso.");
        $("#codigo").html(code);
        $("#success").show();
     }, function(error) {
      alert(error);
    });
  } else {
    firebase.database().ref('users/' + code).update(answerObject)
    .then(function(snapshot) {
      alert("Dados atualizaados com sucesso.");
      $("#codigo").html(code);
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

  for(i=0; i<time.length; i++) {
    if(i < LETTERS.length)
      code += LETTERS[i];
    else
      code += time[i];
  }
  return code;
}