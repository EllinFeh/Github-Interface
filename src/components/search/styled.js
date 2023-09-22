import styled from "styled-components";

export const WrapperGithub = styled.div`
display: flex;
margin: -5% 5% 0% 0%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    border: 1.8px solid white; 
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    height: 2.5em;
    width: 8em;
    padding: 0px 10px 0px 10px;
    font-weight: italic;
    margin: 0px 2px 0px 0px;]

   
  }

  button {
    background: none;
    margin: 0 -0.2em;
    padding: 0em 0.5em 0em 0.5em;
    height: 2.5em;
  

    border: 1.8px solid white; 
    border-left: 0.1px solid white;
    border-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;


    &:hover{
      box-shadow: 1px 1px 8px white;
    }
    span {
      color: #ffff;
    }
  }
`;
