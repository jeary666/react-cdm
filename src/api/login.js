import request from '../utils/request'

export function login(data) {
  return request({
    url: `/systemmana/SecurityController/login`,
    method: "post",
    data
  });
}