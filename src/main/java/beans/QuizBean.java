package beans;

import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Joppe on 19.09.2017.
 */
public class QuizBean implements Serializable{

    @XmlElement(name="id")
    private int id;

    @XmlElement(name="question")
    private List<QuestionBean> question = new ArrayList<QuestionBean>();

    @XmlElement(name="navn")
    private String navn;

    @XmlElement(name="startTid")
    private String startTid;

    @XmlElement(name="players")
    private List<PlayerBean> players = new ArrayList<PlayerBean>();

    public int getId(){return id;}

    public void setId(int id){this.id = id;}

    public List<QuestionBean> getQuestion(){
        return question;
    }

    public void setQuestion(List<QuestionBean> question){this.question = question;}

    public String getNavn(){return navn;}

    public void setNavn(String navn){this.navn = navn;}

    public String getStartTid(){
        return startTid;
    }

    public void setStartTid(String startTid) {this.startTid = startTid;}

    public List<PlayerBean> getPlayers(){return players;}

    public void setPlayers(List<PlayerBean> players){this.players = players;}
}
