import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogHello from "./LogHello";
import { postType, userType, commentType } from "../types/types";

const PostList = ({ posts, users, comments }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <h3>Comments</h3>
            <ul>
              {comments
                .filter((comment) => comment.postId === post.id)
                .map((comment) => (
                  <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>

            <p>
              Author: {users.find((user) => user.id === post.userId)?.username}
            </p>
            <Link to={`/post/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(postType),
  comments: PropTypes.arrayOf(commentType),
  users: PropTypes.arrayOf(userType),
};

export default LogHello(PostList, { componentDisplayName: "PostList" });
