import Modal from "../Modal/Modal";

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import defaultUser from "../../assets/default-user.png";

import Comments from "../comments/Comments";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Link } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";

const Post = ({
  post,
  onDeletePost,
  onUpdateChange,
  onInputChange,
  newPost,
}) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleCommentClick = () => {
    setCommentOpen(!commentOpen);
  };

  const handleMoreClick = () => {
    setMoreOpen(!moreOpen);
  };

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        onDeletePost(post.id);
      } else {
        console.log("Failed to delete post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeDescription = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ desc: newPost }),
      });
      if (response.ok) {
        const updatedPost = await response.json();
        onUpdateChange(post.id, updatedPost);
        setIsEditMode(false);
      } else {
        console.log("Failed to update post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const liked = false;

  // const timestamp = post.created_at;
  // const now = new Date();

  // const diff = Math.abs(now - timestamp);
  // const hours = Math.floor(diff / (1000 * 60 * 60));
  // const formattedDate = `${hours} ago`;

  return (
    <PostContainer>
      <Container>
        <UserContainer>
          <UserInfo>
            <UserImage src={defaultUser} alt={defaultUser} />
            <UserDetails>
              <Link
                to={`/profile/1`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <UserName>{currentUser.username}</UserName>
              </Link>
              <Date>{post.createdAt}</Date>
            </UserDetails>
          </UserInfo>
          <div className="items">
            <MoreHorizOutlinedIcon onClick={handleMoreClick} />
            {moreOpen && (
              <PopUps>
                <button onClick={handleEditMode}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </PopUps>
            )}
          </div>
        </UserContainer>
        <Content>
          <p>{post.desc}</p>
        </Content>
        <Info>
          <Item>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            25 likes
          </Item>
          <Item onClick={handleCommentClick}>
            <ForumOutlinedIcon />
            25 comments
          </Item>
          <Item>
            <ShareOutlinedIcon />
            Share
          </Item>
        </Info>
        {commentOpen && <Comments />}
      </Container>
      <Modal
        show={isEditMode}
        post={post}
        onClick={handleEditMode}
        onChange={handleChangeDescription}
        onInputChange={onInputChange}
        newPost={newPost}
      />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
  border-radius: 15px;
`;

const Container = styled.div`
  padding: 20px;
  color: orange;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 20px;
  color: white;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
`;

const Content = styled.div`
  margin: 20px 0px;
  color: white;

  input {
    border: none;
    width: 50%;
    padding: 10px;
    height: 50px;
    border-radius: 5px;
    background: white;
    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: orange;
`;

const PopUps = styled.div`
  button {
    width: 50px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    margin: 5px;
    text-align: center;
    border: none;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;

    &:first-child {
      background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
      &:hover {
        background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
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

    &:last-child {
      background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
      &:hover {
        background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
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
  }
`;

export default Post;
