
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

for(var i = 0; i<questions.length; i+=1)
{ 
  var answer = prompt(questions[i][0]);
  if(parseInt(answer) === questions[i][1])
  {
     correct +=1;
  }
    
}
if(correct > 1)
{
  message = 'You answered ' + correct + ' answers correctly.';
}
else
{
  message = 'You answered ' + correct + ' answer correctly.';

}
print(message);