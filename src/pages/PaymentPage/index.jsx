import styles from "./PaymentPage.module.css";
import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../../services/auth/authService";
import { setPayment } from "../../services/payment/payService";

const PaymentPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated()) {
      alert("로그인이 필요합니다.");
      navigate("/auth/login");
    }
  }, [navigate]);

  // 1. useLocation 훅을 사용해 location 객체 가져오기
  const location = useLocation();

  // 2. location.state에서 전달받은 상태 추출
  const { name, address, checkIn, checkOut, headCount, price } =
    location.state || {};

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const stayDuration = Math.round(timeDiff / MS_PER_DAY);
  const totalPrice = Number(price * stayDuration).toLocaleString();
  const dayPrice = Number(price).toLocaleString();

  const [cardOwner, setCardOwner] = useState("");

  const [cardNumber, setCardNumber] = useState("");

  const formatCardNumber = (value) => {
    // 1. 숫자 외의 모든 문자 제거
    const cleanedValue = value.replace(/\D/g, "");

    // 2. 최대 16자리까지만 사용
    const truncatedValue = cleanedValue.substring(0, 16);

    // 3. 4자리씩 그룹화하고 '-'로 연결
    return (
      truncatedValue
        .match(/.{1,4}/g) // 정규식: 1~4자리 문자를 그룹으로 매칭
        ?.join(" ") || ""
    ); // 그룹을 '-'로 연결 (match 결과가 null일 경우 대비)
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const [expiryDate, setExpiryDate] = useState("");

  const formatExpiryDate = (value) => {
    // 1. 숫자 외의 모든 문자 제거
    const cleanedValue = value.replace(/\D/g, "");

    // 2. 최대 4자리까지만 사용
    const truncatedValue = cleanedValue.substring(0, 4);

    // 3. 2자리 입력 후 '/' 추가
    if (truncatedValue.length > 2) {
      // 3자리 이상일 경우, "MM/YY" 포맷으로 변환
      return `${truncatedValue.substring(0, 2)}/${truncatedValue.substring(2)}`;
    }

    // 1~2자리일 경우, 그대로 반환
    return truncatedValue;
  };

  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setExpiryDate(formattedValue);
  };

  const [CVV, setCVV] = useState("");

  const formatCVV = (value) => {
    // 1. 숫자 외의 모든 문자 제거
    const cleanedValue = value.replace(/\D/g, "");

    // 2. 최대 4자리까지만 사용
    const truncatedValue = cleanedValue.substring(0, 3);

    return truncatedValue;
  };

  const handleCVVChange = (e) => {
    const formattedValue = formatCVV(e.target.value);
    setCVV(formattedValue);
  };

  const handleCardOwner = (e) => {
    setCardOwner(e.target.value);
  };

  const handlePayment = () => {
    setPayment({
      name,
      address,
      checkIn,
      checkOut,
      headCount,
      stayDuration,
      totalPrice,
      cardNumber,
      expiryDate,
      CVV,
      cardOwner,
    })
      .then(() => {
        alert("결제 성공! 숙소리스트 화면으로 이동합니다.");
      })
      .catch((error) => {
        alert(`결제 실패: ${error.message}`);
      });

    navigate("/my");
  };
  return (
    <div className={styles.payment_page}>
      <div className={styles.pageLeft}>
        <div className={styles.left_inner}>
          <div className={styles.titleSection}>
            <div className={styles.title}>예약 정보</div>
            <div className={styles.description}>예약 내용을 확인해주세요</div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.name}>{name}</div>
            <div className={styles.location}>{address}</div>
            <div className={styles.checkInkOut}>
              <img
                className={styles.calendar}
                src={getImage("calendar")}
                alt="calendar"
              />
              체크인: {checkIn}
            </div>
            <div className={styles.checkInkOut}>
              <img
                className={styles.calendar}
                src={getImage("calendar")}
                alt="calendar"
              />
              체크아웃: {checkOut}
            </div>
            <div className={styles.man}>
              <img
                className={styles.person}
                src={getImage("person")}
                alt="person"
              />
              <div>인원: {headCount}명</div>
            </div>
            <div className={styles.period}>
              <div>숙박일수</div>
              <div>{stayDuration}박</div>
            </div>
            <div className={styles.price}>
              <div>1박 요금</div>
              <div>{dayPrice}원</div>
            </div>
          </div>

          <div className={styles.totalPrice}>
            <div>총 결제 금액</div>
            <div>{totalPrice}원</div>
          </div>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.right_inner}>
          <div className={styles.paymentDetailTitle}>
            <img
              className={styles.card}
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
                value={cardNumber}
                onChange={handleCardNumberChange}
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
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  maxLength="5"
                />
              </div>

              {/* CVV */}
              <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  value={CVV}
                  onChange={handleCVVChange}
                  maxLength="3"
                />
              </div>
            </div>

            {/* 카드 소유자 명 입력 필드 */}
            <div className={styles.formGroup}>
              <label htmlFor="cardHolderName">카드 소유자 명</label>
              <input
                id="cardHolderName"
                type="text"
                placeholder="홍길동"
                value={cardOwner}
                onChange={handleCardOwner}
              />
            </div>
          </div>

          <Button className={styles.button} onClick={handlePayment}>
            <img
              className={styles.btnImg}
              src={getImage("card_white")}
              alt="카드"
            />
            {totalPrice}원 결제하기
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
