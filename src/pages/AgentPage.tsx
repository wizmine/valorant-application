import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";

const AgentPage = () => {
  const { id } = useParams();
  const agents = useAppSelector((state) => state.agents.data);
  const singleAgent = agents ? agents.data.find((obj) => obj.uuid === id) : null;
  const [currentAbility, setCurrentAbility] = useState(() => {
    const savedAbility = localStorage.getItem("currentAbility");
    return savedAbility || (singleAgent ? singleAgent.abilities[0].description : null);
  });

  useEffect(() => {
    if (currentAbility) {
      localStorage.setItem("currentAbility", currentAbility);
    }
  }, [currentAbility]);

  

  return singleAgent ? (
    <Container>
      <Image src={singleAgent.fullPortrait} alt={singleAgent.displayName} />
      <Info>
        <Title>
          <Name>{singleAgent.displayName}</Name>
          <RoleInfo>
            <RoleImage src={singleAgent.role.displayIcon} alt={singleAgent.role.displayName} />
            <RoleName>{singleAgent.role.displayName}</RoleName>
          </RoleInfo>
        </Title>
        <Description>{singleAgent.description}</Description>
        <Abilities>
          {singleAgent.abilities.map((obj) => {
            return (
              <Ability key={obj.displayName} onClick={() => setCurrentAbility(obj.description)}>
                <AbilityImage src={obj.displayIcon} alt={obj.displayName} />
              </Ability>
            );
          })}
        </Abilities>
        <AbilityDescription>{currentAbility}</AbilityDescription>
      </Info>
    </Container>
  ) : (
    <Loading />
  );
};

export default AgentPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 600px;
`;

const Info = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h1``;

const RoleInfo = styled.div`
  display: flex;
  align-items: center;
`;

const RoleImage = styled.img`
  width: 30px;
`;

const RoleName = styled.h2`
  margin-left: 10px;
`;

const Description = styled.p`
  margin-top: 24px;
`;

const Abilities = styled.ul`
  margin-top: 24px;
  padding: 5px;
  display: flex;
  border: 1px solid blueviolet;
`;

const Ability = styled.li`
  margin: 5px;
  cursor: pointer;
`;

const AbilityImage = styled.img`
  width: 50px;
  padding: 5px;
  border: 1px solid #ffffff22;
  background-color: none;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff22;
  }
`;

const AbilityDescription = styled.p`
  margin-top: 24px;
`;
