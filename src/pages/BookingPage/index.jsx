import styles from "./BookingPage.module.css";
import Button from "../../components/Button/Button";
import { getImage } from "../../utils/getImage";

const BookingPage = () => {
  return (
    <div className={styles.booking_page}>
      <div className={styles.pageLeft}>
        <div className={styles.left_inner}>
          <div className={styles.titleSection}>
            <img claseName={styles.calendar} src={getImage()} alt="달력" />
            <div className={styles.title}>예약 및 결제</div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.name}>name</div>
            <div className={styles.checkInOut}>
              <div className={styles.checkIn}>checkin</div>
              <div className={styles.checkOut}>checkout</div>
            </div>
            <div className={styles.man}>인원수</div>
          </div>

          <Button>결제하기</Button>
        </div>
      </div>

      <div className={styles.pageRight}>
        <div className={styles.right_inner}>
          <img src={getImage("logo")} alt="pet with calendar" />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
