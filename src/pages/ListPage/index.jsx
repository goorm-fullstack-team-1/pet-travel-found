import { useLocation } from "react-router-dom";
import styles from "./ListPage.module.css";
import Search from "./Search/Search";
import PlaceList from "./components/PlaceList/PlaceList";

const ListPage = () => {
  const { state } = useLocation();
  return (
    <div className={styles.listPage}>
      <Search />
      <PlaceList
        searchKeyword={state?.searchKeyword ?? "펜션"}
        searchLocation={state?.searchLocation ?? ""}
      />
    </div>
  );
};

export default ListPage;
