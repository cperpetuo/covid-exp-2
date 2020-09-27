// Insere a resposta na base de dados
function saveAnswer(id) {
 
  // Obtem a resposta selecionada
  var answer = document.querySelector('input[name="pergunta_' + id + '"]:checked').value;
  
  // Se nada tiver sido selecionado
  if(!answer) {
    alert("Selecione uma opção.");
    return false;
  }
 
  // Cria o objeto com a resposta
  var answerObject = {
    'enio' : {
      question: question,
      answer: answer    
    }
  };
  
  // Envia para a base de dados
  firebase.database().ref('users').set(answerObject)
    .then(function(snapshot) {
      $("#check_" + id).show();
  }, function(error) {
    alert(error);
  });
}
