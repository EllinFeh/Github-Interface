import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (

        <div>
            <S.WrapperDad>
                <S.WrapperBackground>
                    <S.Wrapper>

                        <S.WrapperGithub src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="avataruser" />

                           <div>
                                <S.WrapperAvatar src="https://avatars.githubusercontent.com/u/88490490?v=4" alt="avataruser" />
                            </div>
                      
                        <S.WrapperH1>
                            <h1>Elison Felipe</h1>
                            <h5>Username: EllinFeh</h5>
                        </S.WrapperH1>

                            <S.WrapperStatusCount>
                                <div>
                                    <h4>Followers</h4>
                                    <span>154</span>
                                </div>

                                <div>
                                    <h4>Starreds</h4>
                                    <span>21</span>
                                </div>

                                <div>
                                    <h4>Followings</h4>
                                    <span>8</span>
                                </div>
                            </S.WrapperStatusCount>


                    </S.Wrapper >
                </S.WrapperBackground>
            </S.WrapperDad>

        </div>
    )
}

export default Profile