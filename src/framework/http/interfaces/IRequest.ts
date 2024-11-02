export interface IRequest {
  params: { [key: string]: string };
  body: unknown;
  query: { [key: string]: string | undefined };
}
