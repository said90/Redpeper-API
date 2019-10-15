/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import http from "./httpService";

const apiEndpoint = "/clientes";

export function getClientes() {
  return http.get(apiEndpoint);
}

export default {
  getClientes
};
