import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import PostDetails from "../components/PostDetails";
import usePostData from "../hooks/usePostData";
import { postType, userType, commentType } from "../types/types";

const PostDetailsPage = () => {
  const { id } = useParams();
  const { posts, comments, users } = usePostData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [posts, comments, users]);

  const postDetails = posts.find((post) => post.id === parseInt(id || "0"));
  const postUser = users.find((user) => user.id === postDetails?.userId);
  const postComments = comments.filter(
    (comment) => comment.postId === postDetails?.id
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {postDetails && (
            <PostDetails
              post={postDetails}
              user={postUser}
              comments={postComments}
            />
          )}
          <Link to="/posts">Back to Posts</Link>
        </>
      )}
    </div>
  );
};

PostDetailsPage.propTypes = {
  posts: PropTypes.arrayOf(postType),
  comments: PropTypes.arrayOf(commentType),
  users: PropTypes.arrayOf(userType),
};

export default PostDetailsPage;
