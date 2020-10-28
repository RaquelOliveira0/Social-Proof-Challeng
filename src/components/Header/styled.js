import styled from 'styled-components';
import BgBottom from '../../imagens/bg-pattern-bottom-desktop.svg'
import BgTop from '../../imagens/bg-pattern-top-desktop.svg'

export const Container = styled.div`
padding-top:60px;
display:flex;
width: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: flex-end;
background-image:url(${BgTop}),url(${BgBottom});
background-repeat: no-repeat;
@media(max-width: 375px){
margin: 0 auto;
}
`
export const DivWrap = styled.div`

`
export const Title = styled.h1`
font-size: 45px;
color:hsl(300, 43%, 22%);
width: 400px;
text-align:center;
font-weight: 700;
@media(max-width: 375px){
    padding-left:15%;
    padding-right:15%;
}

`
export const SubTitle = styled.p`
color:hsl(303, 10%, 53%);
width: 400px;
text-align: justify;
font-weight: 500;
font-size:15px;
@media (max-width: 375px){
    padding-top:15px;
    padding-bottom:40px;
    margin: 0 auto;
    padding-right:15%;
    width: 375px;
    padding-left: 20%;
  
}

`
export const Legend = styled.p`
display: inline;
margin-left: 20px;
font-weight: 700;
color:hsl(300, 43%, 22%);
font-size:12px;
@media screen and (max-width: 375px){
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
}

`
export const Div = styled.div`
padding-bottom:50px;
display:flex;
flex-direction: column;
justify-content: space-around;
flex-wrap:wrap;
align-items: flex-end;
height: 230px;
@media(max-width: 375px){
 display:block;
 padding-bottom:40%;
}
`
export const Img = styled.img`
margin-left: 5px;
`
export const Span = styled.div`
background: hsl(300,24%,96%);
text-align: center;
padding-top:15px;
padding-bottom:15px;
padding-left:20px;
padding-right:20px;
heigth:40px;
border-radius: 5px;
@media(max-width: 375px){
    margin:20px;
    width:400px;
    margin-left:15%;
    margin-right:15%;
}
&:nth-child(1){
    align-self: flex-start;
    @media(max-width: 375px){
        align-self: center;
       
     }
    
}
&:nth-child(2){
    align-self: center;
    
}&:nth-child(3){
    align-self: flex-end;
    @media(max-width: 375px){
        align-self: center;
       
     }
    
}

`
