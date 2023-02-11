import { faker } from "@faker-js/faker";
import { HttpPostParams } from "../protocols/http";

type MockBody = {
  name: string;
  phone: number;
};

export const makeBodyMockObject = (): MockBody =>
  Object.assign({ name: faker.name, phone: faker.phone });

export const makeMockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: makeBodyMockObject(),
});
