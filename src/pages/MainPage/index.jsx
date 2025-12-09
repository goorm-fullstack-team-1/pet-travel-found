import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";
import styles from "./MainPage.module.css";
import Icon from "../../components/Icon/Icon";

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.intro}>
        <div className={styles.intro_text}>
          <div className={styles.title}>
            반려동물과 함께하는 <br />
            <span>특별한 여행</span>
          </div>
          <div className={styles.desc}>
            Pet Travel Found와 함께 반려동물 친화적인 숙소를 찾고, <br />
            잊지 못할 추억을 만들어보세요.
          </div>
          <div className={styles.btns}>
            <Button
              onClick={() => {
                location.href = "/list";
              }}
              className={styles.startButton}
            >
              지금 시작하기 →
            </Button>
            <Button className={styles.learnMoreButton}>
              <a href="#info">더 알아보기</a>
            </Button>
          </div>
        </div>
        <div className={styles.intro_image}>
          <img
            className={styles.logo}
            src={getImage("introImage")}
            alt="logo"
          />
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.info} id="info">
        <div className={styles.info_image}>
          <img className={styles.logo} src={getImage("infoImage")} alt="logo" />
        </div>
        <div className={styles.info_title}>Pet Travel Found</div>
        <div className={styles.info_desc}>
          반려동물과 함께하는 여행을 더욱 특별하게 만들어드립니다. <br />
          Pet Travel Found는 반려동물 친화적인 숙소를 쉽고 편리하게 찾고 예약할
          수 있는 플랫폼입니다.
        </div>
      </div>
      <div className={styles.feat}>
        <div className={styles.feat_card}>
          <div className={styles.feat_image}>
            <Icon
              name="반려동반여행"
              style={{ width: "35px", height: "35px", color: "#305C4F" }}
            ></Icon>
          </div>
          <div className={styles.feat_title}>반려동물 친화</div>
          <div className={styles.feat_desc}>
            모든 숙소는 반려동물과 함께 머물 수 있도록 준비되어 있습니다.
          </div>
        </div>
        <div className={styles.feat_card}>
          <div className={styles.feat_image}>
            <Icon
              name="gps"
              style={{ width: "35px", height: "35px", color: "#305C4F" }}
            ></Icon>
          </div>
          <div className={styles.feat_title}>전국 네트워크</div>
          <div className={styles.feat_desc}>
            제주부터 강원도까지, 대한민국 전역의 다양한 숙소를 제공합니다.
          </div>
        </div>
        <div className={styles.feat_card}>
          <div className={styles.feat_image}>
            <Icon
              name="heart"
              style={{ width: "35px", height: "35px", color: "#305C4F" }}
            ></Icon>
          </div>
          <div className={styles.feat_title}>신뢰할 수 있는</div>
          <div className={styles.feat_desc}>
            검증된 숙소만을 엄선하여 안심하고 예약할 수 있습니다.
          </div>
        </div>
        <div className={styles.feat_card}>
          <div className={styles.feat_image}>
            <Icon
              name="guard"
              style={{ width: "35px", height: "35px", color: "#305C4F" }}
            ></Icon>
          </div>
          <div className={styles.feat_title}>안전한 예약</div>
          <div className={styles.feat_desc}>
            간편하고 안전한 예약 시스템으로 걱정 없이 이용하세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
