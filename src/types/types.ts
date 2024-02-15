export type Agent = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  description: string;
  fullPortrait: string;
  isPlayableCharacter: boolean;
  role: {
    displayName: string;
    displayIcon: string;
    description: string;
  };
  abilities: Abilities[];
};

export type Abilities = {
  displayName: string;
  displayIcon: string;
  description: string;
};

export type Weapon = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  shopData: {
    cost: number;
    category: string;
  };
  skins: Skin[];
};

export type Skin = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  contentTierUuid: string;
  chromas: Chroma[];
};

export type Chroma = {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  swatch: string | null;
};
