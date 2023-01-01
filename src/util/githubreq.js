const baseURL ="https://api.github.com"
import axios from "axios";
const gitajax = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default gitajax