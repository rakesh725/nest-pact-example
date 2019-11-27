"use strict"

const path = require("path")
const Pact = require("@pact-foundation/pact").Pact

const appService = require("../../src/app.service").AppService

var provider = new Pact({
    port: 8991,
    log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    spec: 2,
    pactfileWriteMode: "update",
    consumer: "MyConsumer",
    provider: "MyProvider",
  })


describe("AppService API", () => {

    let url = "http://localhost"

    const EXPECTED_BODY = 'Hello World'
  

    describe("works", () => {
        beforeEach(() => {
          const interaction = {
            uponReceiving: "a request for projects",
            withRequest: {
              method: "GET",
              path: "/",
            },
            willRespondWith: {
              status: 200,
              body: EXPECTED_BODY,
            },
          }
          return provider.addInteraction(interaction)
        })

            // add expectations
        it("returns a sucessful body", () => {
            return appService()
            .then(response => {
                expect(response.data).toEqual(EXPECTED_BODY)
                expect(response.status).toEqual(200)
            })
            .then(() => provider.verify())
        })
        

    });
    

})