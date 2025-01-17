import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

const Post = ({ _id, title, createdAt, summary, cover, content, author }) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={cover} alt="" />
        </Link>
      </div>

      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">lakshay</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
