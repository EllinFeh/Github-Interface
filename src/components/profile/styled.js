import styled from "styled-components";

export const WrapperH1 = styled.div` 
font-size: 16px;
display: block;
`;

export const Wrapper = styled.div` //Todos Itens da navbar
display: flex;
justify-content: center; 
align-items: center; 
position: relative;
font-family: arial;
color: #1f1f1f;
gap: 40px;
`;


export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
text-align: center;
font-size: 13px;
gap: 15px;
`;


export const WrapperAvatar = styled.img`
margin-right: 2%;
border-radius: 50%;
width: 100px;
height: 100px;

&:hover {
    box-shadow: #0d092e 1px 1px 5px;
    transform: scale(1.08);
    transition: 500ms;
  }
`;

export const WrapperGithub = styled.img`
width: 60px;
height: 60px;
margin: -20px;
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

export const WrapperDad = styled.div`

`;


