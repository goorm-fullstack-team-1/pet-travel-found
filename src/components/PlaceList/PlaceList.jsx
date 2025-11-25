import styles from "./PlaceList.module.css";
import PlaceItem from "../PlaceItem/PlaceItem";

const PlaceList = () => {
  return (
    <div className={styles.placeList}>
      <PlaceItem
        thumail={"thumbnail"}
        name={"제주 펫프렌들리 펜션"}
        score={4.8}
        location={"제주"}
        shortIntro={[
          "제주 바다가 보이는 아름다운 펫프렌들리 펜션입니다.",
          "반려동물과 함께 편안한 휴식을 즐기세요.",
        ]}
        options={["무료 Wi-Fi", "주차장", "반려동물 용품"]}
        price={"120,000"}
        isWishlisted={"wishFalse"}
      ></PlaceItem>
      <PlaceItem
        thumail={"thumbnail"}
        name={"제주 펫프렌들리 펜션"}
        score={4.8}
        location={"제주"}
        shortIntro={[
          "제주 바다가 보이는 아름다운 펫프렌들리 펜션입니다.",
          "반려동물과 함께 편안한 휴식을 즐기세요.",
        ]}
        options={["무료 Wi-Fi", "주차장", "반려동물 용품"]}
        price={"120,000"}
        isWishlisted={"wishFalse"}
      ></PlaceItem>
      <PlaceItem
        thumail={"thumbnail"}
        name={"제주 펫프렌들리 펜션"}
        score={4.8}
        location={"제주"}
        shortIntro={[
          "제주 바다가 보이는 아름다운 펫프렌들리 펜션입니다.",
          "반려동물과 함께 편안한 휴식을 즐기세요.",
        ]}
        options={["무료 Wi-Fi", "주차장", "반려동물 용품"]}
        price={"120,000"}
        isWishlisted={"wishFalse"}
      ></PlaceItem>
      <PlaceItem
        thumail={"thumbnail"}
        name={"제주 펫프렌들리 펜션"}
        score={4.8}
        location={"제주"}
        shortIntro={[
          "제주 바다가 보이는 아름다운 펫프렌들리 펜션입니다.",
          "반려동물과 함께 편안한 휴식을 즐기세요.",
        ]}
        options={["무료 Wi-Fi", "주차장", "반려동물 용품"]}
        price={"120,000"}
        isWishlisted={"wishFalse"}
      ></PlaceItem>
      <PlaceItem
        thumail={"thumbnail"}
        name={"제주 펫프렌들리 펜션"}
        score={4.8}
        location={"제주"}
        shortIntro={[
          "제주 바다가 보이는 아름다운 펫프렌들리 펜션입니다.",
          "반려동물과 함께 편안한 휴식을 즐기세요.",
        ]}
        options={["무료 Wi-Fi", "주차장", "반려동물 용품"]}
        price={"120,000"}
        isWishlisted={"wishFalse"}
      ></PlaceItem>
      <PlaceItem
        thumail={"thumbnail"}
        name={"제주 펫프렌들리 펜션"}
        score={4.8}
        location={"제주"}
        shortIntro={[
          "제주 바다가 보이는 아름다운 펫프렌들리 펜션입니다.",
          "반려동물과 함께 편안한 휴식을 즐기세요.",
        ]}
        options={["무료 Wi-Fi", "주차장", "반려동물 용품"]}
        price={"120,000"}
        isWishlisted={"wishTrue"}
      ></PlaceItem>
    </div>
  );
};
export default PlaceList;
