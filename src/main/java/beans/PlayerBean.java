package beans;

import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;

/**
 * Created by Joppe on 21.09.2017.
 */
public class PlayerBean implements Serializable{

    @XmlElement(name="id")
    private int id;

    @XmlElement(name="navn")
    private String navn;

    @XmlElement(name="score")
    private int score;

    public int getId(){return this.id;}

    public String getNavn(){return this.navn;}

    public int getScore(){return this.score;}

    public void setId(int id){this.id = id;}

    public void setNavn(String navn){this.navn = navn;}

    public void setScore(int score){this.score = score;}
}
