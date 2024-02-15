import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {
  name: string;
  link: string;
};

const NavButton = ({ name, link }: Props) => {
  return <Navigation to={link}>{name}</Navigation>;
};

export default NavButton;

const Navigation = styled(NavLink)`
  margin: 0px 10px;
  padding: 5px;
  color: rgb(255, 0, 149);
  background-color: rgba(126, 57, 255, 0.1);
  border: 1px solid blueviolet;
  box-shadow: 0px 0px 5px rgba(126, 57, 255, 0.5);
  font-size: 22px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(126, 57, 255, 0.3);
  }
`;
