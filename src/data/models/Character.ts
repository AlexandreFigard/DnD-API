export interface CharacterParams {
  id: string;
  name: string;
  species: string;
  classType: string;
  alignment: string;
  picture: string;
  campaignId: number;
}

class Character {
  id: string;
  name: string;
  species: string;
  classType: string;
  alignment: string;
  picture: string;
  campaignId: number;

  constructor({
    id,
    name,
    species,
    classType,
    alignment,
    picture,
    campaignId,
  }: CharacterParams) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.classType = classType;
    this.alignment = alignment;
    this.picture = picture;
    this.campaignId = campaignId;
  }
}

export default Character;
