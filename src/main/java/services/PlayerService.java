package services;

import beans.PlayerBean;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;

@Path("/player/")
public class PlayerService implements Serializable{
    static HashMap<String, PlayerBean> players = new HashMap<String, PlayerBean>();
    static int idTracker = 0;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<PlayerBean> getPlayers() {
        return players.values();
    }

    @GET
    @Path("/{navn}")
    @Produces(MediaType.APPLICATION_JSON)
    public PlayerBean getPlayer(@PathParam("navn") String navn){return players.get(navn);}

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void lagPlayer(PlayerBean player){
        player.setId(idTracker);
        players.putIfAbsent(player.getNavn(), player);
        idTracker ++;
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deletePlayer(@PathParam("id") int id){
        players.remove(id);
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public void deletePlayers(){
        players.clear();
    }
}