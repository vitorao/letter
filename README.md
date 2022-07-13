# Letter Project

This project returns a JSON contaning user and posts informations from jsonplaceholder

#### Running the project
to run it just install all dependecies using
```
> npm install
```
and run the project using the command
```
> npm start
```

after you run the project and access http://localhost:8000 you should see a json like the following

```
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": "Kulas Light, Apt. 556 - 92998-3874 Gwenborough",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": "Romaguera-Crona",
    "posts": [
      {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      ...
    ]
  }
  ...
]
```

#### Tests Suite
To run all tests from this project just execute the following command

``` 
npm run test
``` 

and you should see the output

```
 PASS  src/controller/letter.test.js
  Letter Controller
    ✓ should return a JSON with users and his posts (1 ms)
    ✓ should return a error when getUsers throws a error (3 ms)
    ✓ should return a error when getPosts throws a error

 PASS  src/service/jsonplaceholder.test.js
  JsonPlaceholder Service
    ✓ should run getUsers correctly and return a user json (2 ms)
    ✓ should return a error message to users request (1 ms)
    ✓ should run getPosts correctly and return a post json
    ✓ should return a error message to users request
```
