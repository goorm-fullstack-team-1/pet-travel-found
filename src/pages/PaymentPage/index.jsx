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
              <div>인원: 2명</div>
            </div>
            <div className={styles.period}>
              <div>숙박일수</div>
              <div>1박</div>
            </div>
            <div className={styles.price}>
              <div>1박 요금</div>
              <div>120,000원</div>
            </div>
          </div>

          <div className={styles.totalPrice}>
            <div>총 결제 금액</div>
            <div>120,000원</div>
          </div>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.right_inner}>
          <div className={styles.paymentDetailTitle}>
            <img
              claseName={styles.card}
              src={getImage("card_black")}
              alt="카드"
            />
            <div className={styles.title}>결제 정보</div>
          </div>
          <div className={styles.description}>카드 정보를 입력해주세요</div>

          <div className={styles.cardFormContainer}>
            {/* 카드 번호 입력 필드 */}
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber">카드 번호</label>
              <input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
              />
            </div>

            <div className={styles.formRow}>
              {/* 유효 기간 */}
              <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                <label htmlFor="expiryDate">유효 기간</label>
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>

              {/* CVV */}
              <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                <label htmlFor="cvv">CVV</label>
                <input id="cvv" type="text" placeholder="123" maxLength="3" />
              </div>
            </div>

            {/* 카드 소유자 명 입력 필드 */}
            <div className={styles.formGroup}>
              <label htmlFor="cardHolderName">카드 소유자 명</label>
              <input id="cardHolderName" type="text" placeholder="홍길동" />
            </div>
          </div>

          <Button className={styles.button}>
            <img
              className={styles.btnImg}
              src={getImage("card_white")}
              alt="카드"
            />
            120,000원 결제하기
          </Button>
          <div className={`${styles.description} ${styles.center}`}>
            결제 정보는 안전하게 암호화되어 처리됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
