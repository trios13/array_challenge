
function print(message) {
//  document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var correct = 0;
var message = '';
var questions = [
  ['What is 5*5?', 25],
  ['What is 5*0?', 0 ],
  ['What is 10*10?', 100]
];

var correctQuestions = [];
var wrongQuestions = [];

for(var i = 0; i<questions.length; i+=1)
{ 
  var question = questions[i][0];
  var answer = prompt(question);
  if(parseInt(answer) === questions[i][1])
  {
    correct +=1;
    correctQuestions.push(question);
  }
  else
  {
     wrongQuestions.push(question);                     
  }
    
}

  message = 'You answered ' + correct + ' answer(s) correctly.<br><br>';
  if(correctQuestions.length > 0)
  {
    message += '<h2>You got these questions correct:</h2><ol>'
    for(var i = 0; i<correctQuestions.length;i+=1)
    {
      message += '<li>' + correctQuestions[i] + '</li>'
    }
    message += '</ol>'
  }
  if(wrongQuestions.length >0)
  {
    message += '<h2>You got these questions wrong:</h2><ol>'
    for(var i = 0; i<wrongQuestions.length;i+=1)
    {
      message += '<li>' + wrongQuestions[i] + '</li>'
    }
    message += '</ol>'
  }

print(message);