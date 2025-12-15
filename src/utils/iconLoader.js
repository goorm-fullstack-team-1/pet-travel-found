// 모든 SVG 파일 자동 로드 (ReactComponent 변환)
const modules = import.meta.glob("../assets/images/icons/*.svg", {
  query: "?react",
  eager: true,
});

// 파일 이름을 key로 매핑
export const iconMap = {};

for (const path in modules) {
  // path 예: "../assets/images/icons/star.svg"
  const fileName = path.split("/").pop().replace(".svg", ""); // "star"
  iconMap[fileName] = modules[path].default;
}
