import "./post.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const handleClick = () => {
    setCommentOpen(!commentOpen);
  };

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt={post.profilePic} />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            25 likes
          </div>
          <div className="item" onClick={handleClick}>
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
