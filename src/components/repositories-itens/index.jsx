import React from 'react'
import * as S from "./styled"


function RepositoryItem({name, linkrepo, fullname}) {
    return (
        <div>
            <h2>{name}</h2>
            <h5>{fullname}</h5>
            <a href={linkrepo}> <button>Access Repository</button></a>
        </div>
    )
}

export default RepositoryItem