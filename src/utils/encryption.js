import CryptoJS from 'crypto-js'

export const md5 = val => {
  return CryptoJS.MD5(val).toString()
}
// CryptoJS 本项目通用加解密封装
export const crypto = {
  key: 'ztev-12345',
  // 加密
  en(val) {
    const res = CryptoJS.AES.encrypt(val, this.key).toString()
    return res
  },
  // 解密
  de(val) {
    const res = CryptoJS.AES.decrypt(val, this.key).toString(CryptoJS.enc.Utf8)
    return res
  }
}