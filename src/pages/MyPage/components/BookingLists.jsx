import { localStorageService } from "../../../services/storage/localStorageService";
import BookingList from "./BookingList";
import styles from "./BookingLists.module.css";

const BookingLists = () => {
  const user = localStorageService.getStorageItem("user");
  const payments = localStorageService.getStorageItem("payment") || [];
  const bookingLists = payments.filter(
    (payment) => payment.email === user.email,
  );

  return (
    <div className={styles["booking-lists"]}>
      {bookingLists.length >= 1 ? (
        bookingLists.map((bookingList, idx) => (
          <BookingList
            key={idx}
            placeTitle={bookingList.name}
            status={"결제완료"}
            checkIn={bookingList.checkIn}
            checkOut={bookingList.checkOut}
            nightCount={bookingList.stayDuration}
            headCount={bookingList.headCount}
            // bookingDate={bookingList.bookingDate}
            bookingDate={"2025-12-08"}
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
