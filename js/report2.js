var users = {};

function evaluateAnswers(reference, element, array) {
  	
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
		else if(category == 'mito')
			if(resposta == "Sim") total++;
		else if(category == 'ignore')
			size--;
	  });	 
      grades = users[user];
	  if(!grades)
		  grades = {};
	  
	  if(reference.indexOf("debias") > -1)
		  reference = "mito";	  
	  
	  if(grades[reference]) {
		g = grades[reference];
		grades[reference] += total;
	  }
	  else
		grades[reference] = Math.round(100 * total / size) / 100;
	  
	  users[user] = grades;
	});
	
    updateTable(element, users);
  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}


function updateTable(element, users) {
	var table = document.getElementById(element);
	
	table.innerHTML = "<table id='table'> \
	  <tr>\
	    <th>Código</th>\
	    <th>Crenças</th>\
	    <th>CRT</th>\
	    <th>AOT</th>\
	    <th>Ciência</th>\
	    <th>Dist.</th>\
	    <th>Vacina Antes</th>\
	    <th>Mito x Fato</th>\
	    <th>Vacina Depois</th>\
	  <tr>	\
	</table>";
	
	$.each( users, function( key, value ) {
	  var tr = document.createElement("tr");
	  var td1 = document.createElement("td");
	  var td2 = document.createElement("td");
	  var td3 = document.createElement("td");
	  var td4 = document.createElement("td");
	  var td5 = document.createElement("td");
	  var td6 = document.createElement("td");
	  var td7 = document.createElement("td");
	  var td8 = document.createElement("td");
	  var td9 = document.createElement("td");
	  table.appendChild(tr);
	  tr.appendChild(td1);
	  tr.appendChild(td2);
	  tr.appendChild(td3);
	  tr.appendChild(td4);
	  tr.appendChild(td5);
	  tr.appendChild(td6);
	  tr.appendChild(td7);
	  tr.appendChild(td8);
	  tr.appendChild(td9);
	  td1.appendChild(document.createTextNode(key));
	  td2.appendChild(document.createTextNode(value["questions"]));
	  td3.appendChild(document.createTextNode(value["cognitiva_CRT"]));
	  td4.appendChild(document.createTextNode(value["cognitiva_AOT"]));
	  td5.appendChild(document.createTextNode(value["questions_ciencia"]));
	  td6.appendChild(document.createTextNode(value["questions_distanciamento"]));
	  td7.appendChild(document.createTextNode(value["questions_intencao_vacina_antes"]));
	  td8.appendChild(document.createTextNode(getValue(value["mito"])));  
	  td9.appendChild(document.createTextNode(getValue(value["questions_intencao_vacina_depois"])));  
	});
}

function getValue(val) {
	if(!val)
		return "--";
	return val;
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
      grades = users[user];
	  if(!grades)
		  grades = {};
	  
	  grades[reference] = Math.round(100 * (total * 10)/(array.length-1)) / 100;
	  
	  users[user] = grades;
	});
	
    updateTable(element, users);
  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}










