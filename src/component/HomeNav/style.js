import styled from 'styled-components';
export const HomeNavBar = styled.div`
width : 100%;

background: url('../images/Home/home-bg1.jpg');
background-size: contain;
overflow: hidden;
`
export const Navbar = styled.div`
width : 100%
`
export const Logo = styled.h2`
width : 45%;
color : #fff;
font-size : 30px;
cursor : pointer;
float : left;
`
export const HomeList = styled.ul`
width : 50%
float : right;

`
export const HomeItem = styled.li`
display: inline-block;

`
export const Itemm = styled.a`
display : block;
color : #9c9292;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
cursor: pointer;
&:hover {
    color: #24b357
}
`
export const Home = styled.div`
width : 100%;
`
export const HomeDes = styled.div`
width : 50%;
margin : auto;
padding : 130px;
text-align: center;

`
export const HomeTitle = styled.h2`
color : #fff;
font-weight : bold;
font-size : 40px;
margin:0;
`
export const Span = styled.span`
color : #24b357;
`
export const HomeDescr = styled.p`
color : #9c9292;
font-size : 15px;
margin-bottom : 50px;
`
export const HomeButton = styled.button`
border : 1px solid #24b357;
outline : 0;
width : 150px;
color : #24b357;
border-radius : 3px;
padding :10px;
cursor: pointer;
font-weight : bold;
background : none;
font-size : 15px;
&:hover {
    color : #DDD;
    background : #24b357;
}
`