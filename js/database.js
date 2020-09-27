
function saveAnswer(id) {
  
  var answer = document.querySelector('input[name="pergunta_' + id + '"]:checked').value;
  
  if(!answer) {
    alert("Selecione uma opção.");
    return false;
  }
  
  var answerObject = {
    question: question,
    answer: answer
  };
  
  firebase.database().ref('users/enio').push().set(answerObject)
    .then(function(snapshot) {
      alert('Sucesso!');
      $("#check_" + id).show();
  }, function(error) {
    alert(error);
  });
}