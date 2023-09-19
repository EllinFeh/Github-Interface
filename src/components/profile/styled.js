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
  gap: 5vw;
}

h1{
  font-size: 22px;
display: block;
font-family: arial;
font-weight: bold;

}

h5{
  font-size: 12px;
}
`;


export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
text-align: center;
font-size: 13px;
gap: 15px;

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

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;


