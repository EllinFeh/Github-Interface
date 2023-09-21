import styled from "styled-components";
import { MediaCss } from '../../global/resetCSS';


export const Wrapper = styled.div` //Todos Itens da navbar
display: flex;
color: #ffffff;
gap: 1.8em;
align-items: center;

@media (max-width: ${MediaCss}) {
  margin: 0;
  display: inline-grid;
  margin-top: 20%;
  margin-bottom: -20%;
}


h1{
font-size: 25px;
display: block;
font-family: arial;
font-weight: bold;

 @media(max-width: ${MediaCss}){
  font-size: 40px;
}

 @media (max-width: 780px) {
  font-size: 20px;
 }
}

h4{
  font-size: 13.5px;

  @media(max-width: ${MediaCss}){
    font-size: 25px;
  }
  @media (max-width: 780px) {
    font-size: 20px;
  }
}

h5{
  font-size: 13.5px;
  @media(max-width: ${MediaCss}){
  font-size: 25px;
  }
}
`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
text-align: center;
gap: 12px;

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
    width: 130px;
    height: 130px;
  }

  @media (max-width: 780px) {
    width: 100px;
    height: 100px;
  }
`;

export const WrapperBackground = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #171624;
height: 13vh;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6em;
  gap: 0.3em;

  span{
  font-size: 14px;
  color: #e0d1ff;
  font-weight: bold;
  }

  span{
    @media (max-width: ${MediaCss}) {
      font-size: 20px;
    }
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


