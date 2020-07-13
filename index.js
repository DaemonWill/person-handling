const PipedriveService = require("./pipedrive-service");
const pipedriveService = new PipedriveService();

//see service for more details
//make sure to add your api_token and company_domain in the service

/*
* @params - name <string>, email <string[]>, phone <string[]>, dateTime <string>
* @returns - void
*/
const createPerson = function(name, email, phone, dateTime){
  console.log("creating person...");
  pipedriveService.createPerson(name, email, phone, dateTime);
}

/*
* @params - id <int>, name <string>, email <string[]>, phone <string[]>
* @returns - void
*/
const updatePerson = function(id, name, email, phone){
  console.log("updating existing person...");
  pipedriveService.updatePerson(id, name, email, phone);
}

/*
* @params - id1 <int>, id2 <int>
* @returns - void
*/
const mergePersons = function(id1, id2){
  console.log("merging persons...");
  pipedriveService.mergePersons(id1, id2);
}

//examples, edit the params to fit your use case

//Let's create a person
//force format of date to iso-string of form YYYY-MM-DD HH:MM:SS
createPerson("DayMan", [], [], new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));

//Let's update the person's name
updatePerson(10, "StarChild", [], []);

//Let's combine two person objects' data
mergePersons(11, 10);
