import { handleParam } from "@/utils/index";
import { baseUrl } from './url';

/**
 * 
 * @param path 
 * @param params 
 */
const get = (path: string, params?: any): Promise<any> => {
  const reqUrl = handleParam(path, params);
  return new Promise((resolve, reject) => {
    fetch(reqUrl, {
      method: "GET",
    })
      .then((x) => {
        return x.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 
 * @param path 
 * @param params 
 */
const post = (path: string, params?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(params),
    })
      .then((x) => {
        return x.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { get, post };
