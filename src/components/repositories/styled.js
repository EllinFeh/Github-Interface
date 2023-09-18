import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`

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
    transform: skew(-5deg);
    transition: 500ms;
}

&:focus{
    outline:none;
}

&:is-selected{
    border: 2px solid #ffffff;
    transform: scale(1.2);
}
`;

export const WrapperTabList = styled(TabList)`
margin: 15px;
display: flex;
align-items: center;
justify-content: center;
gap: 3%;

&:is-selected{  
    border: 2px solid;
    display:block;
    color: #111111;
}  

`;

WrapperTabList.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
display:none;
margin: 5% 10% 0% 10%;
border-radius: 10px;
text-align: center;

&.is-selected {
    display: block;

}
`;
WrapperTabList.tabsRole = "TabPanel";