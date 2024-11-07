import ICharacterRepository from "../data/repositories/interfaces/ICharacterRepository";
import Character from "../data/models/Character";
import { v4 as uuidv4 } from "uuid";
import { CharacterValidator } from "../validators/CharacterValidator";
import { IAlignmentService } from "../services/AlignmentService";
import { ISpeciesService } from "../services/SpeciesService";
import { IClassesService } from "../services/ClassesService";
import { ValidationError } from "../validators/CharacterValidator";

export class CharacterService {
  private characterRepository: ICharacterRepository;
  private alignmentService: IAlignmentService;
  private speciesService: ISpeciesService;
  private classesService: IClassesService;

  constructor(
    characterRepository: ICharacterRepository,
    alignmentService: IAlignmentService,
    speciesService: ISpeciesService,
    classesService: IClassesService,
  ) {
    this.characterRepository = characterRepository;
    this.alignmentService = alignmentService;
    this.speciesService = speciesService;
    this.classesService = classesService;
  }

  async createCharacter(data: {
    name: string;
    species: string;
    classType: string;
    alignment: string;
    picture: string;
    campaignId?: string;
  }): Promise<Character | ValidationError[]> {
    const validator = new CharacterValidator(
      this.alignmentService,
      this.speciesService,
      this.classesService,
    );
    const errors = await validator.validate(data);
    if (errors.length > 0) {
      return errors;
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
