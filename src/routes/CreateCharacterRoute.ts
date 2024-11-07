import { IRoute } from "../framework/interfaces/IRoute";
import { IRouterAdapter } from "../framework/interfaces/IRouterAdapter";
import { CharacterService } from "../services/CharacterService";
import RepositoryFactory from "../data/factories/RepositoryFactory";

export class CreateCharacterRoute implements IRoute {
  private characterService: CharacterService;

  constructor() {
    const characterRepository = RepositoryFactory.getCharacterRepository();
    this.characterService = new CharacterService(characterRepository);
  }

  register(router: IRouterAdapter): void {
    router.post("/api/characters", async (req, res) => {
      try {
        const characterData = req.body;
        const createdCharacter =
          await this.characterService.createCharacter(characterData);
        res.status(201).json({
          message: "Character created successfully!",
          character: createdCharacter,
        });
      } catch (error) {
        res.status(400).json({ error: error });
      }
    });
  }
}
