package beans;

import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Joppe on 19.09.2017.
 */
public class QuizBean implements Serializable{

    @XmlElement(name="id")
    private int id;

    @XmlElement(name="question")
    private List<QuestionBean> question;

    @XmlElement(name="navn")
    private String navn;

    @XmlElement(name="startTid")
    private LocalDateTime startTid;

    @XmlElement(name="spillere")
    private List<SpillerBean> spillere;

    public int getId(){return id;}

    public void setId(int id){this.id = id;}

    public List<QuestionBean> getQuestion(){
        return question;
    }

    public void setQuestion(List<QuestionBean> question){this.question = question;}

    public String getNavn(){return navn;}

    public void setNavn(String navn){this.navn = navn;}

    public LocalDateTime getStartTid(){
        return startTid;
    }

    public void setStartTid(String startTid){this.startTid = LocalDateTime.parse(startTid);}

    public List<SpillerBean> getSpillere(){return spillere;}

    public void setSpillere(List<SpillerBean> spillere){this.spillere = spillere;}
}
