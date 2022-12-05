import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Header, EditPage, Footer } from "./Components/index";
import MakePost from "./Components/Posts/MakePost";

function App() {
  const [edited, setEdited] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edited ? (
        <EditPage setEdited={setEdited} />
      ) : (
        <Header setEdited={setEdited} />
      )}
      {pending && <p className="loading">loading.</p>}
      {!edited && error && (
        <p className="error">Error when fetching data from server !!!</p>
      )}
      <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
      {isOpenPost && <MakePost />}
    </div>
  );
}

export default App;
