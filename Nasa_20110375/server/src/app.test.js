const request = require("supertest");
const app = require("./app");

describe("Test API endpoints", () => {
  it("should return status 200 for GET /planets", async () => {
    const response = await request(app).get("/planets");
    expect(response.statusCode).toBe(200);
  });

  it("should return status 200 for GET /launches", async () => {
    const response = await request(app).get("/launches");
    expect(response.statusCode).toBe(200);
  });

  it("should return status 201 for POST /launches", async () => {
    const newLaunch = {
      mission: "Mission Test",
      rocket: "Rocket 247",
      target: "Nasa",
      launchDate: "December 27, 2025",
    };
    const response = await request(app).post("/launches").send(newLaunch);
    expect(response.statusCode).toBe(201);
  });
  // Missing required launch property!"
  it("should return status 400 for POST /launches missing required launch property!", async () => {
    const newLaunch = {
      mission: "Mission Test",
      rocket: "Rocket 247",
    };
    const response = await request(app).post("/launches").send(newLaunch);
    expect(response.statusCode).toBe(400);
  });

  //Invalid launch date !
  it("should return status 400 for POST /launches Invalid launch date !", async () => {
    const newLaunch = {
      mission: "Mission Test",
      rocket: "Rocket 247",
      launchDate: "I want to isekai 27, 2025",
    };
    const response = await request(app).post("/launches").send(newLaunch);
    expect(response.statusCode).toBe(400);
  });


  
  it("should return status 200 for Delete /launches/:id  !", async () => {
    const launchID = 100;
    const response = await request(app).delete(`/launches/${launchID}`);
    expect(response.statusCode).toBe(200);
  });


  //when  id not found

  it("should return status 404 for Delete /launches/:id ID NOT FOUND !", async () => {
    const launchID = 1002;
    const response = await request(app).delete(`/launches/${launchID}`);
    expect(response.statusCode).toBe(404);
  });


});
