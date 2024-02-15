import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  name: string;
  displayIcon: string;
  category: string;
  uuid: string;
};

const ItemButton = ({ displayIcon, name, category, uuid }: Props) => {
  return (
    <Item>
      <SingleLink to={`${category}/${uuid}`}>
        <Image src={displayIcon} alt={name} />
        <Name>{name}</Name>
      </SingleLink>
    </Item>
  );
};

export default ItemButton;

const Item = styled.li`
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #2c005f;
  box-shadow: 0px 0px 15px #340057;
  transition: 0.3s;

  &:hover {
    border: 1px solid #7700ff;
    box-shadow: 0px 0px 15px #9900ff;
  }
`;

const SingleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 256px;
  object-fit: contain;
`;

const Name = styled.h2`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #3c0080;
`;
