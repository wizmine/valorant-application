import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>Valorant Wiki</div>
      <div>All rights reserved.</div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 50px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(126, 57, 255);
  border-top: 1px solid #3c0080;
  box-shadow: 0px 0px 10px #4d008075;
  background-color: #4600801a;
`;
