import { useState, useEffect } from "react";
import defaultPic from "../../assets/default-user.png";
import styled from "styled-components";

const Comments = () => {
  // const [comments, setComments] = useState();
  const [commentsData, setCommentsData] = useState([])
  const [commentInput, setCommentInput] = useState({
    description: ""
  })

  console.log(commentsData)
 
  useEffect(() => {
    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(postData => setCommentsData(postData))
  }, [])


  function createNewComment(event){
    fetch('http://localhost:3000/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentInput)
    })
    .then(response => response.json())
    .then(newComment => setCommentsData([...commentsData, newComment]))
  }

  function handleChangeForComment(event){
    setCommentInput({...commentInput, [event.target.name]: event.target.value})
  }


  return (
    <CommentsDiv>
      <WriteDiv>
        <img src={defaultPic} alt="" />
        <input onChange={handleChangeForComment}name="description" type="text" placeholder="write a comment" />
        <button onClick={createNewComment}>Send</button>
      </WriteDiv>
      {commentsData.map((comment) => (
        <CommentDiv key={comment.id}>
          <img src={defaultPic} alt="" />
          <InfoDiv>
            <span>Random Name</span>
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
