import React from 'react'
import * as S from './styled';

function Repositories() {
  return (
    <S.WrapperTabs SelectedTabClassName="is-selected"
      SelectedTabPanelClassName="is-selected">

      <S.WrapperTabList>

        <S.WrapperTab>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
          </svg>
        </S.WrapperTab>

        <S.WrapperTab>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </S.WrapperTab>

      </S.WrapperTabList>

      <S.WrapperTabPanel>Panel Repositories</S.WrapperTabPanel>
      <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>


    </S.WrapperTabs>
  )
}

export default Repositories;