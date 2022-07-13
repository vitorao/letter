import JsonPlaceholder from "./jsonplaceholder.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { JSON_PLACEHOLDER_URL } from "./constants";
import { postsMock, userMock } from "./mocks/jsonplaceholderMock.js";

const axiosMock = new MockAdapter(axios);

describe("JsonPlaceholder Service", () => {
  let jsonPlaceholder;

  beforeAll(() => {
    jsonPlaceholder = new JsonPlaceholder();
  });

  it("should run getUsers correctly and return a user json", async () => {
    axiosMock.onGet(`${JSON_PLACEHOLDER_URL}/users`).reply(200, userMock);

    const users = await jsonPlaceholder.getUsers();
    expect(users).toStrictEqual(userMock);
  });

  it("should return a error message to users request", async () => {
    axiosMock.onGet(`${JSON_PLACEHOLDER_URL}/users`).reply(500);

    expect(jsonPlaceholder.getUsers).rejects.toThrow(
      "JsonPlaceholder - There was an error getting users dataRequest failed with status code 500"
    );
  });

  it("should run getPosts correctly and return a post json", async () => {
    axiosMock.onGet(`${JSON_PLACEHOLDER_URL}/posts`).reply(200, postsMock);

    const users = await jsonPlaceholder.getPosts();
    expect(users).toStrictEqual(postsMock);
  });

  it("should return a error message to users request", async () => {
    axiosMock.onGet(`${JSON_PLACEHOLDER_URL}/posts`).reply(500);

    expect(jsonPlaceholder.getPosts).rejects.toThrow(
      "JsonPlaceholder - There was an error getting posts dataRequest failed with status code 500"
    );
  });
});
