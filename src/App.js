import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Header, EditPage, Footer } from "./Components/index";
import MakePost from "./Components/Posts/MakePost";
import Post from "./Components/Posts/Post";

function App() {
  const [edited, setEdited] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edited ? (
        <EditPage setEdited={setEdited} />
      ) : !edited && !isOpenPost ? (
        <>
          <Header setEdited={setEdited} />
          <div className="post-container">
            <Post />
          </div>
          <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
          {/* hiện cái header  */}
          <Header edited={edited} setEdited={setEdited} />
          <MakePost isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      )}
      {pending && <p className="loading">loading.</p>}
      {!edited && error && (
        <p className="error">Error when fetching data from server !!!</p>
      )}
    </div>
  );
}

export default App;
