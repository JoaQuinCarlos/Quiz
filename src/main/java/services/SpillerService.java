package services;

import beans.QuizBean;
import beans.SpillerBean;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;

@Path("/spiller/")
public class SpillerService implements Serializable{
    static HashMap<Integer, SpillerBean> spillere = new HashMap<Integer, SpillerBean>();
    static int idTracker = 0;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<SpillerBean> getSpillere() {
        return spillere.values();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public SpillerBean getSpiller(@PathParam("id") int id){return spillere.get(id);}

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void lagQuiz(SpillerBean spiller){
        spiller.setId(idTracker);
        spillere.putIfAbsent(spiller.getId(), spiller);
        idTracker ++;
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuiz(@PathParam("id") int id){
        spillere.remove(id);
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuizzes(){
        spillere.clear();
    }
}