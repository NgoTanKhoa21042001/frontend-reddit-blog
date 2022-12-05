import React from "react";
import "./Footer.css";
const Footer = ({ isOpenPost, setOpen }) => {
  const handleClick = () => {
    setOpen(!isOpenPost);
  };
  return (
    <footer className="footer-container">
      <div className="footer-plus" onClick={handleClick}>
        {isOpenPost ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
