const request = require("supertest");
const app = require("../src/app");

//initial test
describe("GET /api/books", () => {
  it("should return an empty array initially", async () => {
    const res = await request(app).get("/api/books");
    expect(res.status).toBe(200);

    // Check that the response has the correct structure
    expect(res.body).toHaveProperty("books");

    // books should be an empty array initialy
    expect(res.body.books).toEqual([]);
    expect(res.body).toHaveProperty("currentPage");
    expect(res.body).toHaveProperty("totalBooks");
    expect(res.body).toHaveProperty("totalPages");

    // Check pagination properties
    expect(res.body.currentPage).toBe(1);
    expect(res.body.totalBooks).toBe(0);
    expect(res.body.totalPages).toBe(0);
  });
});
