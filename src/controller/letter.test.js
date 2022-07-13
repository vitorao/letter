import { jest } from "@jest/globals";

import Letter from "./letter.js";
import JsonPlaceholder from "../service/jsonplaceholder.js";
import { postsMock, userMock } from "../service/mocks/jsonplaceholderMock.js";
import { letterMock } from "./mocks/letterMock.js";

describe("Letter Controller", () => {
  let letterController;

  beforeAll(async () => {
    letterController = new Letter();

    jest
      .spyOn(JsonPlaceholder.prototype, "getUsers")
      .mockImplementationOnce(() => [userMock]);

    jest
      .spyOn(JsonPlaceholder.prototype, "getPosts")
      .mockImplementationOnce(() => postsMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return a JSON with users and his posts", async () => {
    const users = await letterController.get();
    expect(users).toStrictEqual(letterMock);
  });

  it("should return a error when getUsers throws a error", async () => {
    jest.spyOn(JsonPlaceholder.prototype, "getUsers").mockImplementation(() => {
      throw new Error(
        "JsonPlaceholder - There was an error getting users dataRequest failed with status code 500"
      );
    });

    expect(letterController.get).rejects.toThrow(
      "JsonPlaceholder - There was an error getting users dataRequest failed with status code 500"
    );
  });

  it("should return a error when getPosts throws a error", async () => {
    jest.spyOn(JsonPlaceholder.prototype, "getPosts").mockImplementation(() => {
      throw new Error(
        "JsonPlaceholder - There was an error getting posts dataRequest failed with status code 500"
      );
    });

    expect(letterController.get).rejects.toThrow(
      "JsonPlaceholder - There was an error getting posts dataRequest failed with status code 500"
    );
  });
});
