import defaultPic from "../../assets/default-user.png";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

import { useState, useEffect, useContext } from "react";
import Post from "../Post/Post";
import styled from "styled-components";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((posts) => setPosts(posts));
  }, []);

  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

  const AddPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  const handleDeletePost = (id) => {
    const newData = posts.filter((post) => post.id !== id);
    return setPosts(newData);
  };

  const handleUpdatePost = (id, updatedPost) => {
    const newData = posts.map((post) => {
      if (post.id === id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    return setPosts(newData);
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc: newPost }),
    });
    const post = await response.json();
    AddPost(post);
  };

  return (
    <PostDiv>
      <NewPostDiv>
        <img src={defaultPic} alt="" />
        <input
          type="text"
          name="post"
          placeholder="What's on your mind?"
          required
          onChange={handleInputChange}
        />
        <div className="items">
          <CollectionsOutlinedIcon />
        </div>
        <button onClick={handleAddPost}>Post</button>
      </NewPostDiv>
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          onDeletePost={handleDeletePost}
          onUpdateChange={handleUpdatePost}
          onInputChange={handleInputChange}
          newPost={newPost}
        />
      ))}
    </PostDiv>
  );
};

export default Posts;

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 20px;
`;

const NewPostDiv = styled.div`
  background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 100px;
  padding: 20px;

  .items {
    color: white;
    display: flex;
  }

  input {
    flex: 5;
    padding: 10px;
    width: 50%;
    height: 50%;
    border: none;
    background-color: transparent;
    color: white;
    background-color: black;
    border-radius: 10px;
  }

  button {
    border: none;
    background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
      background-image: linear-gradient(
        to right,
        #25aae1,
        #40e495,
        #30dd8a,
        #2bb673
      );
      box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
