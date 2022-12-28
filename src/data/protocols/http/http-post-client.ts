export interface HttpPostClient {
  //Using the Interface Segregation SOLID principle.
  post(url: string): Promise<void>;
}
