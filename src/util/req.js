import baseURL from '@/util/baseimgurl.js'
import axios from "axios";
const ajax = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default ajax