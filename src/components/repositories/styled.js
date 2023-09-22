import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperMain = styled.div` //alinhamento geral
display: flex;
align-items: center;
justify-content: center;
`;

export const WrapperTabs = styled(Tabs)` //container principal dos cards
  font-size: 16px;
  width: 70%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)` //container dos buttons
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;

`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)` //estilização dos buttons
  border-radius: 16px;
  border: 1px solid #ffffff;
  padding: 18px;
  width: 10em;
  user-select: none;
  cursor: pointer;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &:hover {
    transform: scale(1.1);
    transition: 200ms;
  }

  &.is-selected {
    border: 2px solid #fffff;
    box-shadow: 1px 1px 10px #ffffff;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)` //container cards
  display: none;
  margin-top: 2em;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div` //alinhamento dos cards
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`;
