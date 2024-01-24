import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostDetails from "../components/PostDetails";

describe("PostDetails Component", () => {
  const mockPost = {
    id: 1,
    title: "Test Post",
    body: "This is a test post.",
  };

  const mockUser = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
  };

  const mockComments = [
    { id: 1, postId: 1, body: "Comment 1" },
    { id: 2, postId: 1, body: "Comment 2" },
  ];

  it("renders PostDetails component correctly", () => {
    render(
      <PostDetails post={mockPost} user={mockUser} comments={mockComments} />
    );
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
    expect(screen.getByText(`Author: ${mockUser.name}`)).toBeInTheDocument();
    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(mockComments.length);
  });
});
