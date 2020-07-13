const axios = require("axios");
const QUERY_BASE = "?api_token=";
const API_TOKEN = "ENTER_API_TOKEN_HERE";
const COMPANY_DOMAIN = "https://ENTER_COMPANY_NAME_HERE";
const BASE_URL = ".pipedrive.com/api/v1/persons";

class PipedriveService {
  constructor() { }

  /*
  * @params - endpoint <string>, data <Object>
  * @returns - Promise<Object>
  */
  postData(endpoint, data){
    let url = COMPANY_DOMAIN + BASE_URL + endpoint + QUERY_BASE + API_TOKEN;
    return axios.post(url, data);
  }

  /*
  * @params - endpoint <string>, data <Object>
  * @returns - Promise<Object>
  */
  putData(endpoint, data){
    let url = COMPANY_DOMAIN + BASE_URL + endpoint + QUERY_BASE + API_TOKEN;
    return axios.put(url, data);
  }

  /*
  * Creates a person obj via pipedrive with the only required param being "name"
  * @params - name <string>, email <string[]>, phone <string[]>, dateTime <string>
  * @returns - void
  */
  createPerson(name, email, phone, dateTime){
    let data = {
      name : name,
      email : email,
      phone : phone,
      add_time : dateTime //Date should be of the form YYYY-MM-DD HH:MM:SS
    };
    this.postData("", data)
      .then((response) => {
        //upon a successful request to the api, log the new user's id
        if(response.data.success){
          console.log("New Person: " + response.data.data.name + " created with id: " + response.data.data.id);
        }
        //failure response, log the error title and info
        else{
          console.log("Error Response: " + response.data.error + " - More Info: " + response.data.error_info);
        }
      })
      .catch((err) => {
        //request error
        console.log(err);
      })
  }

  /*
  * Updates an existing person's fields, person's id is required
  * @params - id <int>, name <string>, email <string[]>, phone <string[]>
  * @returns - void
  */
  updatePerson(id, name, email, phone){
    let data = { id : id };
    if(name){
      data["name"] = name;
    }
    if(email.length != 0){
      data["email"] = email;
    }
    if(phone.length != 0){
      data["phone"] = phone;
    }
    this.putData("/" + id, data)
      .then((response) => {
        //upon a successful request to the api, log all the updated person's info
        if(response.data.success){
          console.log("Successfully Updated, Person Obj: ");
          console.log(JSON.stringify(response.data.data));
        }
        //failure response, log the error title and info
        else{
          console.log("Error Response: " + response.data.error + " - More Info: " + response.data.error_info);
        }
      })
      .catch((err) => {
        //request error
        console.log(err);
      })
  }

  /*
  * Updates the first person (id1) with the info from person2 (id2), both ids are required
  * @params - id1 <int>, id2 <int>
  * @returns - void
  */
  mergePersons(id1, id2){
    let data = {
      id : id1,
      merge_with_id : id2
    };
    this.putData("/" + id1 + "/merge", data)
      .then((response) => {
        //upon a successful request to the api, log all the updated person's info
        if(response.data.success){
          console.log("Successfully Merged, Person Obj: ");
          console.log(JSON.stringify(response.data.data));
        }
        //failure response, log the error title and info
        else{
          console.log("Error Response: " + response.data.error + " - More Info: " + response.data.error_info);
        }
      })
      .catch((err) => {
        //request error
        console.log(err);
      })
  }
}

module.exports = PipedriveService;
