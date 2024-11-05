import Character from "../../models/Character";

interface ICharacterRepository {
  getCharacterById(id: string): Promise<Character | null>;
  getCharacters(): Promise<Character[]>;
  createCharacter(character: Character): Promise<void>;
  updateCharacter(character: Character): Promise<void>;
  deleteCharacter(id: string): Promise<void>;
}

export default ICharacterRepository;
