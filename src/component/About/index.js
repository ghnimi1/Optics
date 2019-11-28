import React, {useState,useEffect}from 'react';
import { AboutTitle , AboutSection, TitleBar,AboutPart,PartTitle,PartBar,PartDes} from './style';
import Axios from 'axios';
const About = () => {
    const [about,setAbout] = useState([]);
    useEffect (() => {
   Axios.get('js/data.json').then(res => {setAbout(res.data.works)})
    },[])
    const aboutList=about.map((ab)=> {
        return(
                <AboutPart active={ab.id} key ={ab.id}>
                    <PartTitle>{ab.title}</PartTitle>
                    <PartBar></PartBar>
                    <PartDes>{ab.body}</PartDes>
                </AboutPart>
        )
    })
    return (
        <AboutSection>
            <div className="container">
               <AboutTitle>About Us</AboutTitle>
                   <TitleBar></TitleBar>
                   {aboutList}
            </div>
                </AboutSection>
    )
}
export default About;