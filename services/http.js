import CONFIG from '../utils/configs';
const commonHeaders = {
          "X-API-Key": CONFIG.API_KEY
        };
export default {
  get: (url)=>{
      return fetch(CONFIG.API_URL + url, {
        method: "GET",
        headers: commonHeaders
      });
  },
  post: (url, payload)=>{
      return fetch(url, {
        method: "GET",
        body: JSON.stringify(payload),
        headers: commonHeaders
      });
  }
}