import ICharacterRepository from "../../repositories/interfaces/ICharacterRepository";
import Character from "../../models/Character";
import { JsonDB, Config } from "node-json-db";

class JsonDBCharacterRepository implements ICharacterRepository {
  private db: JsonDB;

  constructor(dbname: string) {
    this.db = new JsonDB(new Config(dbname, true, false, "/"));
  }

  async getCharacterById(id: string): Promise<Character | null> {
    try {
      return this.db.getData(`/characters[${id}]`);
    } catch (error) {
      console.error(`Error fetching character with ID ${id}:`, error);
      throw new Error("Failed fetching character");
    }
  }

  async getCharacters(): Promise<Character[]> {
    try {
      return this.db.getData("/characters") || [];
    } catch (error) {
      console.error("Error fetching characters:", error);
      throw new Error("Failed fetching characters");
    }
  }

  async createCharacter(character: Character): Promise<void> {
    try {
      this.db.push("/characters[]", character, true);
    } catch (error) {
      console.error("Error creating character:", error);
      throw new Error("Character creation failed");
    }
  }

  async updateCharacter(character: Character): Promise<void> {
    try {
      this.db.push(`/characters[${character.id}]`, character, false);
    } catch (error) {
      console.error(`Error updating character with ID ${character.id}:`, error);
      throw new Error("Character update failed");
    }
  }

  async deleteCharacter(id: string): Promise<void> {
    try {
      this.db.delete(`/characters[${id}]`);
    } catch (error) {
      console.error(`Error deleting character with ID ${id}:`, error);
      throw new Error("Character deletion failed");
    }
  }
}

export default JsonDBCharacterRepository;
