var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var next1 = document.getElementById('next1')
var back1 = document.getElementById('back1')
var next2 = document.getElementById('next2')
var back2 = document.getElementById('back2')
document.addEventListener('DOMContentLoaded', function() {
    let query = window.matchMedia("(max-width: 767px)");
    if (query.matches) {
        next1.onclick = function() {
            q1.style.left = "-650px";
            q2.style.left = "15px";
        }
        back1.onclick = function() {
            q1.style.left = "15px";
            q2.style.left = "650px";
        }
        back2.onclick = function() {
            q2.style.left = "15px";
            q3.style.left = "650px";
        }
        back3.onclick = function() {
            q3.style.left = "15px";
            q4.style.left = "650px";
        }
        next2.onclick = function() {
            q2.style.left = "-650px";
            q3.style.left = "15px";
        }
        next3.onclick = function() {
            q3.style.left = "-650px";
            q4.style.left = "15px";
        }
    } else {
        next1.onclick = function() {
            q1.style.left = "-650px";
            q2.style.left = "50px";
        }
        back1.onclick = function() {
            q1.style.left = "50px";
            q2.style.left = "650px";
        }
        back2.onclick = function() {
            q2.style.left = "50px";
            q3.style.left = "650px";
        }
        back3.onclick = function() {
            q3.style.left = "50px";
            q4.style.left = "650px";
        }
        next2.onclick = function() {
            q2.style.left = "-650px";
            q3.style.left = "50px";
        }
        next3.onclick = function() {
            q3.style.left = "-650px";
            q4.style.left = "50px";
        }
    }
});

function submitForm () {
    var answers = {};

    answers['Answer 1'] = $("input[type='radio'][name='ques1']:checked").val();
    answers['Answer 2'] = $("input[type='radio'][name='ques2']:checked").val();
    answers['Answer 3'] = $("input[type='radio'][name='ques3']:checked").val();
    answers['Answer 4'] = $("input[type='radio'][name='ques4']:checked").val();

    console.log(answers);
};