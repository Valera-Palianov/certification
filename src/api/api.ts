import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

export default axios.create({
  baseURL: apiUrl+'api/',
  responseType: "json",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    "Access-Control-Expose-Headers": "Access-Control-*"
  }
});