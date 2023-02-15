// import "./latest.scss";
import styled from "styled-components";

const Latest = () => {
  const latest = [
    {
      id: 1,
      name: "Medium",
      img: "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "The New York Times",
      img: "https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 3,
      name: "Washington Post",
      img: "https://images.pexels.com/photos/3886870/pexels-photo-3886870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "CoinDesk",
      img: "https://images.pexels.com/photos/7682249/pexels-photo-7682249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <LatestDiv>
      {latest.map((news) => {
        return (
          <NewsDiv key={news.id}>
            <img src={news.img} alt="" />
            <ArticleName>{news.name}</ArticleName>
          </NewsDiv>
        );
      })}
    </LatestDiv>
  );
};

const LatestDiv = styled.div`
  display: flex;
  gap: 10px;
  height: 250px;
  margin-bottom: 30px;
  background-color: black;
  padding: 10px;
`;

const NewsDiv = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArticleName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-weight: 500;
`;

export default Latest;
