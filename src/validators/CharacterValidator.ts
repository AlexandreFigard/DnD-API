import CharacterParams from "data/models/Character";
import { IAlignmentService } from "../services/AlignmentService";
import { ISpeciesService } from "services/SpeciesService";
import { IClassesService } from "services/ClassesService";

export interface ValidationError {
  field: string;
  message: string;
}

export class CharacterValidator {
  private alignmentService: IAlignmentService;
  private speciesService: ISpeciesService;
  private classesService: IClassesService;

  constructor(
    alignmentService: IAlignmentService,
    speciesService: ISpeciesService,
    classesService: IClassesService
  ) {
    this.alignmentService = alignmentService;
    this.speciesService = speciesService;
    this.classesService = classesService;
  }

  async validate(data: Partial<CharacterParams>): Promise<ValidationError[]> {
    const errors: ValidationError[] = [];

    if (!data.name || typeof data.name !== "string") {
      errors.push({
        field: "name",
        message: "'name' must be a non-empty string",
      });
    }
    if (data.species) {
      const validSpecies = await this.speciesService.getSpecies();
      if (!validSpecies.includes(data.species)) {
        errors.push({
          field: "species",
          message: `'species' must be one of the following: ${validSpecies.join(", ")}`,
        });
      }
    } else {
      errors.push({
        field: "species",
        message: "'species' must be a non-empty string",
      });
    }
    if (data.classType) {
      const validClasses = await this.classesService.getClasses();
      if (!validClasses.includes(data.classType)) {
        errors.push({
          field: "classType ",
          message: `'classType ' must be one of the following: ${validClasses.join(", ")}`,
        });
      }
    } else {
      errors.push({
        field: "classType ",
        message: "'classType ' must be a non-empty string",
      });
    }
    if (data.alignment) {
      const validAlignments = await this.alignmentService.getAlignments();
      if (!validAlignments.includes(data.alignment)) {
        errors.push({
          field: "alignment",
          message: `'alignment' must be one of the following: ${validAlignments.join(", ")}`,
        });
      }
    } else {
      errors.push({
        field: "alignment",
        message: "'alignment' must be a non-empty string",
      });
    }
    if (data.picture && typeof data.picture !== "string") {
      errors.push({
        field: "picture",
        message: "'picture' must be a valid URL string",
      });
    }

    return errors;
  }
}
