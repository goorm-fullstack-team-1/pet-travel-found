import Button from "../../../components/Button/Button";
import styles from "./BookingList.module.css";

const BookingList = ({
  placeTitle,
  status,
  checkIn,
  checkOut,
  nightCount,
  headCount,
  bookingDate,
  price,
}) => {
  return (
    <div className={styles["booking-item"]}>
      <div className={styles["booking-item__header"]}>
        <h1>{placeTitle}</h1>
        <Button className={styles["booking-item__status-tag"]}>{status}</Button>
      </div>
      <div className={styles["booking-item__body"]}>
        <div className={styles["booking-item__info"]}>
          <div className={styles["booking-item__period-group"]}>
            <div className={styles["booking-item__period"]}>
              <div className={styles["booking-item__check-dates"]}>
                체크인: {checkIn.replaceAll("-", ". ").concat(".")}
                <br />
                체크아웃: {checkOut.replaceAll("-", ". ").concat(".")}
              </div>
              <div className={styles["booking-item__night-count"]}>
                {nightCount}박
              </div>
            </div>
          </div>
          <div className={styles["booking-item__head-count"]}>{headCount}</div>
        </div>
        <div className={styles["booking-item__summary"]}>
          <div className={styles["booking-item__date"]}>
            예약일: {bookingDate.replaceAll("-", ". ").concat(".")}
          </div>
          <div className={styles["booking-item__price"]}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
