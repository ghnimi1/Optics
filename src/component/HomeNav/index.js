import React from 'react';
import { HomeNavBar, Navbar, Logo, HomeItem, HomeList, Itemm, Home, HomeDes, HomeTitle,Span,HomeDescr,HomeButton } from './style';
const HomeNav = () => {
    return (
        <HomeNavBar>
            <div className="container">
            <Navbar>
                <Logo>Optics</Logo>
                <HomeList>
                    <HomeItem><Itemm href="#">Home</Itemm> </HomeItem>
                    <HomeItem><Itemm href="#">About</Itemm> </HomeItem>
                    <HomeItem><Itemm href="#">Services</Itemm> </HomeItem>
                    <HomeItem><Itemm href="#">Portfolio</Itemm> </HomeItem>
                    <HomeItem><Itemm href="#">Team</Itemm> </HomeItem>
                    <HomeItem><Itemm href="#">Contact</Itemm> </HomeItem>
                </HomeList>
            </Navbar>
            <Home>
                <HomeDes>
                    <HomeTitle>We are <Span>Optics</Span></HomeTitle>
                    <HomeDescr>L'image couvre toute la largeur ou la hauteur du conteneur et les parties</HomeDescr>
                    <HomeButton>Learn More</HomeButton>
                </HomeDes>
            </Home>
            </div>
        </HomeNavBar>
    )
}
export default HomeNav;