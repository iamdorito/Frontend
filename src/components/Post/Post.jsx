import "./post.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import user2 from "../../assets/unrevealed-nft-2.jpg";

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "../comments/Comments";

const Post = ({ post, onDeletePost, onUpdateChange }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleCommentClick = () => {
    setCommentOpen(!commentOpen);
  };

  const handleMoreClick = () => {
    setMoreOpen(!moreOpen);
  };

  const handleDeleteClick = () => {
    const config = {
      method: "DELETE",
    };

    fetch(`http://localhost:3000/posts/${post.id}`, config)
      .then((resp) => resp.json())
      .then(() => {
        onDeletePost(post.id);
      });
  };

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={user2} alt={user2} />
            <div className="details">
              <Link
                to={`/profile/1`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.id}</span>
              </Link>
              <span className="date">{post.created_at}</span>
            </div>
          </div>
          <div className="items">
            <MoreHorizOutlinedIcon onClick={handleMoreClick} />
            {moreOpen && (
              <div className="pop-ups">
                <button>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            )}
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.image} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            25 likes
          </div>
          <div className="item" onClick={handleCommentClick}>
            <ForumOutlinedIcon />
            25 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
