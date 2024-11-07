export interface ISpeciesService {
  getSpecies(): Promise<string[]>;
}

export class SpeciesService implements ISpeciesService {
  async getSpecies(): Promise<string[]> {
    const response = await fetch("https://www.dnd5eapi.co/api/races");
    if (!response.ok)
      throw new Error(`Failed to fetch species: ${response.statusText}`);

    const data = (await response.json()) as { results: { name: string }[] };
    return data.results.map((species: { name: string }) => species.name);
  }
}
