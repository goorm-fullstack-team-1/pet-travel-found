import styles from "./DetailPage.module.css";
import { getImage } from "../../utils/getImage";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  const defaultState = {
    thumbnail: "",
    name: "",
    score: 0,
    location: "",
    shortIntro: "",
    options: [],
    price: "",
  };
  const { state } = useLocation();
  const safeState = { ...defaultState, ...(state ?? {}) };

  const goBooking = () => {
    navigate("/booking", {
      state: safeState,
    });
  };

  return (
    <div className={styles.detail_page}>
      <div className={styles.pageLeft}>
        <img
          className={styles.thumbnail}
          // TODO: 추후 실제 선택한 숙소의 이미지 URL로 대체하도록 API 연동 및 상태 관리 적용 예정
          src={safeState.thumbnail || "/src/assets/images/no-photo.png"}
          alt="thumbnail"
        />

        <div className={styles.infoTop}>
          <div className={styles.nameSection}>
            <div className={styles.name}>{safeState.name}</div>
            <div className={styles.keyCondition}>
              <Icon
                name="반려동반여행"
                alt="반려동반여행"
                style={{ color: "#FFFFFF", width: 22, height: 22 }}
              />
              반려동물 동반 가능
            </div>
          </div>

          <div className={styles.subInfo}>
            <div className={styles.location}>
              <img src={getImage("gps")} alt="gps" />
              {safeState.location}
            </div>
            <div className={styles.score}>
              <img src={getImage("star")} alt="star" />
              {safeState.score}
            </div>
          </div>

          <div className={styles.description}>{safeState.shortIntro}</div>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.reserve}>
          <div className={styles.reserveTop}>예약정보</div>
          <div className={styles.reserveMid}>{safeState.price}원</div>
          <div className={styles.reserveBot}>1박기준</div>
          <hr className={styles.reserveHr} />
          <div className={styles.reserveBtnWrapper}>
            <Button onClick={goBooking} className={styles.reserveBtn}>
              예약하기
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.infoBot}>
        <div className={styles.infoBotTop}>편의시설</div>
        <div className={styles.optionContainer}>
          {safeState.options.map((option) => (
            <div key={option} className={styles.option}>
              <Icon
                name={option}
                alt={option}
                style={{ color: "#2F5B4E", width: 22, height: 22 }}
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
