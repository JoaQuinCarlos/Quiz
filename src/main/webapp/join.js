/**
 * Created by Joppe on 26.09.2017.
 */

var timeLeft;
var selectedQuiz;
var time = 0;
var tidIQuiz = 0;

$(document).ready(function() {
    var url = window.location.href;
    var quizid = url.substring(url.indexOf("#") + 1);
    $.getJSON("rest/quiz/" + quizid, function(data){
        selectedQuiz = data;
        timeLeft = new Date(selectedQuiz.startTid) - Date.now();
        for(var i = 0; i < selectedQuiz.question.length; i++){
            time += selectedQuiz.question[i].tid;
        }
        startQuiz();
    });

    function startQuiz(){
        if(timeLeft > 0){
            $("#question").html('<div><p>' + Math.floor(timeLeft / 1000) + ' sekunder til start.</p></div>');
        } else if(timeLeft < 0 && timeLeft > -time * 1000){
            for(var j = 0; j < selectedQuiz.question.length; j++){
                tidIQuiz = tidIQuiz - selectedQuiz.question[j].tid;
                if(timeLeft > tidIQuiz){break;}
            }
            $("#question").html('<div><p class="text-center">' + selectedQuiz.question[0].spmtext + '</p></div>' +
                '<div>' +
                '<button class="btn-block" id="answer1">' + selectedQuiz.question[j].svar[0] + '</button>' +
                '<button class="btn-block" id="answer2">' + selectedQuiz.question[j].svar[1] + '</button>' +
                '<button class="btn-block" id="answer3">' + selectedQuiz.question[j].svar[2] + '</button>' +
                '<button class="btn-block" id="answer4">' + selectedQuiz.question[j].svar[3] + '</button>' +
                '</div>'
            );
        } else{
            $("#question").html('<div><p>' + -Math.floor(timeLeft / 1000) + ' sekunder siden start.</p></div>');
        }
    }

    setInterval(function(){
        timeLeft = timeLeft - 1000;
        var i;
        tidIQuiz = 0;

        if(timeLeft > 0){
            $("#question").html('<div><p>' + Math.floor(timeLeft / 1000) + ' sekunder til start.</p></div>');
        } else if(timeLeft > -time * 1000){
            for(i = 0; i < selectedQuiz.question.length; i++){
                tidIQuiz = tidIQuiz - selectedQuiz.question[i].tid * 1000;
                if(timeLeft > tidIQuiz){break;}
            }
            $("#question").html('<div><p class="text-center">' + selectedQuiz.question[i].spmtext + '</p></div>' +
                '<div>' +
                '<button class="btn-block" id="answer1">' + selectedQuiz.question[i].svar[0] + '</button>' +
                '<button class="btn-block" id="answer2">' + selectedQuiz.question[i].svar[1] + '</button>' +
                '<button class="btn-block" id="answer3">' + selectedQuiz.question[i].svar[2] + '</button>' +
                '<button class="btn-block" id="answer4">' + selectedQuiz.question[i].svar[3] + '</button>' +
                '</div>'
            );
        } else{
            $("#question").html('<div><p>' + -Math.floor(timeLeft / 1000) + ' sekunder siden start.</p></div>');
        }
    }, 1000);
});

