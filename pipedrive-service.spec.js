const chai = require("chai");
const sinon = require("sinon");
const axios = require("axios");
const PipedriveService = require("./pipedrive-service");
const pipedriveService = new PipedriveService();

let spy, stub;

/*
* Simple testing for pipedrive service
*/
describe("Pipedrive Service", () => {
  beforeEach(function(){
    //refresh a spy obj for function wrapping
    spy = sinon.spy();
  });

  /*
  * mock a postData call with the service
  */
  it("should use axios to make a post request", function(){
    //wrapping the post() method for axios to avoid an actual call
    stub = sinon.stub(axios, "post", spy);
    //attempt to trigger the spy
    pipedriveService.postData("", {});
    stub.restore();
    chai.assert.isTrue(spy.called);
  });

  /*
  * mock a putData call with the service
  */
  it("should use axios to make a put request", function(){
    //wrapping the put() method for axios to avoid an actual call
    stub = sinon.stub(axios, "put", spy);
    //attempt to trigger the spy
    pipedriveService.putData("", {});
    stub.restore();
    chai.assert.isTrue(spy.called);
  });
});
