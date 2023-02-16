import React from "react";
import nfticon2 from "../../assets/unrevealed-nft-3.jpg";

const Users = ({ name }) => {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={nfticon2} alt="" />
        <span>{name}</span>
      </div>
      <div className="buttons">
        <button>Follow</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Users;
