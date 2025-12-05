import styles from "./BookingPage.module.css";
import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../../services/auth/authService";

const BookingPage = () => {
  // 1. useLocation 훅을 사용해 location 객체 가져오기
  const location = useLocation();

  // 2. location.state에서 전달받은 상태 추출
  const { name, address } = location.state || {};

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [headCount, setHeadCount] = useState(2);

  const verifyCheckIn = (e) => {
    setCheckIn(e.target.value);
    const checkInDate = new Date(e.target.value);
    const today = new Date();
    if (checkInDate < today) {
      alert("체크인 날짜는 오늘 이후로 선택해야 합니다.");
      e.target.value = "";
    }
  };

  const verifyCheckOut = (e) => {
    setCheckOut(e.target.value);
    const checkOutDate = new Date(e.target.value);
    const checkInInput = document.getElementById("checkin");
    const checkInDate = new Date(checkInInput.value);
    if (checkOutDate <= checkInDate) {
      alert("체크아웃 날짜는 체크인 날짜 이후로 선택해야 합니다.");
      e.target.value = "";
    }
  };

  const verifyHeadCount = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value < 1) {
      alert("인원은 최소 1명 이상이어야 합니다.");
      e.target.value = 1;
      setHeadCount(1);
    } else if (value > 10) {
      alert("인원은 최대 10명 이하이어야 합니다.");
      e.target.value = 10;
      setHeadCount(10);
    } else {
      setHeadCount(value);
    }
  };

  const navigate = useNavigate();

  const goPayment = () => {
    if (!checkIn || !checkOut) {
      alert("체크인 및 체크아웃 날짜를 모두 선택해주세요.");
      return;
    }

    navigate("/payment", {
      state: {
        name,
        address,
        checkIn,
        checkOut,
        headCount,
        price: "120000", // 예시 가격, 실제로는 선택한 숙소의 가격을 전달해야 함
      },
    });
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      alert("로그인이 필요합니다.");
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className={styles.booking_page}>
      <div className={styles.pageLeft}>
        <div className={styles.left_inner}>
          <div className={styles.titleSection}>
            <img
              className={styles.calendar}
              src={getImage("calendar")}
              alt="달력"
            />
            <div className={styles.title}>예약 및 결제</div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.placeName}>
              <div className={styles.name}>{name}</div>
              <div
                className={styles.location}
              >{`${address.split(" ")[1]} ${address.split(" ")[2]}`}</div>
            </div>

            <form
              className={styles.bookingForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="checkin">체크인</label>
                  <input
                    id="checkin"
                    name="checkin"
                    type="date"
                    onChange={verifyCheckIn}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="checkout">체크아웃</label>
                  <input
                    id="checkout"
                    name="checkout"
                    type="date"
                    onChange={verifyCheckOut}
                  />
                </div>
              </div>

              <div className={styles.rowSingle}>
                <label htmlFor="guests">인원</label>
                <div className={styles.guestControl}>
                  <img src={getImage("person")} alt="person" />
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={headCount}
                    onChange={verifyHeadCount}
                  />
                </div>
              </div>
            </form>
          </div>

          <Button className={styles.button} onClick={goPayment}>
            <img
              className={styles.btnImg}
              src={getImage("card_white")}
              alt="카드"
            />
            결제하기
          </Button>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.right_inner}>
          <img
            className={styles.petWithCalendar}
            src={getImage("petWithCalendar")}
            alt="pet with calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
