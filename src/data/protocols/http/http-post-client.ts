import { HttpResponse } from ".";

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};

//Using the Interface Segregation SOLID principle.
export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
