import axios from "axios";
import { faker } from "@faker-js/faker";
import { makeBodyMockObject } from "src/data/test/mock-http-post";

const mockedAxiosResult = {
  data: makeBodyMockObject(),
  status: faker.random.numeric(3),
};

export const mockAxios = () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue(mockedAxiosResult);

  return mockedAxios;
};
