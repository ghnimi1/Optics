import React from 'react';
import { TeamSection, TeamTitle,TitleBar,Part,Image,Title,Desc } from './style';
const Team = () => {
    return (
        <TeamSection>
                <div className="container">
                   <TeamTitle>Meet the Team</TeamTitle>
                       <TitleBar></TitleBar>
                       <Part active>
                           <Image src="./images/Portfolio/portfolio-img1.jpg"></Image>
                           
                           <Title>John Doe</Title>
                           <Desc>Web developer </Desc>
                       </Part>
                       <Part>
                           <Image src="./images/Portfolio/portfolio-img2.jpg"></Image>
                           
                           <Title>John Doe</Title>
                           <Desc>Web developer </Desc>
                       </Part>
                       <Part>
                           <Image src="./images/Portfolio/portfolio-img3.jpg"></Image>
                           
                           <Title>John Doe</Title>
                           <Desc>Web developer </Desc>
                       </Part>
                       <Part>
                           <Image src="./images/Portfolio/portfolio-img4.jpg"></Image>
                           
                           <Title>John Doe</Title>
                           <Desc>Web developer </Desc>
                       </Part>
                </div>
            </TeamSection>
    )
}
export default Team;