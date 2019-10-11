
function print(message) {
  document.write(message);
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
  var answer = prompt(questions[i][0]);
  if(parseInt(answer) === questions[i][1])
  {
    correct +=1;
    correctQuestions.push(questions[i][0]);
  }
  else
  {
     wrongQuestions.push(questions[i][0]);                       
  }
    
}

  message = 'You answered ' + correct + ' answer(s) correctly.<br><br>';
  if(correctQuestions.length > 0)
  {
    message += '<bold>You got these questions correct:</bold><br><ol>'
    for(var i = 0; i<correctQuestions.length;i+=1)
    {
      message += '<li>' + correctQuestions[i] + '</li>'
    }
    message += '</ol><br>'
  }
  if(wrongQuestions.length >0)
  {
    message += '<bold>You got these questions wrong:</bold><br><ol>'
    for(var i = 0; i<wrongQuestions.length;i+=1)
    {
      message += '<li>' + wrongQuestions[i] + '</li>'
    }
    message += '</ol>'
  }

print(message);