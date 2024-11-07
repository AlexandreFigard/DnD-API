import { IRoute } from "../framework/interfaces/IRoute";
import { IRouterAdapter } from "../framework/interfaces/IRouterAdapter";
import RepositoryFactory from "../data/factories/RepositoryFactory";
import ICharacterRepository from "data/repositories/interfaces/ICharacterRepository";
import Character from "../data/models/Character";
import { v4 as uuidv4 } from "uuid";
import { CharacterValidator } from "../validators/CharacterValidator";

class CharacterRoute implements IRoute {
  private CharacterRepository: ICharacterRepository;

  constructor() {
    this.CharacterRepository = RepositoryFactory.getCharacterRepository();
  }

  register(router: IRouterAdapter): void {
    router.post("/api/characters", async (req, res) => {
      const { name, species, classType, alignment, picture, campaignId } =
        req.body;

      const errors = CharacterValidator.validate({
        name,
        species,
        classType,
        alignment,
        picture,
        campaignId,
      });
      if (errors.length > 0) {
        return res
          .status(400)
          .json({ error: "Invalid request body", details: errors });
      }

      const character = new Character({
        id: uuidv4(),
        name: name,
        species: species,
        classType: classType,
        alignment: alignment,
        picture: picture,
        campaignId: campaignId,
      });

      this.CharacterRepository.createCharacter(character)
        .then(() => {
          res.status(200).json({
            message: "Character created successfully!",
            character: character,
          });
        })
        .catch(() => {
          res.status(500).json({
            message: "Error creating character",
            errors: errors,
          });
        });
    });
    router.get("/api/classes", async (_, res) => {
      try {
        const response = await fetch("https://www.dnd5eapi.co/api/classes");
        if (!response.ok) {
          throw new Error(`Failed to fetch classes: ${response.statusText}`);
        }
        const classes = await response.json();
        res.status(200).json(classes);
      } catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ message: "Error fetching classes" });
      }
    });

    router.get("/api/classes/:index", async (req, res) => {
      const index = req.params.index;
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co/api/classes/${index}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch class: ${response.statusText}`);
        }
        const classChosen = await response.json();
        res.status(200).json(classChosen);
      } catch (error) {
        console.error("Error fetching class:", error);
        res.status(500).json({ message: "Error fetching class" });
      }
    });
  }
}

export { CharacterRoute };
