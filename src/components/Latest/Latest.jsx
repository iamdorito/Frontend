// import "./latest.scss";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Latest = () => {
  const [latestNews, setLatestNews] = useState([]);

  let newsIndex = 0;

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=football&apiKey=bf9d51a947924d10bbfb46d3548e0be8"
    )
      .then((resp) => resp.json())
      .then((data) => setLatestNews(data.articles));
  }, []);

  const filteredNews = latestNews.slice(newsIndex, newsIndex + 4);
  console.log(filteredNews);

  return (
    <LatestDiv>
      {filteredNews.map((news) => {
        return (
          <NewsDiv key={news.title}>
            <img src={news.urlToImage} alt="" />
            <ArticleName>{news.title}</ArticleName>
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
