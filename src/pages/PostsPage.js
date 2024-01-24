import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import usePostData from "../hooks/usePostData";
import { postType, userType, commentType } from "../types/types";

const PostsPage = () => {
  const { posts, comments, users } = usePostData();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [posts, comments, users]);

  const filteredPosts = posts.filter((post) => {
    const authorUsername = users.find((user) => user.id === post.userId)
      ?.username;
    return (
      authorUsername?.toLowerCase().includes(searchTerm.toLowerCase()) || false
    );
  });

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostList posts={filteredPosts} users={users} comments={comments} />
      )}
    </div>
  );
};

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(postType),
  comments: PropTypes.arrayOf(commentType),
  users: PropTypes.arrayOf(userType),
};

export default PostsPage;
