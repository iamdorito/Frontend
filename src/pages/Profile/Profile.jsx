import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [toggleFollow, setToggleFollow] = useState(false);

  const handeFollowButton = () => {
    setToggleFollow(!toggleFollow);
  };

  return (
    <ProfileWrapper>
      <ImagesWrapper>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.RAISaxyuqz3ZEnMFq_DgRgHaJk&pid=Api&P=0"
          alt=""
          className="cover"
        />
        <img
          src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://pippenainteasy.com/wp-content/uploads/getty-images/2016/04/1130154358.jpeg&c=sc&w=3200&h=2133"
          alt=""
          className="profile-pic"
        />
      </ImagesWrapper>
      <ProfileContainer>
        <div className="profile-info">
          <div className="left">
            <a href="http://github.com">
              <WebhookOutlinedIcon fontSize="small" />
            </a>
            <a href="www.google.com">
              <LanguageOutlinedIcon fontSize="small" />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.username}</span>
            <div className="info">
              <div className="item">
                <span>{`@${currentUser.username}`}</span>
              </div>
            </div>
            <div onClick={handeFollowButton}>
              {toggleFollow ? (
                <button>Following</button>
              ) : (
                <button>Follow</button>
              )}
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </ProfileContainer>
      <Posts />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  background-color: black;
  height: 100%;
`;

const ImagesWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 200px;
  }
`;

const ProfileContainer = styled.div`
  padding: 20px 70px;

  .profile-info {
    height: 180px;
    background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
    border-radius: 20px 20px 0 0;
    color: white;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .left {
      flex: 1;
      display: flex;
      gap: 10px;

      a {
        color: white;
      }
    }

    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      span {
        font-size: 30px;
        font-weight: 500;
      }

      .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: white;

          span {
            font-size: 12px;
          }
        }
      }
      button {
        border: none;
        background-color: #5271ff;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;

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

    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    .profile-info {
      flex-direction: column;
      justify-content: center;
      height: auto;
      padding: 20px;
      text-align: center;

      .left,
      .right {
        display: none;
      }

      .center {
        flex: auto;
        gap: 20px;

        span {
          font-size: 24px;
        }

        button {
          margin-top: 20px;
        }
      }
    }
  }
`;

export default Profile;
