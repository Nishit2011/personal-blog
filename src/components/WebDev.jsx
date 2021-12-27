import React from "react";
import PostCard from "./reusables/PostCard";
import style from "../app.module.css";

const WebDev = () => {
  return (
    <div className={style.webdevContainer}>
      {/* <PostCard title="react-1" content="Lorem Ipsum"></PostCard>
      <PostCard title="react-2" content="Lorem Ipsum2"></PostCard>
      <PostCard title="react-3" content="Lorem Ipsum3"></PostCard> */}

      <div className={style.webdevBlog}>
        <h3>Heading 1</h3>
        <h5>Lorem Ipsum</h5>
        <h6>Date: 30 January, 2021</h6>
      </div>
      <div className={style.webdevBlog}>
        <h3>Heading 2</h3>
        <h5>Lorem Ipsum</h5>
        <h6>Date: 29 January, 2021</h6>
      </div>
      <div className={style.webdevBlog}>
        <h3>Heading 3</h3>
        <h5>Lorem Ipsum</h5>
        <h6>Date: 28 January, 2021</h6>
      </div>
    </div>
  );
};

export default WebDev;
