import { getStorageItem, setStorageItem } from "../storage/localStorageService";

/**
 * 회원 토큰을 로컬 스토리지에서 가져옵니다.
 * @returns - 토큰 문자열 또는 null
 */
export const getToken = () => getStorageItem("token");

/**
 * 사용자가 인증되었는지 확인합니다.
 * @returns - true: 인증됨, false: 인증되지 않음
 */
export const isAuthenticated = () => !!getToken();

/**
 * 사용자를 로그인 상태로 설정합니다.
 * @param {string} token - 인증 토큰
 * @param {object} user - 사용자 정보: {이름, 이메일, 암호화된 비밀번호}
 */
export const login = (token, user) => {
  setStorageItem("token", token);
  setStorageItem("user", user);
};

/**
 * 사용자를 로그아웃 상태로 설정합니다.
 */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

/**
 * 로컬 스토리지에서 사용자 정보를 가져옵니다.
 * @returns - 사용자 정보 객체 또는 null
 */
export const getUser = () => {
  return getStorageItem("user");
};
