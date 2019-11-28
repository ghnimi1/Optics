import styled from 'styled-components';
export const ContactSection = styled.div`
width : 100%;
overflow : hidden;
padding-bottom : 35px;
background : #f3f3f3;
`
export const ContactTitle = styled.h2`
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
export const AdresCont = styled.div`
width : 100%;
`
export const Adre = styled.div`
width : 40%;
float :left;

`
export const Cont = styled.div`
width : 50%;
float :left;

`

export const TitleInfo = styled.h4`

`
export const Icon = styled.div`
display :block;
padding : 20px 0;
color : #24b357;
`
export const Span =styled.span`
padding-left :20px;
color : #9c9292;
`
export const Inp = styled.input`
width : 40%;
padding :5px;
border-radius : 3px;
border : 0;
inline : 0;
border : 1px solid #DDD;
margin-bottom: 10px;
margin-right:20px;

`
export const TextAre = styled.textarea`
width :85%;
border : 1px solid #DDD;
padding : 5px;

border-radius : 3px;

`
export const Button = styled.button`
border : 1px solid #DDD;
background : none;
width : 130px;
padding :10px;
margin-top:15px;
border : 1px solid #24b357;
border-radius : 3px;
color : #24b357;
outline : none;
cursor:pointer;
font-weight : bold;

&:hover{
    background:#24b357;
    color:#fff;
}
`
