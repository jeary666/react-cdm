import request from '../utils/request'

export function login(data) {
  return request({
    url: `/web/pass/systemmana/SecurityController/login`,
    method: "post",
    data
  });
}