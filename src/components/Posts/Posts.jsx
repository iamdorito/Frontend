import "./posts.scss";
import { useState, useEffect } from "react";
import Post from "../Post/Post";

import defaultPic from "../../assets/default-user.png";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const Posts = () => {
  const initialState = {
    desc: "",
  };

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(initialState);

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

  const handleUpdatePost = (id) => {
    const newData = posts.map((post) => post.id === id);
    return setPosts(newData);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc: newPost }),
    };

    fetch("http://localhost:3000/posts", configObj)
      .then((resp) => resp.json())
      .then((post) => {
        AddPost(post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="posts">
      <div className="write">
        <img src={defaultPic} alt="" />
        <input
          type="text"
          placeholder="What's on your mind?"
          required
          onChange={handleInputChange}
        />
        <div className="items">
          <CollectionsOutlinedIcon />
        </div>
        <button onClick={handleAddPost}>Post</button>
      </div>
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
    </div>
  );
};

export default Posts;
