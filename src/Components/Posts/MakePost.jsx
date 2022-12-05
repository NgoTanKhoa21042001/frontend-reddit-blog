import React from "react";
import "./post.css";
import { useState } from "react";
import Input from "../InputFields/Input";

const MakePost = () => {
  const [title, setTitle] = useState("Add a title");
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save">Post</p>
      </div>
      <Input
        inputType="textarea"
        classStyle="makepost-title"
        label="Title"
        data={title}
        setData={setTitle}
      />
    </section>
  );
};

export default MakePost;
