import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./global/resetCSS";
import Repositories from "./components/repositories";
import GithubProvider from "./providers/githubprovider";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>

          <Profile />
          <Repositories />

        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
