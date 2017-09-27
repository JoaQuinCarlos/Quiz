/**
 * Created by Joppe on 26.09.2017.
 */
$(document).ready(function() {
    var selectedQuiz;
    const url = window.location.href;
    const quizid = url.substring(url.indexOf("#") + 1);

    $.getJSON("rest/quiz/" + quizid, function(data){
        selectedQuiz = data;
        showQuizzes();
    });

    function showQuizzes() {
        $("#scoreBody").html("");
        for (var i = 0; i < selectedQuiz.players.length; i++) {
            $("#scoreBody").append('<tr id="' + quizid + '">' +
                '<td>' + selectedQuiz.players[i].navn + '</td>' +
                '<td>' + selectedQuiz.players[i].score + '</td>' +
                '</tr>');
        }
    }
});

/*
    var thePlayers;
    var selectedQuiz;
    const url = window.location.href;
    const quizid = parseInt(url.substr(url.indexOf("#") + 1));
    $.getJSON("rest/quiz/" + quizid, function(data){
        selectedQuiz = data;
        showScores();
    })
    function showScores(){
        if (selectedQuiz.players === null) {players = 0;}
        else{thePlayers = selectedQuiz.players.length;}
        $("#scoreBody").html("");
        for(var i = 0; i < thePlayers; i++){
            $("#scoreBody").append('<tr>' +
                '<td>' + selectedQuiz.players[i].navn + '</td>' +
                '<td>' + selectedQuiz.players[i].score + '</td>' +
                '</tr>');
        }
    }
});
*/
