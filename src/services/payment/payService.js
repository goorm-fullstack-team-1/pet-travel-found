import { sessionStorageService } from "../storage/sessionStorageService";
import { localStorageService } from "../storage/localStorageService";
import { sha256Hash } from "../../utils/hashUtils";

/**
 * 결제 정보를 로컬 스토리지에 저장합니다.
 *
 * @param {object} info - 결제 정보: {예약일, 숙소명, 주소, 체크인날짜, 체크아웃날짜, 인원수, 숙박일수, 결제금액, 카드번호, 유효기간, CVV, 카드소유자명}
 */
export const setPayment = async (info) => {
  const hashedCardNumber = await sha256Hash(info.cardNumber);
  const hashedExpiryDate = await sha256Hash(info.expiryDate);
  const hashedCVV = await sha256Hash(info.CVV);
  const hashedCardOwner = await sha256Hash(info.cardOwner);
  const { name, email } = sessionStorageService.getStorageItem("user");

  const existingPayments = localStorageService.getStorageItem("payment") || [];
  existingPayments.push({
    ...info,
    cardNumber: hashedCardNumber,
    expiryDate: hashedExpiryDate,
    CVV: hashedCVV,
    cardOwner: hashedCardOwner,
    userName: name,
    userEmail: email,
  });
  localStorageService.setStorageItem("payment", existingPayments);
};

/**
 * 로컬 스토리지에서 결제 정보를 가져옵니다.
 * @returns - 사용자 정보 객체 또는 null
 */
export const getPayment = () => {
  const { name, email } = sessionStorageService.getStorageItem("user");
  const existingPayments = localStorageService.getStorageItem("payment") || [];
  const duplicatePayments = existingPayments.filter(
    (p) => p.userName === name && p.userEmail === email,
  );
  return duplicatePayments || [];
};
