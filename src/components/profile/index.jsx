import React from 'react'
import * as S from './styled'
import UseGithub from '../../hooks/githubHooks'
import Header from '../search'


const Profile = () => {

    return (

        <>

            <S.WrapperBackground>
                <S.Wrapper>
                    <Header />
                </S.Wrapper >
            </S.WrapperBackground>

        </>
    )
}

const Dad = () => {
    const { githubState } = UseGithub()

    return (
        <>
            <S.WrapperBackground>
                <S.Wrapper>
                    <Header />

                    <div>
                        <S.WrapperAvatar src={githubState.user.avatar} alt="avataruser" />
                    </div>
                    <div>
                        <h1>{githubState.user.name}</h1>
                        <S.WrapperUserGeneric>
                            <h4>Github:</h4>
                            <a
                                href={githubState.user.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {githubState.user.login}
                            </a>
                        </S.WrapperUserGeneric>


                        <S.WrapperUserGeneric>
                            <h5>Location:</h5>
                            <span>{githubState.user.location}</span>
                        </S.WrapperUserGeneric>
                    </div>

                    <S.WrapperStatusCount>
                        <S.WrapperUserGeneric>
                            <div>
                                <h4>Followers</h4>
                                <span> {githubState.user.followers}</span>
                            </div>
                        </S.WrapperUserGeneric>

                        <S.WrapperUserGeneric>
                            <div>
                                <h4>Followings</h4>
                                <span> {githubState.user.following}</span>
                            </div>
                        </S.WrapperUserGeneric>

                        <S.WrapperUserGeneric>
                            <div>
                                <h4>Repos</h4>
                                <span>{githubState.user.public_repos}</span>
                            </div>
                        </S.WrapperUserGeneric>
                    </S.WrapperStatusCount>

                </S.Wrapper >
            </S.WrapperBackground>
        </>
    )
}

export { Profile, Dad }
