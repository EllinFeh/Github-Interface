import React, { Children } from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>

      <Layout>

        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="avataruser" />
          <h1>Elison Felipe</h1>
          <h3>Username</h3>
          <span>felipe</span>

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

        </div>

        <div className="repositories"></div>
        <div className="starreds"></div>

      </Layout>
      
    </main>
  );
}

export default App;
