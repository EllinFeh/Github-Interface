import Layout from "./components/layout";
import {Dad, Profile} from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/githubHooks"
import NoSearch from "./components/noSearch"




function App() {
  const { githubState } = useGithub();
  return (

    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (<p>Loading...</p>) : (<><Dad /><Repositories />
          </>
          )}
        </>
        
      ) : (
       <> <Profile/> <NoSearch /> </>
      )}

    </Layout>  

  );
}

export default App;
