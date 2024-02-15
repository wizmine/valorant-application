import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import Loading from "../ui/Loading";
import { Skin } from "../types/types";

const WeaponPage = () => {
  const { id } = useParams();
  const weapons = useAppSelector((state) => state.weapons.data);
  const singleWeapon = weapons ? weapons.data.find((obj) => obj.uuid === id) : null;
  const [currentSkin, setCurrentSkin] = useState<Skin | null>(() => {
    const savedSkin = localStorage.getItem("currentSkin");
    return savedSkin ? JSON.parse(savedSkin) : null;
  });

  useEffect(() => {
    const weaponId = localStorage.getItem("weaponId");

    if (weaponId !== id) {
      localStorage.removeItem("currentSkin");
      localStorage.removeItem("weaponId");

      if (singleWeapon && singleWeapon.skins.length > 0) {
        setCurrentSkin(null);
      }
    }
  }, [id, singleWeapon]);

  useEffect(() => {
    if (currentSkin && id) {
      localStorage.setItem("currentSkin", JSON.stringify(currentSkin));
      localStorage.setItem("weaponId", id);
    } else {
      localStorage.removeItem("currentSkin");
      localStorage.removeItem("weaponId");
    }
  }, [currentSkin, id]);

  const handleClick = (icon: string) => {
    if (currentSkin) {
      setCurrentSkin({ ...currentSkin, displayIcon: icon });
    }
  };

  return singleWeapon ? (
    <Container>
      <WeaponInfo>
        <Name>{currentSkin ? currentSkin.displayName : singleWeapon.displayName}</Name>
        <WeaponImage src={currentSkin ? currentSkin.displayIcon : singleWeapon.displayIcon} />
        <WeaponCharacteristic>
          {currentSkin ? (
            <Chromas>
              {currentSkin.chromas.map((obj) => {
                return obj.displayIcon ? (
                  <Chroma key={obj.displayName} onClick={() => handleClick(obj.displayIcon!)}>
                    <ChromaImage src={obj.displayIcon} alt={obj.displayName} />
                  </Chroma>
                ) : null;
              })}
            </Chromas>
          ) : (
            "No chroma"
          )}
          <Cost>{singleWeapon.shopData ? `Cost: ${singleWeapon.shopData.cost}$` : "Free"}</Cost>
        </WeaponCharacteristic>
      </WeaponInfo>
      <SkinList>
        {singleWeapon.skins.map((obj) => {
          return obj.contentTierUuid && obj.displayIcon ? (
            <SingleSkin key={obj.uuid} onClick={() => setCurrentSkin(obj)}>
              <SkinImage src={obj.displayIcon} />
            </SingleSkin>
          ) : null;
        })}
      </SkinList>
    </Container>
  ) : (
    <Loading />
  );
};

export default WeaponPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeaponInfo = styled.div`
  height: 500px;
  width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.h1`
  margin-top: 24px;
`;

const WeaponImage = styled.img`
  margin-top: 24px;
  width: 500px;
`;

const WeaponCharacteristic = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Chromas = styled.ul`
  display: flex;
`;

const Chroma = styled.li`
  margin: 5px;
  cursor: pointer;
`;

const ChromaImage = styled.img`
  width: 120px;
  padding: 5px;
  border: 1px solid #ffffff22;
  background-color: none;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff22;
  }
`;

const Cost = styled.h2``;

const SkinList = styled.ul`
  padding: 0px 10px;
  height: 500px;
  width: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid blueviolet;

  &::-webkit-scrollbar {
    width: 8px; /* Тонкая полоса прокрутки (для Chrome, Safari и Opera) */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff73; /* Цвет полосы прокрутки (для Chrome, Safari и Opera) */
  }

  &::-webkit-scrollbar-track {
    background-color: none; /* Цвет фона прокрутки (для Chrome, Safari и Opera) */
  }
`;

const SingleSkin = styled.li`
  margin: 5px 0px;
  cursor: pointer;
`;

const SkinImage = styled.img`
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff22;
  background-color: none;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff22;
  }
`;
