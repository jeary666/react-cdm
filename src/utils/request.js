
import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.169.53.121:30281',
  withCredentials: false, // 跨域请求时发送 cookies
  timeout: 50000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {

      console.log(config);



    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 这里是获取验证码图片
    if (res.constructor === ArrayBuffer) {
      return (
        "data:image/png;base64," +
        btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )
      );
    }

    // if (res.constructor === Blob) {
    //   return Promise.resolve(res);
    // }

    if (res.respHead.code === "100200") {
      return res;
    } else if (
      res.respHead.code === "100503" ||
      res.respHead.code === "100509"
    ) {
      console.log("未登录或登录已过期, 请重新登录！")
      // store.dispatch("user/logout").then(() => {
      //   location.reload();
      // });
    } else {
      console.log(res.respHead.msg || "错误");
      return res;
    }
  },
  error => {
    const { data } = error.response;
    if (data.status === 500) {
      console.log(data.message);

      return Promise.reject(error);
    }
    console.log(error.message);

    return Promise.reject(error);
  }
);

export default service;

