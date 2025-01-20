import axios from "axios";
import { envConfig } from "../conf/envConfig";

export const api = axios.create({
  baseURL: envConfig.BASE_URL,
});
