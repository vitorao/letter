import axios from "axios";
import { JSON_PLACEHOLDER_URL } from "./constants.js";

export default class JsonPlaceholder {
  async getUsers() {
    try {
      const { data } = await axios.get(`${JSON_PLACEHOLDER_URL}/users`);

      return data;
    } catch (error) {
      throw new Error(
        "JsonPlaceholder - There was an error getting users data" +
          error.message
      );
    }
  }

  async getPosts() {
    try {
      const { data } = await axios.get(`${JSON_PLACEHOLDER_URL}/posts`);
      return data;
    } catch (error) {
      throw new Error(
        "JsonPlaceholder - There was an error getting posts data" +
          error.message
      );
    }
  }
}
