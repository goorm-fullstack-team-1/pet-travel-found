import thumbnail from "../../../../assets/images/thumbnail.png";
import styles from "./PlaceList.module.css";
import PlaceItem from "../PlaceItem/PlaceItem";
import { useState, useEffect } from "react";
import { getPlaceList } from "../../../../services/petPlace/petPlaceService";

const PlaceList = ({ searchKeyword = "펜션", searchLocation = "" }) => {
  const [placeLists, setPlaceLists] = useState([]);

  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        const request = await getPlaceList({
          category: searchKeyword,
          keyword: searchLocation,
        });
        const data = request?.response?.body?.items?.item;

        setPlaceLists(data);
      } catch (error) {
        console.error("숙소 정보 불러오기를 실패했습니다.", error);
        setPlaceLists([]);
      }
    };

    fetchPlaceData();
  }, [searchKeyword, searchLocation]);

  return (
    <div className={styles.placeList}>
      {placeLists ? (
        placeLists.map((place) => (
          <PlaceItem
            key={place.title}
            thumbnail={thumbnail}
            name={place.title}
            score={4.8}
            location={place.address}
            shortIntro={place.description}
            options={[place.category1, place.category2, place.category3]}
            price={"120,000"}
          ></PlaceItem>
        ))
      ) : (
        <div style={{ margin: "0 auto" }}>검색 데이터가 없습니다.</div>
      )}
    </div>
  );
};
export default PlaceList;
