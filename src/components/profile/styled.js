import styled from "styled-components";

export const Wrapper = styled.div` //Todos Itens da navbar
display: flex;
color: #ffffff;
gap: 6em;
align-items: center;

h1{
font-size: 25px;
display: block;
font-family: arial;
font-weight: bold;
}

h4{
  font-size: 13.5px;
}

h5{
  font-size: 13.5px;
  
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
margin-right: -60px;
&:hover {
    box-shadow: #0d092e 1px 1px 5px;
    transform: scale(1.08);
    transition: 500ms;
  }
`;

export const WrapperBackground = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #171624;
height: 18vh;
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

  a {
    font-size: 14px;
    color: #e0d1ff;
    font-weight: bold;

    &:hover{
      color: white;
    }
  }
`;


