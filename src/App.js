import Post from "./Post";
import "./App.css";

let posts = {
  post1: "./posts/test.md",
  post2: "./posts/test2.md",
  post3: "./posts/test3.md",
};

function App() {
  return (
    <div className="main-container">
      {Object.values(posts).map((url) => {
        return <Post key={url} postUrl={url} />;
      })}
    </div>
  );
}

export default App;
