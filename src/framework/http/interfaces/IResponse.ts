export interface IResponse {
  json(data: unknown): void;
  status(code: number): this;
  send(body: string | Buffer | object): void;
  redirect(url: string): void;
  setHeader(name: string, value: string | number | readonly string[]): void;
}
