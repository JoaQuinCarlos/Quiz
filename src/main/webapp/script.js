/**
 * Created by Joppe on 19.09.2017.
 */

var quizzes = 0;
const theData = [];

$("#submitQuestion").click(function(){
   $.ajax({
       url: 'rest/questions',
       type: 'POST',
       data: JSON.stringify({
           svar: [$("#answer1").val(), $("#answer2").val(), $("#answer3").val(), $("#answer4").val()],
           spmtext: $("#questionText").val(),
           riktigIndex: $("#correctAnswer").val(),
           tid: $("#duration").val()
       }),
       contentType: 'application/json; charset=utf-8',
       datatype: 'json'
   });
});

$("#makeQuiz").click(function(){
    $.ajax({
        url: 'rest/quiz',
        type: 'POST',
        data: JSON.stringify({
            navn: $("#quizName").val(),
            startTid: $("#startTime").val()
        }),
        success: function(){
            quizzes ++;
        },
        contentType: 'application/json; charset=utf-8',
        datatype: 'json'
    });
});

$("#submitQuestion").click(function(){
    $.ajax({
        url: 'rest/quiz',
        type: 'POST',
        data: JSON.stringify({
            navn: $("#quizName").val(),
            startTid: $("#startTime").val(),
            question:[{
                svar: [$("#answer1").val(), $("#answer2").val(), $("#answer3").val(), $("#answer4").val()],
                spmtext: $("#questionText").val(),
                riktigIndex: $("#correctAnswer").val(),
                tid: $("#duration").val()
            }]
        }),
        contentType: 'application/json; charset=utf-8',
        datatype: 'json'
    });
});



$(document).ready(function(){
    $.getJSON("rest/quiz", function(data){
        $.each(data, function(key, val){
            theData.push(val);
        });
        showQuizzes();
    });
    function showQuizzes(){
        $("#body").html("");
        for(var i = 0; i < theData.length; i++){
            var questions;
            if(theData[i].question === null){questions = 0;} else{questions = theData[i].question.length;}
            $("#body").append('<tr id="' + theData[i].id + '">' +
                '<td>' + theData[i].id + '</td>' +
                '<td>' + theData[i].navn + '</td>' +
                '<td>' + questions + '</td>' +
                '<td>' + new Date() + '</td>' +
                '<td><span class="glyphicon glyphicon-ok"></span></td>' +
                '<td><span class="glyphicon glyphicon-stats"></span></td>' +
                '</tr>');
        }
    }
});

