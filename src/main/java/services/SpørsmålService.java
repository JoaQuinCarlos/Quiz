package services;

import beans.SpørsmålBean;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;

@Path("/questions/")
public class SpørsmålService implements Serializable{
    static HashMap<Integer, SpørsmålBean> questions = new HashMap<Integer, SpørsmålBean>();

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public SpørsmålBean getSpørsmål(@PathParam("id") int id){return questions.get(id);}

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<SpørsmålBean> getQuestions(){return questions.values();}

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void lagSpørsmål(SpørsmålBean spørsmål){
        questions.putIfAbsent(spørsmål.getId(), spørsmål);
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
