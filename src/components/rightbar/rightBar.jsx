import "./rightbar.scss";
import nfticon2 from "../../assets/unrevealed-nft-3.jpg";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>New Users</span>
          <div className="user">
            <div className="userInfo">
              <img src={nfticon2} alt="" />
              <span>Brendan</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={nfticon2} alt="" />
              <span>Reese</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>People you follow</span>
          <div className="user">
            <div className="userInfo">
              <img src={nfticon2} alt="" />
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
    </div>
  );
};

export default Rightbar;
