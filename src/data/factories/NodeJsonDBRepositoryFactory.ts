import JsonDBCharacterRepository from "../repositories/implementations/NodeJsonDBCharacterRepository";

class NodeJsonDBRepositoryFactory {
  static getCharacterRepository(): JsonDBCharacterRepository {
    return new JsonDBCharacterRepository("db/characters");
  }
}

export default NodeJsonDBRepositoryFactory;
