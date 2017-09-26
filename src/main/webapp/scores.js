/**
 * Created by Joppe on 26.09.2017.
 */

var players;
var selectedQuiz;

$(document).ready(function() {
    const url = window.location.href;
    var quizid = parseInt(url.substr(url.indexOf("#") + 1));
    $.getJSON("rest/quiz/" + quizid, function(data){
        selectedQuiz = data;
    })
    showScores();

    function showScores(){
        if (selectedQuiz.players === null) {players = 0;}
        else{players = selectedQuiz.players.length;}
        $("#scoreBody").html("");
        for(var i = 0; i < players; i++){
            $("#scoreBody").append('<tr>' +
                '<td>' + selectedQuiz.players[i].navn + '</td>' +
                '<td>' + selectedQuiz.players[i].score + '</td>' +
                '</tr>');
        }
    }
});

