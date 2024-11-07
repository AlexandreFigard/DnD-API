import ICharacterRepository from "../data/repositories/interfaces/ICharacterRepository";
import Character from "../data/models/Character";
import { v4 as uuidv4 } from "uuid";
import { CharacterValidator } from "../validators/CharacterValidator";

export class CharacterService {
  private characterRepository: ICharacterRepository;

  constructor(characterRepository: ICharacterRepository) {
    this.characterRepository = characterRepository;
  }

  async createCharacter(data: {
    name: string;
    species: string;
    classType: string;
    alignment: string;
    picture: string;
    campaignId?: string;
  }) {
    const errors = CharacterValidator.validate(data);
    if (errors.length > 0) {
      throw new Error(`Validation errors: ${errors.join(", ")}`);
    }

    const character = new Character({
      id: uuidv4(),
      ...data,
      campaignId: data.campaignId ?? "",
    });

    await this.characterRepository.createCharacter(character);
    return character;
  }
}
