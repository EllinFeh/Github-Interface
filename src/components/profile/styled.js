import styled from "styled-components";
import { MediaCss } from '../../global/resetCSS';


export const Wrapper = styled.div` //Todos Itens da navbar
display: flex;
justify-content: center; 
align-items: center; 
position: relative;
color: #ffffff;
gap: 25px;

@media (max-width: ${MediaCss}) {
  margin: 0;
  gap: 50px;
}

@media (max-width: 550px) {
  margin: 0;
  gap: 5px;
}

h1{
font-size: 25px;
display: block;
font-family: arial;
font-weight: bold;

@media(max-width: ${MediaCss}){
  font-size: 20px;
}
}

h5{
  font-size: 13.5px;
}

@media(max-width: ${MediaCss}){
  font-size: 12.5px;
}
`;


export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
text-align: center;
font-size: 13px;
gap: 12px;

@media (max-width: ${MediaCss}) {
    display: none;
    margin: 0;
}
`;

export const WrapperAvatar = styled.img`

border-radius: 50%;
width: 100px;
height: 100px;
&:hover {
    box-shadow: #0d092e 1px 1px 5px;
    transform: scale(1.08);
    transition: 500ms;
  }

  @media(max-width: ${MediaCss}){
    width: 90px;
    height: 90px;
  }
`;

export const WrapperGithub = styled.div`
@media (max-width: ${MediaCss}) {
  display: none;
}
`;

export const WrapperBackground = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(90deg, rgba(6,29,59,1) 0%, rgba(48,74,159,1) 50%, rgba(74,60,190,1) 100%);
border-radius: 20px;
max-height: 110px;
max-width: 100vw;
width: 100vw;
height: 100vh;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 5px;
  span{
  font-size: 14px;
  color: #e0d1ff;
  font-weight: bold;
  }

  h3 {
    margin-right: 8px;
    
  }

  a {
    font-size: 14px;
    color: #e0d1ff;
    font-weight: bold;

    &:hover{
      color: white;
    }
  }
`;


