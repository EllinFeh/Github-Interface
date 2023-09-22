import styled from "styled-components";



export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  box-shadow: 1px 1px 8px black;
  margin: 10px 10px;
  width: 22em;
  height: 10em;
  text-align: center;
  display:flex;
  flex-direction: column;
  background: #171624;

  &:hover{
    transform: scale(1.02);
    transition: 200ms;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 19px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #777777;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;
