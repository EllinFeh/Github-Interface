import Layout from "./components/layout";
import Profile from "./components/profile";

function App() {
  return (
    <main>

      <Layout>

        <Profile />

        <div className="repositories"></div>
        <div className="starreds"></div>

      </Layout>

    </main>
  );
}

export default App;
