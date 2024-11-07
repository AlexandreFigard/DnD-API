import { IRoute } from "../framework/interfaces/IRoute";
import { IRouterAdapter } from "../framework/interfaces/IRouterAdapter";
import { CharacterCreationInfoService } from "../services/CharacterCreationInfoService";

export class GetCharacterCreationInfoRoute implements IRoute {
  private characterCreationInfoService: CharacterCreationInfoService;

  constructor(characterCreationInfoService: CharacterCreationInfoService) {
    this.characterCreationInfoService = characterCreationInfoService;
  }

  register(router: IRouterAdapter): void {
    router.get("/api/characters/creation-info", async (_, res) => {
      try {
        const creationInfo =
          await this.characterCreationInfoService.getCharacterCreationInfo();
        res.status(200).json(creationInfo);
      } catch {
        res
          .status(500)
          .json({ message: "Error fetching character creation info" });
      }
    });
  }
}
