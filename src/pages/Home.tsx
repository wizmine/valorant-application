import styled from "styled-components";

import official from "../assets/official.jpg";
import xlink from "../assets/xlink.jpg";
import ytlink from "../assets/ytlink.jpg";

const Home = () => {
  return (
    <Container>
      <TitleText>WELCOME!</TitleText>
      <InfoBlock>
        <OfficialLink href="https://playvalorant.com/en-gb/">
          <MainImage src={official} alt="official link" />
          <Text>VALORANT</Text>
        </OfficialLink>
        <SecondBlock>
          <XLink href="https://twitter.com/VALORANTukn">
            <SecondImage src={xlink} alt="x link" />
            <Text>Twitter</Text>
          </XLink>
          <YTLink href="https://www.youtube.com/@valorant/featured">
            <SecondImage src={ytlink} alt="youtube link" />
            <Text>YouTube</Text>
          </YTLink>
        </SecondBlock>
      </InfoBlock>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h1`
  color: rgb(126, 57, 255);
`;

const InfoBlock = styled.div`
  margin: 10px;
  display: flex;
  height: 500px;
  width: 700px;
  padding: 15px;
  border: 1px solid #3c0080;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #4d008075;
`;

const OfficialLink = styled.a`
  position: relative;
  width: 50%;
`;

const SecondBlock = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const XLink = styled.a`
  position: relative;
  height: 50%;
  margin-bottom: 10px;
`;

const YTLink = styled.a`
  position: relative;
  height: 50%;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid #2c005f;
  box-shadow: 0px 0px 15px #340057;
  filter: brightness(50%);
  transition: 0.3s;

  &:hover {
    border: 1px solid #7700ff;
    box-shadow: 0px 0px 15px #9900ff;
    filter: brightness(50%) blur(1px);
  }
`;

const SecondImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid #2c005f;
  box-shadow: 0px 0px 15px #340057;
  filter: brightness(50%);
  transition: 0.3s;

  &:hover {
    border: 1px solid #7700ff;
    box-shadow: 0px 0px 15px #9900ff;
    filter: brightness(50%) blur(1px);
  }
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0px 0px 15px  #000000;
  font-size: 36px;
  font-weight: bold;
  pointer-events: none;
`;
