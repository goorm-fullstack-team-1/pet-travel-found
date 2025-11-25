import styles from "./PaymentPage.module.css";
import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";

const PaymentPage = () => {
  return (
    <div className={styles.payment_page}>
      <div className={styles.pageLeft}>
        <div className={styles.left_inner}>
          <div className={styles.titleSection}>
            <div className={styles.title}>예약 정보</div>
            <div className={styles.description}>예약 내용을 확인해주세요</div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.name}>부산 해운대 펫 호텔</div>
            <div className={styles.location}>부산</div>
            <div className={styles.checkInkOut}>
              <img
                className={styles.calendar}
                src={getImage("calendar")}
                alt="calendar"
              />
              체크인: 2025-10-16
            </div>
            <div className={styles.checkInkOut}>
              <img
                className={styles.calendar}
                src={getImage("calendar")}
                alt="calendar"
              />
              체크아웃: 2025-10-16
            </div>
            <div className={styles.man}>
              <img
                className={styles.person}
                src={getImage("person")}
                alt="person"
              />
              인원: 2명
            </div>
            <div className={styles.period}>
              <div>숙박일수</div>
              <div>1박</div>
            </div>
            <div className={styles.price}>1박 요금</div>
          </div>

          <div className={styles.totalPrice}>
            <div>총결제금액</div>
            <div>120,000원</div>
          </div>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.right_inner}>
          <div className={styles.titleSection}>
            <img claseName={styles.card} src={getImage()} alt="카드" />
            <div className={styles.title}>결제 정보</div>
            <div>카드 정보를 입력해주세요</div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.cardNumber}>카드번호</div>
            <div className={styles.cardDetails}>
              <div className={styles.validityPeriod}>유효기간</div>
              <div className={styles.cvv}>CVV</div>
            </div>
            <div className={styles.cardOwner}>카드 소유자 명</div>
          </div>

          <Button>결제하기</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
