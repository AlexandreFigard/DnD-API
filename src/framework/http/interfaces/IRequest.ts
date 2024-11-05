export interface IRequest {
  params: { [key: string]: string };
  body: any;
  query: { [key: string]: string | undefined };
}
