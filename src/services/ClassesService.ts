export interface DndClass {
  name: string;
}

export interface DndClassesResponse {
  results: DndClass[];
}

export interface IClassesService {
  getAllClasses(): Promise<DndClassesResponse>;
  getClasses(): Promise<string[]>;
  getClassByIndex(index: string): Promise<DndClass>;
}

export class ClassesService implements IClassesService {
  async getAllClasses(): Promise<DndClassesResponse> {
    const response = await fetch("https://www.dnd5eapi.co/api/classes");
    if (!response.ok) {
      throw new Error(`Failed to fetch classes: ${response.statusText}`);
    }

    return response.json() as Promise<DndClassesResponse>;
  }

  async getClasses(): Promise<string[]> {
    const data = await this.getAllClasses();
    return data.results.map((cls) => cls.name);
  }

  async getClassByIndex(index: string): Promise<DndClass> {
    const response = await fetch(
      `https://www.dnd5eapi.co/api/classes/${index}`,
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch class with index ${index}: ${response.statusText}`,
      );
    }

    return response.json() as Promise<DndClass>;
  }
}
