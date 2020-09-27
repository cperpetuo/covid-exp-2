$('document').ready(function(){

  var count = 1;
  $.each( questions, function( key, value ) {

    // Pergunta
    var question = createQuestion(count, key, value);
    $("#content").append(question);

    // Opcoes de resposta
    if(value.options == '1-7')
      var options = createOptions1_7(question, key, value);
    else if(value.options == 'yes_no')
      var options = createOptionsYN(question, key, value);

    // Botao
    addButton(question, key, value);

    // Check
    var check = document.createElement("img");
    check.id = 'check_' + value.id;
    check.className = 'check';
    check.style.display = 'none';
    check.src = 'images/check.png';
    $(question).append(check);
 
    // Incrementa pergunta
    count++;

  });

});

// Cria o cabeçalho e descrição da pergunta
function createQuestion(count, key, value) {
  var question = document.createElement("div");
  question.className = 'question';
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = count + ') ' + value.title;
  
  var description = document.createElement("p");
  description.className = 'description';
  description.innerHTML = value.description;

  $(question).append(title);

  // Inclui a imagem na pergunta
  if(value.image){
    var image = document.createElement('img');
    image.src = value.image;
    $(question).append(image);
  }
  $(question).append(description);

  return question;
}

// Cria opcoes de resposta do tipo (discordo) 1 - 7 (concordo)
function createOptions1_7(question, key, value) {

   var span1 = document.createElement("span");
   span1.className = 'left';
   span1.innerHTML = 'Discordo totalmente';
    
   var span2 = document.createElement("span");
   span2.className = 'right';
   span2.innerHTML = 'Concordo totalmente';

   $(question).append(span1);
   $(question).append(span2);

   for(i=1; i<=7; i++) {
    var input = document.createElement("input");
    input.id = value.id + "_" + i;
    input.name = 'pergunta_' + value.id;
    input.value = i;
    input.type = 'radio';
    var label = document.createElement("label");
    label.for = input.id;
    label.innerHTML = input.value;
    $(question).append(input);
    $(question).append(label);
  }
}

// Cria opcoes de resposta do tipo SIM / NÃO
function createOptionsYN(question, key, value) {

  var div = document.createElement("div");
  div.className = 'center';

  // Sim
  var input = document.createElement("input");
  input.id = value.id + "_" + i;
  input.name = 'pergunta_' + value.id;
  input.value = 'Sim';
  input.type = 'radio';
  var label = document.createElement("label");
  label.for = input.id;
  label.innerHTML = input.value;
  $(div).append(input);
  $(div).append(label);

  // Nao
  var input = document.createElement("input");
  input.id = value.id + "_" + i;
  input.name = 'pergunta_' + value.id;
  input.value = 'Não';
  input.type = 'radio';
  var label = document.createElement("label");
  label.for = input.id;
  label.innerHTML = input.value;
  $(div).append(input);
  $(div).append(label);

  $(question).append(div);
}

// Adiciona o botão para envio da resposta
function addButton(question, key, value){
  var br = document.createElement("br");
  var p = document.createElement("p");
  p.className = "center";
  var button = document.createElement("button");
  button.innerHTML = "Enviar resposta";
  button. onclick = function(event) {saveAnswer(value.id)};
  p.appendChild(button);

  question.appendChild(br);
  question.appendChild(p);
}
