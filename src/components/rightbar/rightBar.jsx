import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useState, useEffect } from "react";

import nfticon2 from "../../assets/unrevealed-nft-3.jpg";
import defaultUser from "../../assets/default-user.png";

import Users from "../Users/Users";
import styled from "styled-components";

const Rightbar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const listOfUsers = users.map((user) => {
    return <Users key={user.id} user={user} name={user.username} />;
  });

  return (
    <RightBarDiv>
      <div className="container">
        <div className="item">
          <span>New Users</span>
          {listOfUsers}
        </div>
        <div className="item">
          <span>People you follow</span>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt="" />
              <span>Ivan</span>
            </div>
            <MoreHorizOutlinedIcon />
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={nfticon2} alt="" />
              <span>Gabriella</span>
            </div>
            <MoreHorizOutlinedIcon />
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={nfticon2} alt="" />
              <span>Dorothy</span>
            </div>
            <MoreHorizOutlinedIcon />
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={nfticon2} alt="" />
              <span>Aura</span>
            </div>
            <MoreHorizOutlinedIcon />
          </div>
        </div>
      </div>
    </RightBarDiv>
  );
};

const RightBarDiv = styled.div`
  flex: 3;
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  background-color: black;
  box-shadow: 18px 4px 35px rgba(0, 0, 0, 0.02);
  overflow: scroll;
  color: orange;

  &::-webkit-scrollbar {
    display: none;
  }

  .container {
    padding: 20px;

    .item {
      background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 10px;

      span {
        color: white;
      }

      .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;

        .userInfo {
          display: flex;
          align-items: center;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
          }

          span {
            font-weight: 500;
          }
        }
        .buttons {
          display: flex;
          align-items: center;
          gap: 10px;

          button {
            border: none;
            padding: 5px;
            border-radius: 5px;
            color: white;
            cursor: pointer;

            &:first-child {
              background: linear-gradient(
                326.9deg,
                #393984 5.79%,
                #135e87 283.21%
              );
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

            &:last-child {
              background: linear-gradient(
                326.9deg,
                #393984 5.79%,
                #135e87 283.21%
              );
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
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Rightbar;
