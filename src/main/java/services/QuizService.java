package services;

import beans.QuizBean;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;

@Path("/quiz/")
public class QuizService implements Serializable{
    static HashMap<Integer, QuizBean> quizzes = new HashMap<Integer, QuizBean>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<QuizBean> getQuizzes() {
        return quizzes.values();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public QuizBean getSpørsmål(@PathParam("id") int id){return quizzes.get(id);}

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void lagQuiz(QuizBean quiz){
        quizzes.putIfAbsent(quiz.getId(), quiz);
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuiz(@PathParam("id") int id){
        quizzes.remove(id);
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuizzes(){
        quizzes.clear();
    }

}
