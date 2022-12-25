function Questions(Questions, a, b, c, d, ans){
    this.Question = Questions;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.ans =ans;
}

var question1 = new Questions("Q 1. Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?", "pop()", "push()", "reduce()", "reduceRight()", "ans-c");
var question2 = new Questions("Q 2. Which of the following function of String object causes a string to be italic as if it were in an <i> tag?", "fixed()", "fontcolor()", "fontsize()", "italics()", "ans-d");
var question3 = new Questions("Q 3.  Which of the following is correct about JavaScript?", "JavaScript is an Object-Based language", "JavaScript is Assembly-language", "JavaScript is an Object-Oriented language", "JavaScript is a High-level language ", "ans-a");
var question4 = new Questions("Q 4.  Which of the following is true about variable naming conventions in JavaScript?", "You should not use any of the JavaScript reserved keyword as variable name.", "JavaScript variable names should not start with a numeral (0-9).", "Both of the above.", "None of the above", "ans-c");
var question5 = new Questions("Q 5. Which of the following is the correct syntax to redirect a url using JavaScript?", "document.location='http://www.newlocation.com';", "browser.location='http://www.newlocation.com';", "navigator.location='http://www.newlocation.com';", "window.location='http://www.newlocation.com';", "ans-d");
var question6 = new Questions("Q 6. Which of the following type of variable is visible only within a function where it is defined?", "global variable", "local variable", "Both of the above.", "None of the above.", "ans-b");
var question7 = new Questions("Q 7. All user-defined objects and built-in objects are descendants of an object called Object?", "true", "false","","",  "ans-a");
var question8 = new Questions("Q 8. Which of the following function of Number object returns the number's value?", "toString()", "valueOf()", "toLocaleString()", "toPrecision()", "ans-b");
var question9 = new Questions("Q 9. Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?", "slice()", "split()", "substr()", "search()", "ans-c");
var question10 = new Questions("Q 10. Which of the following function of String object creates an HTML anchor that is used as a hypertext target?", "anchor()", "link()", "blink()", "big()", "ans-a");


var questionList = [ question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 ];

var question = document.querySelector('form h2')
var lable = document.querySelectorAll('label')
var startButton = document.getElementById("start-btn")
var counter = 0
var score = 0

startButton.onclick = function(e){
    e.preventDefault();
    var wrapper = document.querySelector('form')
    wrapper.style.display = "block"
    this.style.display = "none"
}

function loadQuestions() {
    question.innerHTML = questionList[counter].Question;
    lable[0].innerHTML= questionList[counter].a
    lable[1].innerHTML=questionList[counter].b
    lable[2].innerHTML=questionList[counter].c
    lable[3].innerHTML=questionList[counter].d
}

loadQuestions();

function getCheckedAnswer() {
    var checkedAns = document.getElementsByClassName('ans')
    var answer;
    for(var i =0; i < checkedAns.length; i++){
        if(checkedAns[i].checked){
            answer = checkedAns[i].id
        }
    }
    return answer;
}

var submitBtn = document.querySelector('form button')

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    counter++;
    

    if(counter< questionList.length){
        loadQuestions();
        if(getCheckedAnswer() === questionList[counter].ans){
            score++
        }
    }else{
        document.querySelector("form").style.textAlign = "center"
        question.innerHTML = "Your Score is :"
        question.style.fontWeight = "bold"
        document.querySelector("form .wrap").style.display = "none"
        document.getElementById('score').style.display = "block"
        document.getElementById('score').innerHTML = score+" / "+questionList.length;
        if(score < 4){
            document.getElementById("msg").innerHTML = "Failed, Do Your Best Next.!!"
        }else{
            document.getElementById("msg").innerHTML = "Congradulations..!! PASSED.!"
        }
    }
    console.log(score);
})




