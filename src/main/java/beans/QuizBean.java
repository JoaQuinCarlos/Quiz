package beans;

import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

/**
 * Created by Joppe on 19.09.2017.
 */
public class QuizBean implements Serializable{

    @XmlElement(name="id")
    private int id;

    @XmlElement(name="spørsmål")
    private List<SpørsmålBean> spørsmål;

    @XmlElement(name="navn")
    private String navn;

    @XmlElement(name="startTid")
    private LocalDateTime startTid;


    public int getId(){return id;}
    public void setId(int id){this.id = id;}
    public List<SpørsmålBean> getSpørsmål(){
        return spørsmål;
    }
    public void setSpørsmål(List<SpørsmålBean> spørsmål){this.spørsmål = spørsmål;}
    public String getNavn(){return navn;}
    public void setNavn(String navn){this.navn = navn;}
    public LocalDateTime getStartTid(){
        return startTid;
    }
    public void setStartTid(LocalDateTime startTid){this.startTid = startTid;}
}
