/**
 * Created by Joppe on 19.09.2017.
 */
$(document).ready(function(){

var questions = [];

    $("#submitQuestion").click(function(){
        var ans1, ans2, ans3, ans4, spmtext, riktigIndex, tid;
        ans1 = $("#answer1").val();
        ans2 = $("#answer2").val();
        ans3 = $("#answer3").val();
        ans4 = $("#answer4").val();
        spmtext = $("#questionText").val();
        riktigIndex = $("#correctAnswer").val();
        tid = $("#duration").val();

        var question = {
            svar: [ans1, ans2, ans3, ans4],
            spmtext: spmtext,
            riktigIndex: riktigIndex,
            tid: tid
        };
        questions.push(question);

        $("#answer1").val("");
        $("#answer2").val("");
        $("#answer3").val("");
        $("#answer4").val("");
        $("#questionText").val("");
        $("#correctAnswer").val("");
        $("#duration").val("");
    });

    $("#submitQuiz").click(function(){
        var question = {
            svar: [$("#answer1").val(), $("#answer2").val(), $("#answer3").val(), $("#answer4").val()],
            spmtext: $("#questionText").val(),
            riktigIndex: $("#correctAnswer").val(),
            tid: $("#duration").val()
        };
        questions.push(question);
        $.ajax({
            url: 'rest/quiz',
            type: 'POST',
            data: JSON.stringify({
                navn: $("#quizName").val(),
                startTid:  new Date($('#startTime').val()),
                question: questions
            }),
            contentType: 'application/json; charset=utf-8',
            datatype: 'json'
        });
        questions = [];
    });
});

