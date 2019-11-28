import styled from 'styled-components';
export const ServiceSection = styled.div`
width : 100%;
overflow : hidden;
`
export const ServiceTitle = styled.h2`
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
export const Part = styled.div`
width : 20%;
margin-top:20px;
float : left;
margin-left : ${props => props.active % 4  === 1 ? "0px" : "5%"};
`
export const Icon = styled.div`

color : #24b357;
padding : 20px 0px;

`
export const TitlePart = styled.h4`
margin: 0;
color : #9c9292;
`
export const BarPart = styled.div`
height: 1px;
width :50%;
background : #DDD;
margin-top : 10px;

`
export const DesPart = styled.div`
margin : 10px 0px;
font-size:justify;
color : #9c9292;
`
