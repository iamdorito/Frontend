import nfticon from "../../assets/unrevealed-nft-2.jpg";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultUser from "../../assets/default-user.png";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Leftbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogout = () => {
    setCurrentUser(null);
    fetch("http://localhost:3000/logout", { method: "DELETE" });
  };
  return (
    <LeftSide>
      <Container>
        <Menu>
          <div className="user">
            <img src={defaultUser} alt="" />
            <span>{currentUser.username}</span>
          </div>
          <div className="item">
            <Link to="/" style={{ color: "white" }}>
              <GridViewOutlinedIcon />
            </Link>
            <span>Timeline</span>
          </div>
          <div className="item">
            <Link to="/profile/:id" style={{ color: "white" }}>
              <Person2OutlinedIcon />
            </Link>
            <span>Profile</span>
          </div>
          <div className="item">
            <InfoOutlinedIcon />
            <span>Help & Support</span>
          </div>
          <div className="item">
            <Link to="/login" style={{ color: "white" }}>
              <ExitToAppOutlinedIcon />
            </Link>
            <span onClick={handleLogout}>Logout</span>
          </div>
        </Menu>
      </Container>
    </LeftSide>
  );
};

const LeftSide = styled.div`
  flex: 1.5;
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
  box-shadow: 18px 4px 35px rgba(0, 0, 0, 0.02);
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: static;
    top: unset;
    height: auto;
    flex: 1;
  }
`;

const Container = styled.div`
  padding: 20px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .user {
    display: block;
    position: relative;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      justify-content: center;
      margin: auto;
      display: block;
    }
    span {
      width: 100%;
      position: absolute;
      left: 50px;
      color: white;
      justify-content: center;
      align-items: center;
    }
  }

  .item {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 30px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 20px;

    .user {
      img {
        width: 50px;
        height: 50px;
      }
      span {
        display: none;
      }
    }

    .item {
      margin-top: 0;
      flex: 0 0 80px;
      img {
        width: 40px;
      }
    }
  }
`;

export default Leftbar;
