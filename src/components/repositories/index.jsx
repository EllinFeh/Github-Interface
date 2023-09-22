import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/githubHooks";
import RepositoryItem from "../repositories-itens";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);
  
  return (
    <S.WrapperMain>
        {hasUserForSearchrepos ? (
          <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <div>
              <S.WrapperTabList>

                <S.WrapperTab>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                  </svg>
                </S.WrapperTab>

                <S.WrapperTab>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </S.WrapperTab>
              </S.WrapperTabList>

              <S.WrapperTabPanel>
                <S.WrapperList>
                  {githubState.repositories.map((item) => (
                    <RepositoryItem
                      key={item.id}
                      name={item.name}
                      linkRepo={item.html_url}
                      fullName={item.full_name}
                    />
                  ))}
                </S.WrapperList>

              </S.WrapperTabPanel>

              <S.WrapperTabPanel>
                <S.WrapperList>
                  {githubState.starred.map((item) => (
                    <RepositoryItem
                      key={item.id}
                      name={item.name}
                      linkRepo={item.html_url}
                      fullName={item.full_name}
                    />
                  ))}

                </S.WrapperList>

              </S.WrapperTabPanel>
            </div>
          </S.WrapperTabs>
        ) : (
          <></>
        )}

    </S.WrapperMain>
  );
};

export default Repositories;