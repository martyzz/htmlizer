import axios from "axios";
import { API_ROOT } from "./constants";

export const read = (identifier, version) => {
  const url = `${API_ROOT}/read/${identifier}/${version}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(({ data: { branches } }) => {
        resolve({ match: true, branches });
      })
      .catch(error => {
        console.error(error);
        resolve({ match: false });
      });
  });
};

export const create = branches => {
  const url = `${API_ROOT}/create`;

  return new Promise((resolve, reject) => {
    axios
      .post(url, { branches })
      .then(({ data: { identifier } }) => {
        resolve(identifier);
      })
      .catch(error => {
        console.error(error);
        resolve(null);
      });
  });
};

export const update = (identifier, branches) => {
  const url = `${API_ROOT}/update/${identifier}`;

  return new Promise((resolve, reject) => {
    axios
      .put(url, { branches })
      .then(({ data: { version } }) => {
        resolve(version);
      })
      .catch(error => {
        console.error(error);
        resolve(null);
      });
  });
};
