import "./profile.scss";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://4.bp.blogspot.com/-dPBsZCgc9-o/XVS3Swg2E6I/AAAAAAAABD0/auWvVjsu-ks1FXLrIohWEGnKswQGnIjeQCLcBGAs/s1600/developer-on-computer.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://pippenainteasy.com/wp-content/uploads/getty-images/2016/04/1130154358.jpeg&c=sc&w=3200&h=2133"
          alt=""
          className="profile-pic"
        />
      </div>
      <div className="profile-container">
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
            <span>Jabronie</span>
            <div className="info">
              <div className="item">
                <span>@Jabronie</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
