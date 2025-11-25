import { Get } from "../api/apiService";

/**
 * 반려동물 동반 문화시설 목록을 조회합니다.
 *
 * 이 API는 한국문화정보원(KCISA)의 공공데이터 API를 호출하며,
 * pageNo, numOfRows는 기본적으로 "1", "10"으로 설정됩니다.
 * keyword와 category는 선택적으로 제공되었을 때만 요청 파라미터에 포함됩니다.
 *
 * @param {Object} [options={}] - 조회 옵션 객체
 * @param {string} [options.pageNo="1"] - 조회할 페이지 번호
 * @param {string} [options.numOfRows="10"] - 한 페이지당 조회할 레코드 수
 * @param {string} [options.keyword=""] - 검색어(시설명)
 * @param {string} [options.category=""] - 시설 카테고리(예: "펜션, 호텔")
 *
 * @returns {Promise<Response>} fetch Response 객체를 반환합니다.
 *
 * @example
 * // 기본 호출
 * getPlaceList();
 *
 * @example
 * // 특정 페이지 조회
 * getPlaceList({ pageNo: "3", numOfRows: "20" });
 *
 * @example
 * // 검색어 포함
 * getPlaceList({ keyword: "강아지" });
 *
 * @example
 * // 카테고리 포함
 * getPlaceList({ category: "펜션, 호텔" });
 */
export const getPlaceList = ({
  pageNo = "1",
  numOfRows = "10",
  keyword = "",
  category = "",
} = {}) => {
  const API_KEY = import.meta.env.VITE_PET_PLACE_API_KEY;
  const API_URL = import.meta.env.VITE_PET_PLACE_API_URL;

  const params = {
    serviceKey: API_KEY,
    pageNo,
    numOfRows,
    ...(keyword && { keyword }),
    ...(category && { category }),
  };

  return Get(API_URL, params);
};
