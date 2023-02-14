import "./posts.scss";
import Post from "../Post/Post";
import user1 from "../../assets/unrevealed-nft-3.jpg";
import user2 from "../../assets/unrevealed-nft-2.jpg";
import defaultPic from "../../assets/default-user.png";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "James John",
      userId: 1,
      profilePic: user1,
      desc: "What's poppin, brand new kicks what!",
      img: "http://www.dumpaday.com/wp-content/uploads/2019/12/pictures-10-2.jpg",
    },
    {
      id: 2,
      name: "Dorothy",
      userId: 2,
      profilePic: user2,
      desc: "Lorem Ipsum, Lorem Ipsum, and others are Lorem Ipsum",
      img: "https://gateway.pinata.cloud/ipfs/QmXc5DLF81s1RLGbvZVhohjRTcjHciZ9CumccP56jwnk6Z/1.png",
    },
    {
      id: 2,
      name: "Gabriella",
      userId: 2,
      profilePic: user2,
      desc: "Lorem Ipsum, Lorem Ipsum, and others are Lorem Ipsum",
    },
  ];
  return (
    <div className="posts">
      <div className="write">
        <img src={defaultPic} alt="" />
        <input type="text" placeholder="What's on your mind?" />
        <div className="items">
          <AttachmentOutlinedIcon />
          <EmojiEmotionsOutlinedIcon />
          <CollectionsOutlinedIcon />
        </div>
        <button>Post</button>
      </div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
