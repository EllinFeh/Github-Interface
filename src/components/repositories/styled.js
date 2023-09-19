import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { MediaCss } from '../../global/resetCSS';

export const WrapperTabs = styled(Tabs)`
}
`;

export const WrapperTab = styled(Tab)`
padding: 8px;
border-radius: 13px;
font-size: 15px;
width: 10%;
max-width: 150px;
min-width: 40px;
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
    transform: scale(2);
    margin: 15% 10% 0% 10%;
    width: 20%;
    height: 45%;
}

`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabList = styled(TabList)`
margin: 15px;
display: flex;
list-style-type: none;
align-items: center;
justify-content: center;
gap: 3%;
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