export interface IAlignmentService {
  getAlignments(): Promise<string[]>;
}

export class AlignmentService implements IAlignmentService {
  async getAlignments(): Promise<string[]> {
    const response = await fetch("https://www.dnd5eapi.co/api/alignments");
    if (!response.ok)
      throw new Error(`Failed to fetch alignments: ${response.statusText}`);

    const data = (await response.json()) as { results: { name: string }[] };
    return data.results.map((alignment: { name: string }) => alignment.name);
  }
}
