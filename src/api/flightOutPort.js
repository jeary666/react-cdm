import request from '../utils/request'

export function getTableDatas(data) {
  return request({
    url: `/web/auth/flightcollab/flightDynamic/list`,
    method: "post",
    data
  });
}