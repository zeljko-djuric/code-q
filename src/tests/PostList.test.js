import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PostList from "../components/PostList";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe("PostList Component", () => {
  const mockPosts = [
    { id: 1, title: "Test Post 1", body: "This is a test post 1.", userId: 1 },
    { id: 2, title: "Test Post 2", body: "This is a test post 2.", userId: 2 },
  ];

  const mockUsers = [
    { id: 1, username: "user1" },
    { id: 2, username: "user2" },
  ];

  const mockComments = [
    { id: 1, postId: 1, body: "Comment 1" },
    { id: 2, postId: 1, body: "Comment 2" },
    { id: 3, postId: 2, body: "Comment 3" },
  ];

  it("renders PostList component correctly", () => {
    render(
      <Router>
        <PostList posts={mockPosts} users={mockUsers} comments={mockComments} />
      </Router>
    );

    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.getByText("Test Post 2")).toBeInTheDocument();

    const postListItems = screen.getAllByRole("listitem");
    const filteredPostItems = postListItems.filter((item) =>
      /Test Post \d/.test(item.textContent)
    );
    expect(filteredPostItems).toHaveLength(mockPosts.length);

    mockPosts.forEach((post, index) => {
      const authorUsername = mockUsers.find((user) => user.id === post.userId)
        ?.username;
      expect(screen.getByText(`Author: ${authorUsername}`)).toBeInTheDocument();
    });
  });
});
