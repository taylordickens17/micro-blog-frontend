import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { posts } from "../post.config";

const PostView = () => {
  let params = useParams();
  let postIndex = posts.find((post) => post.id === Number(params.postId));

  return (
    <div>
      <Post postUrl={postIndex?.location || ""} />
    </div>
  );
};

export default PostView;
