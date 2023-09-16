import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (

        <div>
        
            <S.WrapperBackground>
            <S.Wrapper>

                <S.WrapperAvatar src="https://avatars.githubusercontent.com/u/88490490?v=4" alt="avataruser" />


                <div>
                    <h1>Elison Felipe</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <span>EllinFeh</span>
                    </S.WrapperUsername>


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

                </div>


            </S.Wrapper >
            </S.WrapperBackground>

         
        </div>
    )
}

export default Profile