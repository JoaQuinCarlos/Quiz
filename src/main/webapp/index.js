/**
 * Created by Joppe on 26.09.2017.
 */
$(document).ready(function() {
    const theData = [];

    $.getJSON("rest/quiz/", function(data){
        $.each(data, function(key, val){
            theData.push(val);
        });
        showQuizzes();
    });

    function showQuizzes() {
        $("#body").html("");
        for (var i = 0; i < theData.length; i++) {
            var date = new Date(theData[i].startTid);
            var questions;
            var id = theData[i].id;
            if (theData[i].question === null) {
                questions = 0;
            } else {
                questions = theData[i].question.length;
            }
            $("#body").append('<tr id="' + id + '">' +
                '<td>' + theData[i].id + '</td>' +
                '<td>' + theData[i].navn + '</td>' +
                '<td>' + questions + '</td>' +
                '<td>' + date.toLocaleString() + '</td>' +
                '<td><a href="register.html#' + id + '"><span id= "' + id + '" class="quiz glyphicon glyphicon-ok"></span></a></td>' +
                '<td><a href="scores.html#' + id + '"><span id= "' + id + '" class="scores glyphicon glyphicon-stats"></span></a></td>' +
                '</tr>');
        }
    }
    showQuizzes();
});