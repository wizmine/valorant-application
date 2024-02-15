import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title to="/">VALORANT</Title>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4600801a;
  border-bottom: 1px solid #3c0080;
  box-shadow: 0px 0px 10px #4d008075;
`;

const Title = styled(Link)`
  @import url("https://fonts.cdnfonts.com/css/valorant");

  color: rgb(126, 57, 255);
  font-family: "VALORANT", sans-serif;
  font-size: 24px;
  font-weight: 600;
`;
