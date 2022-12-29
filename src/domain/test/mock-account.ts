import { AuthenticationParams } from "../usecases";
import { AccountModel } from "../models/";
import { faker } from "@faker-js/faker";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});
