import { AlignmentService } from "./AlignmentService";
import { SpeciesService } from "./SpeciesService";
import { ClassesService } from "./ClassesService";

export interface CharacterCreationField {
  type: string;
  required: boolean;
  options?: string[];
  format?: string;
}

export interface CharacterCreationInfo {
  fields: {
    name: CharacterCreationField;
    species: CharacterCreationField;
    classType: CharacterCreationField;
    alignment: CharacterCreationField;
    picture: CharacterCreationField;
    campaignId: CharacterCreationField;
  };
}

export class CharacterCreationInfoService {
  private alignmentService: AlignmentService;
  private speciesService: SpeciesService;
  private classService: ClassesService;

  constructor(
    alignmentService: AlignmentService,
    speciesService: SpeciesService,
    classService: ClassesService,
  ) {
    this.alignmentService = alignmentService;
    this.speciesService = speciesService;
    this.classService = classService;
  }

  async getCharacterCreationInfo() {
    const alignments = await this.alignmentService.getAlignments();
    const species = await this.speciesService.getSpecies();
    const classes = await this.classService.getClasses();

    return {
      url: "/api/characters",
      methods: ["POST"],
      fields: {
        name: { type: "string", required: true },
        species: { type: "string", required: true, options: species },
        classType: { type: "string", required: true, options: classes },
        alignment: { type: "string", required: true, options: alignments },
        picture: { type: "string", required: true, format: "url" },
        campaignId: { type: "string", required: false, format: "uuid" },
      },
    };
  }
}
