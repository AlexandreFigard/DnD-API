import ICharacterRepository from "../repositories/interfaces/ICharacterRepository";
import NodeJsonDBRepositoryFactory from "./NodeJsonDBRepositoryFactory";

class RepositoryFactory {
  static getCharacterRepository(): ICharacterRepository {
    return NodeJsonDBRepositoryFactory.getCharacterRepository();
  }
}

export default RepositoryFactory;
