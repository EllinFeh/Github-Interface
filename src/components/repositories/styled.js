import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { MediaCss } from '../../global/resetCSS';

export const WrapperTabs = styled(Tabs)`
}
`;

export const WrapperTab = styled(Tab)`
padding: 1em 2em 1em 2em;
border-radius: 13px;
font-size: 15px;
text-align: center;
border: 1.8px solid #ffffff;
cursor: pointer;

&:hover{
    border: 1.8px solid #333333;
}

&.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
}

@media(max-width: ${MediaCss}){
    width: 10em;
    height: 4em;
}

`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabList = styled(TabList)`
margin: 1.5em;
display: flex;
list-style-type: none;
align-items: center;
justify-content: center;
gap: 3em;
`;
WrapperTabList.tabsRole = "TabList";


export const WrapperTabPanel = styled(TabPanel)`
margin: 5% 10% 0% 10%;
border-radius: 10px;
text-align: center;
`;
WrapperTabList.tabsRole = "TabPanel";



export const WrapperList = styled(TabPanel)`
display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  
`;