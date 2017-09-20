package beans;

import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;
import java.util.ArrayList;

/**
 * Created by Joppe on 19.09.2017.
 */
public class SpørsmålBean implements Serializable{

    @XmlElement(name="id")
    private int id;

    @XmlElement(name="svar")
    private String[] svar;

    @XmlElement(name="spmtext")
    private String spmtext;

    @XmlElement(name="riktigIndex")
    private int riktigIndex;

    @XmlElement(name="tid")
    private int tid;

    public void setId(int id){this.id = id;}

    public int getId(){return this.id;}

    public String[] getSvar(){
        return svar;
    }

    public void setSvar(String[] svar){this.svar = svar;}

    public String getSpmtext(){
        return spmtext;
    }

    public void setSpmtext(String spmtext){
        this.spmtext = spmtext;
    }

    public int getRiktigIndex(){
        return riktigIndex;
    }

    public void setRiktigIndex(int riktigIndex){
        this.riktigIndex = riktigIndex;
    }

    public int getTid(){
        return tid;
    }

    public void setTid(int tid){
        this.tid = tid;
    }
}
