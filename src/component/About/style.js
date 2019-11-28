import styled from 'styled-components';
export const AboutSection = styled.div`
width : 100%;
background : #f3f3f3;
overflow : hidden;
`
export const AboutTitle = styled.h2`
font-weight : bold;
width : 100%;
margin-bottom : 0;
color : #9c9292;

`
export const TitleBar = styled.div`
height : 2px;
width : 4%;
background : #24b357;
display: block;

`
export const AboutPart = styled.div`
width : 30%;
padding :30px 0px;
float : left;
margin-left :${props => props.active === 1 ? '0px' : '5%'};

`
export const PartTitle = styled.h2`
margin-bottom : 0;
color : #9c9292;

`
export const PartBar = styled.div`
height : 1px;
width : 40%;
background : #9c9292;
`
export const PartDes = styled.p`
text-align : justify;
color : #9c9292;

`


