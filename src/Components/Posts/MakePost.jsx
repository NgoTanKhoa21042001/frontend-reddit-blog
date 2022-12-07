import React from "react";
import "./post.css";
import { useState } from "react";
import Input from "../InputFields/Input";
import { createPost } from "../../redux/PostSlice";
import { useDispatch } from "react-redux";

const MakePost = ({ isOpenPost, setOpen }) => {
  const [title, setTitle] = useState("Add a title");
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("Add some description");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setOpen(!isOpenPost);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx,
    };

    // dispatch 1 action
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        inputType="textarea"
        classStyle="makepost-title"
        label="Title"
        data={title}
        setData={setTitle}
      />
      <Input
        inputType="textarea"
        classStyle="makepost-desc"
        label="Description"
        data={desc}
        setData={setDesc}
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, indx) => {
          return (
            <button
              key={indx}
              className={`${
                selectedIdx === indx
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIdx(indx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
