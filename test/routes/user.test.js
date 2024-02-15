const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../index");
const request = require("supertest");
chai.use(chaiHttp);




describe("Login Check", function () {
  it("Should success if credential is valid", function (done) {
    request(app)
      .post("/login")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ Username: "attadeep@28", password: "123" })
      .expect(302)
      .expect("Location", "/dashboard")
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("Should fail if credentials are invalid", function (done) {
    request(app)
      .post("/login")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ Username: "nonexistentuser", password: "incorrectpassword" })
      .expect(200)
      .expect(function (res) {
        if (!res.text.includes("Incorrect Username or Password")) {
          throw new Error("Response does not contain error message");
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("Signup Check", function () {
  it("Should succeed if signup data is valid", function (done) {
    request(app)
      .post("/signup")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({
        Username: "newuser@example.com",
        Name: "New User",
        password: "password",
      })
      .expect(302)
      .expect(function (res) {
        if (!res.header.location || !res.header.location.includes("/login")) {
          throw new Error("Response did not redirect to login page");
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("Should fail if signup data is invalid", function (done) {
    request(app)
      .post("/signup")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({
        Username: "newuser@example.com",
        Name: "New User",
        password: "password",
      })
      .expect(200) 
      .expect(function (res) {
      
        if (!res.text.includes("Username Already Exist")) {
          throw new Error("Response does not contain error message");
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
        done(); 
      });
  });
});
