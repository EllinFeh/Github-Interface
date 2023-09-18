import React, { createContext, useState } from 'react'
import api from "../services/api";

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            login: undefined,
            avatar: undefined,
            id: undefined,
            html_url: undefined,
            name: undefined,
            company: undefined,
            location: undefined,

            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,

        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));

        api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;