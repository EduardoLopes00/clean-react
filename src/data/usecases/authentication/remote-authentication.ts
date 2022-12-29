import { AccountModel } from "./../../../domain/models/account-model";
import { InvalidCredentialsError } from "./../../../domain/errors/invalid-credentials-error";

import { HttpStatusCode } from "src/data/protocols/http/http-response";
import { AuthenticationParams } from "src/domain/usecases/authentication";
import { HttpPostClient } from "../../protocols/http/http-post-client";
import { UnexpectedError } from "src/domain/errors/unexpected-error";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        Promise.resolve();
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
