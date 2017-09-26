package services;

import beans.PlayerBean;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;

@Path("/player/")
public class PlayerService implements Serializable{
    static HashMap<Integer, PlayerBean> players = new HashMap<Integer, PlayerBean>();
    static int idTracker = 0;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<PlayerBean> getPlayers() {
        return players.values();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public PlayerBean getPlayer(@PathParam("id") int id){return players.get(id);}

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void lagPlayer(PlayerBean player){
        player.setId(idTracker);
        players.putIfAbsent(player.getId(), player);
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