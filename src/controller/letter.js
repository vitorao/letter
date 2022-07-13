import JsonPlaceholder from "../service/jsonplaceholder.js";

export default class Letter {
  async get() {
    const jsonPlaceholder = new JsonPlaceholder();

    const users = await jsonPlaceholder.getUsers();
    const posts = await jsonPlaceholder.getPosts();

    return users.map((user) => {
      const { address, company } = user;

      const userPosts = posts
        .filter((post) => post.userId === user.id)
        .map((post) => ({
          id: post.id,
          title: post.title,
          body: post.body,
        }));

      return {
        ...user,
        address: `${address.street}, ${address.suite} - ${address.zipcode} ${address.city}`,
        company: `${company.name}`,
        posts: userPosts,
      };
    });
  }
}
