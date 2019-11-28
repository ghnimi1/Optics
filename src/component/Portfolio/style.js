import styled from 'styled-components';
export const PortfolioSection = styled.div`
width : 100%;
overflow : hidden;
padding-bottom : 35px;
background : #f3f3f3;
`
export const PortfolioTitle = styled.h2`
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
width : 21%;
margin-top:20px;
float : left;
margin-left : ${props => props.act % 4  === 1 ? "0px" : "5%"};
`
export const Image = styled.img`
width : 100%;
`
export const ListUl = styled.ul`
list-style: none;
padding-inline-start: 0px;
`
export const ListLi = styled.li`
display: inline-block;
 padding-right: 20px;
color: ${props => props.active ? '#24b357' : ''};

`
