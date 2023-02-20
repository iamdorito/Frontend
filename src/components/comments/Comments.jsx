import defaultPic from "../../assets/default-user.png";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { CommentContext } from "../../context/CommentContext";

const Comments = () => {
  const [newComment, setNewComments] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { comments, setComments } = useContext(CommentContext);

  // useEffect(() => {
  //   fetch("http://localhost:3000/comments")
  //     .then((resp) => resp.json())
  //     .then((comments) => setComments(comments));
  // }, []);

  const handleInputComment = (e) => {
    setNewComments(e.target.value);
  };

  const AddComment = (newComment) => {
    setComments((comments) => [...comments, newComment]);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: newComment }),
    });
    const comment = await response.json();
    AddComment(comment);
  };

  return (
    <CommentsDiv>
      <WriteDiv>
        <img src={defaultPic} alt="" />
        <input
          type="text"
          name="comment"
          placeholder="write a comment"
          onChange={handleInputComment}
          required
        />
        <button onClick={handleAddComment}>Send</button>
      </WriteDiv>
      {comments.map((comment) => (
        <CommentDiv key={comment.id}>
          <img src={defaultPic} alt="" />
          <InfoDiv>
            <span>{currentUser.username}</span>
            <p>{comment.description}</p>
          </InfoDiv>
          <Date>1 hour ago</Date>
        </CommentDiv>
      ))}
    </CommentsDiv>
  );
};

export default Comments;

const CommentsDiv = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const WriteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0px;

  input {
    flex: 5;
    padding: 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
  }

  button {
    border: none;
    background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
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
`;

const CommentDiv = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const InfoDiv = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;

  span {
    font-weight: 500;
  }

  p {
    color: white;
  }
`;

const Date = styled.span`
  flex: 1;
  align-self: center;
  color: gray;
  font-size: 12px;
`;
