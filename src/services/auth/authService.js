import { sessionStorageService } from "../storage/sessionStorageService";
import { localStorageService } from "../storage/localStorageService";
import { sha256Hash } from "../../utils/hashUtils";

/**
 * 사용자가 인증되었는지 확인합니다.
 * @returns - true: 인증됨, false: 인증되지 않음
 */
export const isAuthenticated = () => {
  return sessionStorageService.getStorageItem("isLoggedIn") === true;
};

/**
 * 사용자를 로그인 상태로 설정합니다.
 * @param {object} user - 사용자 정보: {이름, 이메일, 암호화된 비밀번호}
 */
export const login = async (user) => {
  const store = localStorageService.getStorageItem("user") || [];
  const hashedPassword = await sha256Hash(user.password);
  const existingUser = store.find(
    (u) => u.email === user.email && u.password === hashedPassword,
  );

  if (!existingUser) {
    return Promise.reject(
      new Error("이메일 또는 비밀번호가 올바르지 않습니다."),
    );
  }

  sessionStorageService.setStorageItem("isLoggedIn", true);
  // 세션에는 비밀번호를 포함하지 않은 정보만 저장
  const { name, email } = existingUser;
  sessionStorageService.setStorageItem("user", { name, email });
};

/**
 * 사용자를 로그아웃 상태로 설정합니다.
 */
export const logout = () => {
  sessionStorageService.setStorageItem("isLoggedIn", false);
  sessionStorageService.removeStorageItem("user");
};

/**
 * 로컬 스토리지에서 사용자 정보를 가져옵니다.
 * @returns - 사용자 정보 객체 또는 null
 */
export const getUser = () => {
  return localStorageService.getStorageItem("user") || [];
};

/**
 * 회원가입 정보를 로컬 스토리지에 저장합니다.
 *
 * @param {object} user - 사용자 정보: {이름, 이메일, 암호화된 비밀번호}
 */
export const setUser = async (user) => {
  const hashed = await sha256Hash(user.password);
  const existingUsers = localStorageService.getStorageItem("user") || [];
  // 중복 이메일 체크
  const duplicateUser = existingUsers.find((u) => u.email === user.email);
  if (duplicateUser) {
    throw new Error("이미 존재하는 이메일입니다.");
  }
  existingUsers.push({
    ...user,
    password: hashed,
  });
  localStorageService.setStorageItem("user", existingUsers);
};

/**
 * 세션 스토리지에서 로그인된 회원 이메일을 가져옵니다.
 * @returns - 이메일 문자열 또는 null
 */
export const getLogginedUserEmail = () => {
  const user = sessionStorageService.getStorageItem("user");
  return user ? user.email : null;
};

/**
 * 세션 스토리지에서 로그인된 회원 이름을 가져옵니다.
 * @returns - 이름 문자열 또는 null
 */
export const getUserName = () => {
  const user = sessionStorageService.getStorageItem("user");
  return user ? user.name : null;
};
