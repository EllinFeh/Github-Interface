import React from 'react'
import * as S from './styled';

function Repositories() {
  return (
    <S.WrapperTabs SelectedTabClassName="is-selected"
      SelectedTabPanelClassName="is-selected">

      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      
      <S.WrapperTabPanel>Panel Repositories</S.WrapperTabPanel>
      <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>

    </S.WrapperTabs>
  )
}

export default Repositories;