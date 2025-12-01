import thumbnail from "../../assets/images/placeDefault.png";
import styles from "./PlaceList.module.css";
import PlaceItem from "../PlaceItem/PlaceItem";
import { useState, useEffect } from "react";
import { getPlaceList } from "../../services/petPlace/petPlaceService";

const PlaceList = () => {
  const [placeLists, setPlaceLists] = useState([]);

  useEffect(() => {
    const fetchPlaceData = async () => {
      const request = await getPlaceList({ category: "펜션" });
      const data = request?.response?.body?.items?.item;

      setPlaceLists(data);
    };

    fetchPlaceData();
  }, []);

  return (
    <div className={styles.placeList}>
      {placeLists.map((place) => (
        <PlaceItem
          key={place.title}
          thumbnail={thumbnail}
          name={place.title}
          score={4.8}
          location={place.address}
          shortIntro={place.description}
          options={[place.category1, place.category2]}
          price={"120,000"}
        ></PlaceItem>
      ))}
    </div>
  );
};
export default PlaceList;
