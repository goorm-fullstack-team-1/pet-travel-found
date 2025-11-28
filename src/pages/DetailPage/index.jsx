import styles from "./DetailPage.module.css";
import { getImage } from "../../utils/getImage";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

let data = {
  imgUrl: "thumbnail",
  name: "부산 해운대 펫호텔",
  address: "부산",
  score: 4.5,
  description:
    "해운대 해변 근처 모던한 펫프렌들리 호텔. 도심속 편안한 휴식처입니다.",
  price: "135,000",
  options: [
    { id: 1, name: "도심 위치", icon: "gps" },
    { id: 2, name: "반려동물 용품", icon: "dog_foot" },
    { id: 3, name: "24시간 프런트", icon: "front" },
    { id: 4, name: "주차", icon: "parking" },
  ],
};

const DetailPage = () => {
  return (
    <div className={styles.detail_page}>
      <div className={styles.pageLeft}>
        <img
          className={styles.thumbnail}
          // TODO: 추후 실제 선택한 숙소의 이미지 URL로 대체하도록 API 연동 및 상태 관리 적용 예정
          src={getImage(data.imgUrl)}
          alt="thumbnail"
        />

        <div className={styles.infoTop}>
          <div className={styles.nameSection}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.keyCondition}>
              <Icon
                name="dog_foot"
                alt="dog_foot"
                style={{ color: "#FFFFFF", width: 22, height: 22 }}
              />
              반려동물 동반 가능
            </div>
          </div>

          <div className={styles.subInfo}>
            <div className={styles.location}>
              <img src={getImage("gps")} alt="gps" />
              {data.address}
            </div>
            <div className={styles.score}>
              <img src={getImage("star")} alt="star" />
              {data.score}
            </div>
          </div>

          <div className={styles.description}>{data.description}</div>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.reserve}>
          <div className={styles.reserveTop}>예약정보</div>
          <div className={styles.reserveMid}>{data.price}원</div>
          <div className={styles.reserveBot}>1박기준</div>
          <hr className={styles.reserveHr} />
          <div className={styles.reserveBtnWrapper}>
            <Button className={styles.reserveBtn}>예약하기</Button>
          </div>
        </div>
      </div>

      <div className={styles.infoBot}>
        <div className={styles.infoBotTop}>편의시설</div>
        <div className={styles.optionContainer}>
          {data.options.map((option) => (
            <div key={option.id} className={styles.option}>
              <Icon
                name={option.icon}
                alt={option.name}
                style={{ color: "#2F5B4E", width: 22, height: 22 }}
              />
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
