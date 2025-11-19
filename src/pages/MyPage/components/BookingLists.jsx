import BookingList from "./BookingList";
import styles from "./BookingLists.module.css";

const BookingLists = () => {
  // 테스트 데이터
  const date = new Date();
  const bookingDateStart = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const bookingDateEnd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
  const nightCount =
    (new Date(bookingDateEnd) - new Date(bookingDateStart)) /
    (1000 * 60 * 60 * 24);

  return (
    <div className={styles["booking-lists"]}>
      {/* 추후 데이터 연동 필요 */}
      <BookingList
        placeTitle={"남이섬글램핑"}
        status={"결제완료"}
        checkIn={bookingDateStart}
        checkOut={bookingDateEnd}
        nightCount={nightCount}
        headCount={"2명"}
        bookingDate={bookingDateStart}
        price={"110,000원"}
      ></BookingList>
    </div>
  );
};

export default BookingLists;
