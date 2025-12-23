import BookingList from "./BookingList";
import styles from "./BookingLists.module.css";
import { getPayment } from "../../../services/payment/payService";

const BookingLists = () => {
  const payments = getPayment();
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles["booking-lists"]}>
      {payments.length >= 1 ? (
        payments.map((bookingList, idx) => (
          <BookingList
            key={idx}
            placeTitle={bookingList.name}
            status={bookingList.checkOut < today ? "이용완료" : "결제완료"}
            checkIn={bookingList.checkIn}
            checkOut={bookingList.checkOut}
            nightCount={bookingList.stayDuration}
            headCount={bookingList.headCount}
            bookingDate={bookingList.bookingDay}
            price={bookingList.totalPrice + "원"}
          ></BookingList>
        ))
      ) : (
        <div className={styles["no-booking"]}>예약 내역이 없습니다.</div>
      )}
    </div>
  );
};

export default BookingLists;
