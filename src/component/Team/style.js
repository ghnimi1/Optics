import styled from 'styled-components';

export const TeamSection = styled.div`
width : 100%;
overflow : hidden;
padding-bottom : 35px;
`
export const TeamTitle = styled.h2`
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
clear :both;
`
export const Part = styled.div`
width : 10%;
float : left;
margin-left : ${props => props.active ? '0px' : '5%'};
`
export const Image = styled.img`
width : 100%;
height : 100px;
padding-top : 20px;

`
export const Title = styled.h5`
margin : 0;
padding-top:7px;
`
export const Desc = styled.span`
font-size : 11px;

`