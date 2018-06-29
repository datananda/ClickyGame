import axios from "axios";

const BASEURL = "https://thecatapi.com/api/images/get?format=xml&type=png&size=small&results_per_page=";
const APIKEY = "&api_key=MzMxNDYw";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
