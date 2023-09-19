import React from 'react'
import * as S from "./styled"


function RepositoryItem({name, linkRepo, fullName}) {
    return (
        <S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperLink href={linkRepo} target="_blank" rel="noreferrer">
          {fullName}
        </S.WrapperLink>
      </S.Wrapper>
    )
}

export default RepositoryItem