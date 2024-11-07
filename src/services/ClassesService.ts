export interface IClassesService {
  getClasses(): Promise<string[]>;
}

export class ClassesService implements IClassesService {
  async getClasses(): Promise<string[]> {
    const response = await fetch("https://www.dnd5eapi.co/api/classes");
    if (!response.ok)
      throw new Error(`Failed to fetch classes: ${response.statusText}`);

    const data = (await response.json()) as { results: { name: string }[] };
    return data.results.map((classes: { name: string }) => classes.name);
  }
}
