const request = require('supertest')
const app = require('../app')

test("GET /users", async () => {
  await request(app).get("/users")
    .expect(200)
    .then((response) => {
      expect(response.body.message).toBe("success");
    });
});