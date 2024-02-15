import styled from "styled-components";
import NavButton from "../ui/NavButton";

const NavBar = () => {
  const navInfo = [
    {
      id: 1,
      name: "WEAPONS",
      link: "/weapons",
    },
    {
      id: 2, 
      name: "AGENTS",
      link: "/agents",
    },
  ]; 

  return (
    <Container>
      {navInfo.map((obj) => (
        <NavButton key={obj.id} name={obj.name} link={obj.link} />
      ))}
    </Container>
  );
};

export default NavBar;

const Container = styled.nav`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
`;
