import React from "react";
import style from "../../app.module.css";

const PostCard = ({ title, content }) => {
  return (
    <div className={style.postcard}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{content}</div>
    </div>
  );
};

export default PostCard;
