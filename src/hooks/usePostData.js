import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchComments, fetchUsers, fetchPosts } from "../services/fetchData";
import { postType, userType, commentType } from "../types/types";

const usePostData = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        const fetchedComments = await fetchComments();
        const fetchedUsers = await fetchUsers();

        setPosts(fetchedPosts);
        setComments(fetchedComments);
        setUsers(fetchedUsers);
      } catch (error) {
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, comments, users, loading, error };
};

usePostData.propTypes = {
  posts: PropTypes.arrayOf(postType),
  comments: PropTypes.arrayOf(commentType),
  users: PropTypes.arrayOf(userType),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default usePostData;
