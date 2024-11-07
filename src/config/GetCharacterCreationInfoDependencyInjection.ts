import { AlignmentService } from "../services/AlignmentService";
import { SpeciesService } from "../services/SpeciesService";
import { ClassesService } from "../services/ClassesService";
import { CharacterCreationInfoService } from "../services/CharacterCreationInfoService";
import { GetCharacterCreationInfoRoute } from "../routes/GetCharacterCreationInfo";

// Services de récupération
const alignmentService = new AlignmentService();
const speciesService = new SpeciesService();
const classesService = new ClassesService();

const characterCreationInfoService = new CharacterCreationInfoService(
  alignmentService,
  speciesService,
  classesService,
);

// Route pour la récupération d'informations de création
const getCharacterCreationInfoRoute = new GetCharacterCreationInfoRoute(
  characterCreationInfoService,
);

export { getCharacterCreationInfoRoute };
