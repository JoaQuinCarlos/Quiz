/**
 * Created by Joppe on 26.09.2017.
 */

var timeLeft;
var selectedQuiz;
var time = 0;
var tidIQuiz = 0;
var correctAnswer = 0;
var riktigSvar = false;
var feilSvar = false;
var url;
var quizid;
var user;

$(document).ready(function() {
    url = window.location.href;
    quizid = url.substring(url.indexOf("#") + 1, url.indexOf("?"));
    user = url.substring(url.indexOf("?") + 1);
    $.getJSON("rest/quiz/" + quizid, function(data){
        selectedQuiz = data;
        timeLeft = new Date(selectedQuiz.startTid) - Date.now();
        if(selectedQuiz.question === null){}
        else{
            for(var i = 0; i < selectedQuiz.question.length; i++){
                time += selectedQuiz.question[i].tid;
            }
        }
    });

    $("#question").on("click", "#answer1", function() {
        if (correctAnswer === 1) {
            riktigSvar = true;
            score();
        } else{
            feilSvar = true;
        }
    });

    $("#question").on("click", "#answer2", function() {
        if (correctAnswer === 2) {
            riktigSvar = true;
            score();
        } else{
            feilSvar = true;
        }
    });

    $("#question").on("click", "#answer3", function() {
        if (correctAnswer === 3) {
            riktigSvar = true;
            score();
        } else{
            feilSvar = true;
        }
    });

    $("#question").on("click", "#answer4", function() {
        if (correctAnswer === 4) {
            riktigSvar = true;
            score();
        } else{
            feilSvar = true;
        }
    });

    function score() {
        $.getJSON("rest/quiz/" + quizid, function(data) {
            selectedQuiz = data;
            for (var i = 0; i < data.players.length; i++) {
                if (data.players[i].navn === user) {
                    data.players[i] = {
                        navn: data.players[i].navn,
                        score: data.players[i].score + 1
                    };
                }
            }
            $.ajax({
                url: 'rest/quiz/' + quizid,
                type: 'PUT',
                data: JSON.stringify({
                    id: data.id,
                    navn: data.navn,
                    startTid: data.startTid,
                    question: data.question,
                    players: data.players
                }),
                contentType: 'application/json; charset=utf-8',
                datatype: 'json'
            })
        })
    }



    setInterval(function(){
        timeLeft = timeLeft - 500;
        var i;
        tidIQuiz = 0;

        if(timeLeft > 0){
            $("#question").html('<div><p>' + Math.floor(timeLeft / 1000) + ' sekunder til start.</p></div>');
        } else if(timeLeft > -time * 1000){
            for(i = 0; i < selectedQuiz.question.length; i++){
                tidIQuiz = tidIQuiz - selectedQuiz.question[i].tid * 1000;
                if(timeLeft > tidIQuiz){break;}
            }
            var countdown = Math.floor((-tidIQuiz + timeLeft) / 1000);
            if(countdown === 0){riktigSvar = false; feilSvar = false;}
            correctAnswer = selectedQuiz.question[i].riktigIndex;
            if(!feilSvar && !riktigSvar){
                $("#question").html(
                    '<div><p class="text-right">' + countdown + '</p></div>' +
                    '<div><h1 class="text-center">' + selectedQuiz.question[i].spmtext + '</h1></div>' +
                    '<div>' +
                    '<button class="btn-block ans" id="answer1">' + selectedQuiz.question[i].svar[0] + '</button>' +
                    '<button class="btn-block ans" id="answer2">' + selectedQuiz.question[i].svar[1] + '</button>' +
                    '<button class="btn-block ans" id="answer3">' + selectedQuiz.question[i].svar[2] + '</button>' +
                    '<button class="btn-block ans" id="answer4">' + selectedQuiz.question[i].svar[3] + '</button>' +
                    '</div>'
                );
            } else{
                $("#question").html('<div><p class="text-right">' + countdown + '</p></div>')
            }
        } else{
            $("#question").html('<div><p>' + -Math.floor(timeLeft / 1000) + ' sekunder siden start.</p></div>');
        }
    }, 500);
});

