import { baseUrl } from '@/service/url'
/**
 * 
 * @param path {string} BASE URL
 * @param params {Object} Params
 */
const handleParam = (path: string, params: any): any => {
  let param = params && { ...params };
  let url = `${baseUrl}${path}`
  if (param) {
    let paramsArray: string[] = [];
    Object.keys(param).forEach((key) =>
      paramsArray.push(key + "=" + param[key])
    );
    if (url.search(/\?/) === -1) {
      url += "?" + paramsArray.join("&");
    } else {
      url += "&" + paramsArray.join("&");
    }
  }
  return url
}

export { handleParam }
