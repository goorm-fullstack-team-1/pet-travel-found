/**
 * 로컬 스토리지 서비스
 */
export const localStorageService = {
  /**
   * 로컬 스토리지에서 키에 해당하는 아이템을 가져옵니다.
   * @param {*} key  - 로컬 스토리지 키
   * @returns {*} - 저장된 아이템 (JSON 파싱된 객체 또는 원시 값)
   */
  getStorageItem: (key) => {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      console.error("Error parsing item from localStorage", e);
    }
  },

  /**
   * 로컬 스토리지에 키-값 쌍을 저장합니다.
   * @param {*} key - 로컬 스토리지 키
   * @param {*} value - 저장할 값 (객체 또는 원시 값)
   */
  setStorageItem: (key, value) => {
    const item = typeof value === "string" ? value : JSON.stringify(value);
    try {
      localStorage.setItem(key, item);
    } catch (e) {
      console.error("Error setting item in localStorage", e);
    }
  },

  /**
   * 로컬 스토리지에서 키에 해당하는 아이템을 제거합니다.
   * @param {*} key - 로컬 스토리지 키
   */
  removeStorageItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("Error removing item from localStorage", e);
    }
  },

  /**
   * 로컬 스토리지의 모든 아이템을 제거합니다.
   */
  clearStorage: () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.error("Error clearing localStorage", e);
    }
  },
};
