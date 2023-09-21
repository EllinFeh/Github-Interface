import styled from "styled-components";
import { MediaCss } from "../../global/resetCSS";

export const WrapperGithub = styled.div`
display: flex;
margin: -5% 5% 0% 0%;

@media (max-width: ${MediaCss}) {
  display: none;
}
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${MediaCss}) {
    transform: scale(1.9);
}

@media (max-width: 780px) {
  transform: scale(1);
}

  input {
    border: 1.8px solid white; 
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    height: 35px;
    width: 130px;
    padding: 0px 10px 0px 10px;
    font-weight: italic;
    margin: 0px 2px 0px 0px;
  }

  button {
    background: none;
    margin: 0 -3px;
    height: 35px;
    padding: 4px;

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
