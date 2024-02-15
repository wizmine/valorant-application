import { useHref } from "react-router-dom";
import styled from "styled-components";
import ItemButton from "../ui/ItemButton";
import { useAppSelector } from "../hooks/hooks";

const ItemsList = () => {
  const category = useHref("");
  const agents = useAppSelector((state) => state.agents.data);
  const weapons = useAppSelector((state) => state.weapons.data);

  const agentsList = () => {
    return (
      <Container>
        <Title>Agents</Title>
        <GridItems>
          {agents &&
            agents.data.map((obj) => {
              return obj.isPlayableCharacter === true ? (
                <ItemButton
                  key={obj.uuid}
                  displayIcon={obj.displayIcon}
                  name={obj.displayName}
                  category={category}
                  uuid={obj.uuid}
                />
              ) : null;
            })}
        </GridItems>
      </Container>
    );
  };

  const weaponsList = () => {
    return (
      <Container>
        <Title>Weapons</Title>
        <GridItems>
          {weapons &&
            weapons.data.map((obj) => {
              return (
                <ItemButton
                  key={obj.uuid}
                  displayIcon={obj.displayIcon}
                  name={obj.displayName}
                  category={category}
                  uuid={obj.uuid}
                />
              );
            })}
        </GridItems>
      </Container>
    );
  };

  const renderItems = (
    category: string,
    agentsList: () => JSX.Element,
    weaponsList: () => JSX.Element
  ) => {
    const render = category === "/agents" ? agentsList() : weaponsList();

    return render;
  };

  const items = renderItems(category, agentsList, weaponsList);

  return items;
};

export default ItemsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 32px;
`;

const GridItems = styled.ul`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 230px);
  column-gap: 25px;
  row-gap: 30px;
`;


