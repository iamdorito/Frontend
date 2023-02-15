import { useState } from "react";
import defaultPic from "../../assets/default-user.png";
import styled from "styled-components";

const Comments = () => {
  // const [comments, setComments] = useState();

  const comments = [
    {
      id: 1,
      desc: "Yo, I agree but but but but but but but but",
      name: "Reese Marshal",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "This doesn't make sense! It's not working and I'm always getting an error",
      name: "Aura Gomez",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <CommentsDiv>
      <WriteDiv>
        <img src={defaultPic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </WriteDiv>
      {comments.map((comment) => (
        <CommentDiv key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <InfoDiv>
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
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
