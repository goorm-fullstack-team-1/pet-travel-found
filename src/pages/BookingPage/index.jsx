import styles from "./BookingPage.module.css";
import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";

const BookingPage = () => {
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
              <div className={styles.name}>부산 해운대 펫 호텔</div>
              <div className={styles.location}>부산</div>
            </div>

            <form
              className={styles.bookingForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="checkin">체크인</label>
                  <input id="checkin" name="checkin" type="date" />
                </div>

                <div className={styles.field}>
                  <label htmlFor="checkout">체크아웃</label>
                  <input id="checkout" name="checkout" type="date" />
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
                    value={2}
                  />
                </div>
              </div>
            </form>
          </div>

          <Button className={styles.button}>
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
