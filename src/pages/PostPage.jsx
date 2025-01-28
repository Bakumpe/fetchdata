import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  async function fetchPosts() {
    let apiUrl = `https://dummyjson.com/posts/${id}`;
    let response = await fetch(apiUrl);
    let postData = await response.json();
    console.log(postData);
    setPost(postData);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const handNext = () => {
    //Assuming post IDs are sequential
    const nextId = parseInt(id) + 1;
    window.location.href = `/posts/${nextId}`;
  };

  const handlePrev = () => {
    //Assuming post IDs are sequential
    if(parseInt(id) > 1){
        const prevId = parseInt(id) - 1;
        window.location.href = `/posts/${prevId}`
    }
  };
  return (
    <>
      <div className="bodyforPost">
        <div className="bodyPost">
          {post ? (
            <div className="postBody">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ) : (
            <h1>Loading......</h1>
          )}
        </div>
        <div className="buttons">
          <button onClick={handNext}>Next</button>
          <button onClick={handlePrev}>Prev</button>
        </div>
      </div>
    </>
  );
}

export default PostPage;
