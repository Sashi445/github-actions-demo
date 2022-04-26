const app = require("./../app");
const supertest = require("supertest");

test("GET /api/helloworld", async () => {
  await supertest(app)
    .get("/api/helloworld")
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({ message: "Hello, World!" });
    });
});
