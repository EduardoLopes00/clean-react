import { HttpPostParams } from "./../../../data/protocols/http/http-post-client";
import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import { faker } from "@faker-js/faker";

type MockBody = {
  name: string;
  phone: number;
};

jest.mock("axios");

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const makeMockBody = (): MockBody =>
  Object.assign({ name: faker.name, phone: faker.phone });

const makeMockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: makeMockBody(),
});

const mockedAxiosResult = {
  data: makeMockBody(),
  status: faker.random.numeric(3),
};

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = makeMockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("Should return the correct statusCode and body", async () => {
    const sut = makeSut();
    const httpResponse = await sut.post(makeMockPostRequest());
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
