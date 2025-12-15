import styles from "./PlaceItem.module.css";
import { getImage } from "../../../../utils/getImage";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/*
  이미지 = thumail
  플레이스 이름 = name
  별점 = score
  위치 = address
  간단 설명 = shortIntro
  옵션 (배열) = option
  가격 = price
찜버튼
상세보기버튼
*/
const PlaceItem = ({
  thumbnail,
  name,
  score,
  address,
  shortIntro,
  options,
  price,
}) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const goDetail = () => {
    navigate("/detail", {
      state: {
        thumbnail,
        name,
        score,
        address,
        shortIntro,
        options,
        price,
      },
    });
  };

  const city = address.split(" ")[1];

  return (
    <div className={styles.placeitem}>
      <div className={styles.thumailContainer}>
        <img className={styles.thumail} src={thumbnail} alt="thumnail" />
        {/* TODO: 추후에 섬네일 이미지를 어떻게 받아오는지에 맞춰서 수정해야함.
        public폴더에 이미지를 넣는 방법은 새로고침할 때마다 서버로부터 이미지를 다시 불러오기 때문에 비효율적.
        src의 assets폴더에서 IMPORT를 사용하여 불러오면 브라우저의 메모리 캐싱을 통한 최적화 가능
        -> 새로고침해도 다시 서버로부터 호출하지 않아 빠르게 로딩됨.
        단, 너무 많은 이미지를 IMPORT하면 번들링 시점에 용량이 커져 초기 로딩 속도가 느려질 수 있음.
        */}
        {isWishlisted ? (
          <div
            className={styles.isWishlisted}
            onClick={() => setIsWishlisted(false)}
          >
            <img
              className={styles.wishBtn}
              src={getImage("wishTrue")}
              alt="wishTrue"
            />
          </div>
        ) : (
          <div
            className={styles.isWishlisted}
            onClick={() => setIsWishlisted(true)}
          >
            <img
              className={styles.wishBtn}
              src={getImage("wishFalse")}
              alt="wishFalse"
            />
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.name}>{name}</div>
          <div className={styles.score}>
            <img className={styles.star} src={getImage("star")} alt="star" />
            {score}
          </div>
        </div>
        <div className={styles.location}>
          <img className={styles.gps} src={getImage("gps")} alt="gps" />
          <div className={styles.gpsText}>{city}</div>
        </div>
        <div className={styles.shortIntro}>
          {"- " + shortIntro.replaceAll(" | ", "\n- ")}
        </div>
        <div className={styles.options}>
          {options.map(
            (option, idx) =>
              option && (
                <div className={styles.option} key={idx}>
                  {option}
                </div>
              ),
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>
            {price}원<span>/박</span>
          </div>
          <Button
            onClick={goDetail}
            children="상세보기"
            className={styles.button}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
