export type HttpPostParams = {
  url: string;
};

//Using the Interface Segregation SOLID principle.
export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>;
}
