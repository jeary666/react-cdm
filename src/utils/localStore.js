export const sessionStore = {
  get(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    }catch(error) {
      return null
    }
  },
  set(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
  },
  remove(key) {
    sessionStorage.removeItem(key)
  },
  clear() {
    sessionStorage.clear()
  }
}


// localStorage封装
export const localStore = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      return null
    }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}