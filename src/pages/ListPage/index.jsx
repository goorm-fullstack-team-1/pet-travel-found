import styles from "./ListPage.module.css";
import PlaceList from "./components/PlaceList/PlaceList";

const ListPage = () => {
  return (
    <div className={styles.listPage}>
      <PlaceList />
    </div>
  );
};

export default ListPage;
