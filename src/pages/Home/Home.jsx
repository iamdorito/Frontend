import Latest from "../../components/Latest/Latest";
import Posts from "../../components/Posts/Posts";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeStyles>
      <Latest />
      <Posts />
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  background-color: black;
  height: 100%;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

export default Home;
