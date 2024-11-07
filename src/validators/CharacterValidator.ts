import CharacterParams from "data/models/Character";

interface ValidationError {
  field: string;
  message: string;
}

export class CharacterValidator {
  static validate(data: Partial<CharacterParams>): ValidationError[] {
    const errors: ValidationError[] = [];

    if (!data.campaignId || typeof data.campaignId !== "number") {
      errors.push({
        field: "campaignId",
        message: "'campaignId' must be a number",
      });
    }
    if (!data.name || typeof data.name !== "string") {
      errors.push({
        field: "name",
        message: "'name' must be a non-empty string",
      });
    }
    if (!data.species || typeof data.species !== "string") {
      errors.push({
        field: "species",
        message: "'species' must be a non-empty string",
      });
    }
    if (!data.classType || typeof data.classType !== "string") {
      errors.push({
        field: "classType",
        message: "'classType' must be a non-empty string",
      });
    }
    if (!data.alignment || typeof data.alignment !== "string") {
      errors.push({
        field: "alignment",
        message: "'alignment' must be a non-empty string",
      });
    }
    if (!data.picture || typeof data.picture !== "string") {
      errors.push({
        field: "picture",
        message: "'picture' must be a non-empty string",
      });
    }

    return errors;
  }
}
