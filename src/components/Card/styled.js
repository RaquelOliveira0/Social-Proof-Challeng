import styled from 'styled-components';

export const Container = styled.div`

 display:flex;
 flex-direction: row;
 justify-content: center;
    margin: 20px;
    border-radius: 5px;
    flex-wrap: wrap;
    @media(max-width: 375px){
        flex-direction: column;
        width: 500px;
     
    }
`
export const Div = styled.div`

background-color: hsl(300, 43%, 22%);
 margin:20px;
 width: 300px;
border-radius: 10px;
height: 200px;

&:nth-child(2){
    margin-top: 40px;
    
}&:nth-child(3){
    margin-top: 60px;
}
@media(max-width: 375px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex-wrap:wrap;
    margin:0 auto;
  
}

`

export const Img = styled.img`
width:35px;
border-radius: 50%;
margin-top:25px;
margin-right:160px;
@media(max-width: 375px){
    margin-left: 22%; 
}

`

export const Subtitle = styled.p`

color:#fff;
font-size: 12px;
max-width:255px;
text-align:justify;
font-weight:200;
margin:30px auto;

`
export const Title = styled.p`
margin-top:-40px;
font-size: 12px;
color:#fff;
font-weight: 700;
font-size: 12px;
`

export const Verified = styled.p`
 color:hsl(333, 80%, 67%);
 font-size: 12px;
 line-height: 0px;
 
 `