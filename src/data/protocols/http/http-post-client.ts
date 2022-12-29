import { HttpResponse } from "./http-response";

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};

//Using the Interface Segregation SOLID principle.
export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
