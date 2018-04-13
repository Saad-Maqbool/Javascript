function populate(){
    if(quiz.isEnded()){
        showscores();
    }
        else
        {
            //show questions
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
        //show choices
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length ;i++){
            var element =document.getElementById("choice" +i);
            element.innerHTML =choices[i];
            guess("btn" + i,choices[i])

        }

        showprogress();
        
        }
    };
    function guess(id, guess){
        var button =document.getElementById(id);
        button.onclick =function(){
            quiz.guess(guess);
            populate(); 
        }
    }
    function showprogress(){
        var currentQuestionNumber=quiz.questionIndex +1;
        var element = document.getElementById("progress");
        element.innerHTML = "Question" +currentQuestionNumber +" of " + quiz.questions.length 

    }
function showscores(){
    var gameoverHTML="<h1>Result</h1>";
    gameoverHTML += "<h2>Your Scores: " + quiz.score + "</h2>";
    var element=document.getElementById("quiz");
    debugger;
    element.innerHTML = gameoverHTML;

}


var questions =[
    new Question("Which one is not an object oriented programming language?",["Java","C#","C++","C"],"C"),
    new Question("Which Language is used for Styling Web pages?",["HTML","JQuery","AJAX","CSS"],"CSS"),
    new Question("There are ________ main concept of OOP",["2","6","4","1"],"4"),
    new Question("MVC is a _______?",["Language","Library","Framework","ALL"],"Framework")

];
var quiz = new Quiz(questions);
populate();
