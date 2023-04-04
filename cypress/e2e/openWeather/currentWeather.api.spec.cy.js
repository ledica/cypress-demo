describe("Get the current climate", () => {
  it(
    "TC-1| Get weather report data for a location - 200",
    { tags: "@openWeather" },
    () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("OPEN_WEATHER_URL")}weather?q=${Cypress.env(
          "LOCATION"
        )}&appid=${Cypress.env("APP_ID")}`,
      }).as("details");

      cy.get("@details").its("status").should("eq", 200);

      cy.get("@details").then((response) => {
        expect(response.body).to.have.any.keys(
          "base",
          "clouds",
          "cod",
          "coord",
          "dt",
          "id",
          "main",
          "name",
          "sys",
          "timezone",
          "visibility",
          "weather",
          "wind",
          "rain"
        );
        assert.isObject(response.body.clouds, "val is object");
        expect(response.body.clouds).to.have.keys("all");
        assert.isObject(response.body.coord, "val is object");
        expect(response.body.coord).to.have.keys("lat", "lon");
        assert.isObject(response.body.main, "val is object");
        expect(response.body.main).to.have.any.keys(
          "feels_like",
          "humidity",
          "pressure",
          "temp",
          "temp_max",
          "temp_min"
        );
        assert.isObject(response.body.sys, "val is object");
        expect(response.body.sys).to.have.any.keys("country", "id", "type");
        assert.isObject(response.body.wind, "val is object");
        expect(response.body.wind).to.have.any.keys("gust", "deg", "speed");
        assert.isArray(response.body.weather, "val is array");
      });
    }
  );

  it(
    "TC-2| Get weather report data for a location - 404",
    { tags: "@openWeather" },
    () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env(
          "OPEN_WEATHER_URL"
        )}weather?q=Invalid&appid=${Cypress.env("APP_ID")}`,
        failOnStatusCode: false,
      }).as("details");

      cy.get("@details").its("status").should("eq", 404);

      cy.get("@details").then((response) => {
        expect(response.body.message).to.eq("city not found");
      });
    }
  );

  it(
    "TC-3| Get weather report data for a location - 400",
    { tags: "@openWeather" },
    () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("OPEN_WEATHER_URL")}weather?&appid=${Cypress.env(
          "APP_ID"
        )}`,
        failOnStatusCode: false,
      }).as("details");

      cy.get("@details").its("status").should("eq", 400);

      cy.get("@details").then((response) => {
        expect(response.body.message).to.eq("Nothing to geocode");
      });
    }
  );

  it(
    "TC-4| Get weather report data for a location - 401",
    { tags: "@openWeather" },
    () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("OPEN_WEATHER_URL")}weather?q=${Cypress.env(
          "LOCATION"
        )}&appid=Invlaid`,

        failOnStatusCode: false,
      }).as("details");

      cy.get("@details").its("status").should("eq", 401);

      cy.get("@details").then((response) => {
        expect(response.body.message).to.eq(
          "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."
        );
      });
    }
  );
});
