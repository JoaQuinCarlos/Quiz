/**
 * Created by Joppe on 19.09.2017.
 */
$("#submit").click(function(){
   $.ajax({
       url: 'rest/spørsmål',
       type: 'POST',
       data: JSON.stringify({
           id: $("#newId").val(),
           quizID: $("#quizID").val(),
           svar: [$("#ans1").val(), $("#ans2").val(), $("#ans3").val(), $("#ans4").val()],
           spmtext: $("#spmtext").val(),
           riktigIndex: $("#riktigIndex").val(),
           tid: $("#tid").val()
       }),
       contentType: 'application/json; charset=utf-8',
       datatype: 'json'
   });
});