class Character {
  id: number;
  name: string;
  species: string;
  classType: string;
  alignment: string;
  picture: string;
  campaignId: number;

  constructor(
    id: number,
    name: string,
    species: string,
    classType: string,
    alignment: string,
    picture: string,
    campaignId: number
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.classType = classType;
    this.alignment = alignment;
    this.picture = picture;
    this.campaignId = campaignId;
  }
}
