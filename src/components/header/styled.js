import styled from "styled-components";
import { MediaCss } from "../../global/resetCSS";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${MediaCss}) {
    transform: scale(1.1);
}

@media (max-width: 550px) {
  transform: scale(0.99);
}

  input {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    margin: 0px 5px 0px 5px;]

    
  }

  button {
    background: none;
    padding: 9px 16px;
    margin: 0 2px;
    border: 1.8px solid white;
    border-radius: 10px;

    &:hover {
      background: linear-gradient(10deg, rgba(6,29,59,0.5) 0%, rgba(48,74,159,1) 50%, rgba(74,60,190,0.5) 100%);
      box-shadow: 1px 1px 7px;
    }

    span {
      color: #ffff;
    }
  }
`;
