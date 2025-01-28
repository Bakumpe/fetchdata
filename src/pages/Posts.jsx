import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState(null);

  async function fetchPosts() {
    let apiUrl = "https://dummyjson.com/posts";
    let response = await fetch(apiUrl);
    let postData = await response.json();
    console.log(postData);
    setPosts(postData.posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <h1>List of Posts</h1>
        {posts ? (
          posts.map((post) => (
            <li className="posts">
              <Link to={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </>
  );
}

export default Posts;
