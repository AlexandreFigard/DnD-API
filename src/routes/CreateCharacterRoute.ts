import { IRoute } from "../framework/interfaces/IRoute";
import { IRouterAdapter } from "../framework/interfaces/IRouterAdapter";
import { CharacterService } from "../services/CharacterService";
import { AlignmentService } from "../services/AlignmentService";
import { SpeciesService } from "../services/SpeciesService";
import { ClassesService } from "../services/ClassesService";
import RepositoryFactory from "../data/factories/RepositoryFactory";

export class CreateCharacterRoute implements IRoute {
  private characterService: CharacterService;

  constructor() {
    const characterRepository = RepositoryFactory.getCharacterRepository();
    const alignmentService = new AlignmentService();
    const speciesService = new SpeciesService();
    const classesService = new ClassesService();
    this.characterService = new CharacterService(
      characterRepository,
      alignmentService,
      speciesService,
      classesService
    );
  }

  register(router: IRouterAdapter): void {
    router.post("/api/characters", async (req, res) => {
      try {
        const characterData = req.body;
        const createdCharacter =
          await this.characterService.createCharacter(characterData);

        if (Array.isArray(createdCharacter)) {
          return res.status(400).json({ errors: createdCharacter });
        }

        res.status(201).json({
          message: "Character created successfully!",
          character: createdCharacter,
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to create character";
        res.status(500).json({ error: errorMessage });
      }
    });
  }
}
