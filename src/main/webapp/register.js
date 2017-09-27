/**
 * Created by Joppe on 27.09.2017.
 */
$(document).ready(function() {
    var url = window.location.href;
    var quizid = url.substring(url.indexOf("#") + 1);
    var nick = "";
    var selectedQuiz;

    $("#register").html('<div class="input-group input-group-lg col-lg-6 col-md-8 col-sm-12 col-xs-12">' +
        '<span class="input-group-addon">Nick</span>' +
        '<input type="text" class="form-control" id="nick">' +
        '</div>' +
        '<button class="btn btn-default" id="submit">Submit</button>');

    $("#submit").click(function(){
        if($("#nick").val() != ""){
        nick = $("#nick").val();

    }
        $("#register").html('<div class="input-group input-group-lg col-lg-6 col-md-8 col-sm-12 col-xs-12">' +
            '<span class="input-group-addon">Nick</span>' +
            '<input type="text" class="form-control" id="nick">' +
            '</div>' +
            '<a href="quiz.html#' + quizid + '?' + nick + '"><button class="btn btn-default" id="submit">Submit</button></a>');

        $.getJSON("rest/quiz/" + quizid, function(data){
            selectedQuiz = data;
            data.players.push({
                navn: nick
            });
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
        });
    })
});
