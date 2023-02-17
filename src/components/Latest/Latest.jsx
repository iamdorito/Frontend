// import "./latest.scss";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Latest = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newsIndex, setNewsIndex] = useState(0);

  const fetchLatestNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=football&apiKey=bf9d51a947924d10bbfb46d3548e0be8"
    );
    const data = await response.json();
    return data.articles;
  };

  useEffect(() => {
    const getLatestNews = async () => {
      setLoading(true);
      const latestNews = await fetchLatestNews();
      setLatestNews(latestNews);
      setLoading(false);
    };
    getLatestNews();
  }, []);

  const handleClick = () => {
    setNewsIndex((newsIndex + 4) % latestNews.length);
  };

  const filteredNews = latestNews.slice(newsIndex, newsIndex + 4);

  return (
    <LatestDiv>
      {loading ? (
        <Spinner />
      ) : (
        filteredNews.map((news) => {
          return (
            <NewsDiv key={news.title}>
              <img src={news.urlToImage} alt="" />
              <ArticleName>{news.title}</ArticleName>
            </NewsDiv>
          );
        })
      )}
      <Button onClick={handleClick}></Button>
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

const Button = styled.button`
  background: linear-gradient(326.9deg, #12222b 5.79%, #123e87 234.21%);
`;

const Spinner = styled.div`
  margin: auto;
  border: 0.2rem solid rgba(0, 0, 0, 0.1);
  border-top-color: #0077ff;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Latest;
