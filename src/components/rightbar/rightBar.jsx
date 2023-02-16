import "./rightbar.scss";
import nfticon2 from "../../assets/unrevealed-nft-3.jpg";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useState, useEffect } from "react";
import Users from "../Users/Users";

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
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>New Users</span>
          {listOfUsers}
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
