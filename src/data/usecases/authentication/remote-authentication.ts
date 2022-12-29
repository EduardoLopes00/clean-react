import { UnexpectedError, InvalidCredentialsError } from "src/domain/errors/";
import { AuthenticationParams, Authentication } from "src/domain/usecases";
import { AccountModel } from "src/domain/models/";
import { HttpStatusCode, HttpPostClient } from "src/data/protocols/http/";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
