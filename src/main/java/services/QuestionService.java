package services;

import beans.QuestionBean;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;

@Path("/questions/")
public class QuestionService implements Serializable{
    static HashMap<Integer, QuestionBean> questions = new HashMap<Integer, QuestionBean>();
    static int idTracker = 0;

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public QuestionBean getQuestion(@PathParam("id") int id){return questions.get(id);}

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<QuestionBean> getQuestions(){return questions.values();}

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void createQuestion(QuestionBean question){
        question.setId(idTracker);
        questions.putIfAbsent(question.getId(), question);
        idTracker ++;
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuiz(@PathParam("id") int id){
        questions.remove(id);
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuizzes(){
        questions.clear();
    }
}
