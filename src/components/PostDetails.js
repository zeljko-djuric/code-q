import React from "react";
import LogHello from "./LogHello";
import { postType, userType, commentType } from "../types/types";
import PropTypes from "prop-types";

const PostDetails = ({ post, user, comments }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Author: {user.name}</p>
      <p>Username: {user.username}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

PostDetails.propTypes = {
  post: postType,
  user: userType,
  comments: PropTypes.arrayOf(commentType),
};

export default LogHello(PostDetails, { componentDisplayName: "PostDetails" });
