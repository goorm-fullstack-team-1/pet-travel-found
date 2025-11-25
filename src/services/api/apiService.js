/**
 * GET 방식으로 API 요청을 수행하는 유틸리티 함수입니다.
 *
 * 전달된 params 객체를 URLSearchParams를 통해 쿼리 문자열로 변환하여
 * GET 요청 URL 뒤에 붙여 전송합니다.
 * 기본적으로 Accept 헤더를 "application/json"으로 설정하여
 * JSON 응답을 기대합니다.
 *
 * @param {string} api - 호출할 API의 기본 URL
 * @param {Object} [params={}] - 쿼리스트링으로 변환할 요청 파라미터 객체
 * @param {Object} [headers={}] - 추가로 포함할 요청 헤더 객체
 *
 * @returns {Promise<Response>} fetch Response 객체를 반환합니다.
 *
 * @example
 * // 기본 GET 요청
 * Get("https://api.example.com/data");
 *
 * @example
 * // 쿼리 파라미터 포함 요청
 * Get("https://api.example.com/data", { page: 1, size: 20 });
 *
 * @example
 * // 커스텀 헤더 포함 요청
 * Get("https://api.example.com/data", {}, { Authorization: "Bearer token" });
 *
 * @example
 * // 실제 데이터 가져오기
 * const res = await Get("https://api.example.com/data", { page: 1 });
 * const data = await res.json();
 * console.log(data);
 */
export const Get = (api, params = {}, headers = {}) => {
  const query = new URLSearchParams(params).toString();
  const url = query ? `${api}?${query}` : api;

  return fetch(url, {
    method: "GET",
    headers: {
      ...headers,
      Accept: "application/json",
    },
  });
};
