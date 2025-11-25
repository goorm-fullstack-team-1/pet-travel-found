import styles from "./DetailPage.module.css";
import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";

let data = {
  imgUrl: "thumbnail",
  name: "부산 해운대 펫호텔",
  address: "부산",
  score: 4.5,
  description:
    "해운대 해변 근처 모던한 펫프렌들리 호텔. 도심속 편안한 휴식처입니다.",
  price: "135,000",
  options: [
    { id: 1, name: "주차장", icon: "parking" },
    { id: 2, name: "와이파이", icon: "wifi" },
    { id: 3, name: "와이파이", icon: "wifi" },
    { id: 4, name: "와이파이", icon: "wifi" },
  ],
};

const DetailPage = () => {
  return (
    <div className={styles.detail_page}>
      <div className={styles.pageLeft}>
        <img
          className={styles.thumbnail}
          src={getImage(data.imgUrl)}
          alt="thumbnail"
        />

        <div className={styles.infoTop}>
          <div className={styles.nameSection}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.keyCondition}>반려동물 동반가능</div>
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

      <div className={styles.infoBot}>
        <div className={styles.infoBotTop}>편의시설</div>
        {data.options.map((option) => (
          <div key={option.id} className={styles.option}>
            <img src={getImage(option.icon)} alt={option.name} />
            <span>{option.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.pageRight}>
        <div className={styles.reserve}>
          <div className={styles.reserveTop}>예약정보</div>
          <div className={styles.reserveMid}>{data.price}원</div>
          <div className={styles.reserveBot}>1박기준</div>
          <Button className={styles.reserveBtn}>예약하기</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
