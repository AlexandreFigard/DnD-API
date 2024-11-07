export interface IHttpServer {
  listen(port: number, callback?: () => void): void;
  use(middleware: Function): void;
}
