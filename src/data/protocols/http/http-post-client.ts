import { HttpResponse } from "./http-response";

export type HttpPostParams = {
  url: string;
  body?: object;
};

//Using the Interface Segregation SOLID principle.
export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
