function evaluateAnswers(reference, element, array) {
  var user_grade = {};	
  var ref = firebase.database().ref(reference);

  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
	
	$.each( snapshot.val(), function( user, answers ) {
	  var total = 0;
	  var size = array.length;
	  $.each( answers.respostas, function( key, value ) {
		var resposta = value.resposta;
		var category = value.category;
		if(category == 'positive')
		  total += parseInt(resposta);
		else if(category == 'negative')
		  total += (8 - parseInt(resposta));
		else if(category == 'ignore')
			size--;
	  });	  
	  user_grade[user] = {'grade': total / size};
	});
	
    var table = document.createElement("table");
	var tr = document.createElement("tr");
	var td1 = document.createElement("th");
	var td2 = document.createElement("th");
	var td3 = document.createElement("th");
	table.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	td1.appendChild(document.createTextNode('Código'));
	td2.appendChild(document.createTextNode('Nota'));
	
	$.each( user_grade, function( key, value ) {
	  var tr = document.createElement("tr");
	  var td1 = document.createElement("td");
	  var td2 = document.createElement("td");
	  table.appendChild(tr);
	  tr.appendChild(td1);
	  tr.appendChild(td2);
	  td1.appendChild(document.createTextNode(key));
	  td2.appendChild(document.createTextNode(value.grade));
	  
	  document.getElementById(element).innerHTML  = ""; 
	  document.getElementById(element).appendChild(table);
	});
  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

function evaluateOpenAnswers(reference, element, array) {
  var user_grade = {};	
  var ref = firebase.database().ref(reference);

  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
	
	$.each( snapshot.val(), function( user, answers ) {
	  var total = 0;
	  $.each( answers.respostas, function( key, value ) {
		var pergunta = value.pergunta;
		var resposta = value.resposta;
		var category = value.category;
		
		switch (pergunta) {
		  
		  case "601": (resposta == "0,05" ? total++ : 0);
		  case "602": (resposta == "9" ? total++ : 0);
		  case "603": (resposta == "5" ? total++ : 0);
		  case "605": (resposta == "3" ? total++ : 0);
		  case "606": (resposta == "12" ? total++ : 0);
		  default: 0;
		}
		
	  });	  
	  user_grade[user] = {'grade': (total * 10)/(array.length-1)};
	});
	
    var table = document.createElement("table");
	var tr = document.createElement("tr");
	var td1 = document.createElement("th");
	var td2 = document.createElement("th");
	var td3 = document.createElement("th");
	table.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	td1.appendChild(document.createTextNode('Código'));
	td2.appendChild(document.createTextNode('Nota'));
	
	$.each( user_grade, function( key, value ) {
	  var tr = document.createElement("tr");
	  var td1 = document.createElement("td");
	  var td2 = document.createElement("td");
	  table.appendChild(tr);
	  tr.appendChild(td1);
	  tr.appendChild(td2);
	  td1.appendChild(document.createTextNode(key));
	  td2.appendChild(document.createTextNode(value.grade));
	  
	  document.getElementById(element).innerHTML  = ""; 
	  document.getElementById(element).appendChild(table);
	});
  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}


function getUserGrade(code, url1, url2) {
	
  var ref = firebase.database().ref('questions');
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
	
	$.each( snapshot.val(), function( user, answers ) {
	  if(user == code) {
	    var total = 0;
	    $.each( answers.respostas, function( key, value ) {
		  var resposta = value.resposta;
		  var category = value.category;
		  if(category == 'positive')
		    total += parseInt(resposta);
		  else if(category == 'negative')
		    total += (8 - parseInt(resposta));
	    });	  
	    grade = total / questions.length;
		if(grade > 5)
	      window.location.href = url1 + "?code=" + code;
		else
	      window.location.href = url2 + "?code=" + code;
	  }
	});
	  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}









