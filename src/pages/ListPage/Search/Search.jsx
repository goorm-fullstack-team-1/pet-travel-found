import { getImage } from "../../../utils/getImage";
import Button from "../../../components/Button/Button";
import styles from "./Search.module.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const selectBoxRef = useRef();

  useEffect(() => {
    const onClickOutside = (e) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", onClickOutside);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [currentSearchValue, setCurrentSearchValue] = useState("펜션");
  const [currentValue, setCurrentValue] = useState("");

  const locations = ["전체", "제주", "포항", "평창", "부산"];

  const handleSelectBoxClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e) => {
    const value = e.target.textContent;
    setCurrentValue(value === "전체" ? "" : value);
    setIsOpen(false);
  };

  const handleSearchValueChange = (e) => {
    const value = e.target.value;
    setCurrentSearchValue(value ? value : "펜션");
  };

  const goSearch = () => {
    navigate("/list", {
      state: {
        searchKeyword: currentSearchValue,
        searchLocation: currentValue,
      },
    });
  };

  return (
    <div className={styles["search-container"]}>
      <img src={getImage("searchLogo")} />
      <div className={styles["search-content"]}>
        <div
          className={`${styles["search-content__title"]} ${styles["search-icon-green"]}`}
        >
          검색
        </div>
        <div className={styles["search-content__search-filter"]}>
          <div className={styles["search-content__text"]}>카테고리 검색</div>
          <input
            className={styles["search-content__box"]}
            id="keyword"
            type="text"
            placeholder="여행, 펜션, 호텔 ..."
            onChange={handleSearchValueChange}
          />
        </div>
        <div className={styles["search-content__search-filter"]}>
          <div className={styles["search-content__text"]}>지역</div>
          <div
            className={styles["search-content__box"]}
            ref={selectBoxRef}
            onClick={handleSelectBoxClick}
          >
            <div className={styles["search-content__select"]}>
              {currentValue ? currentValue : "전체"}
            </div>
            <div className={styles["search-content__select-arrow"]}></div>
            <ul
              className={styles["search-content__options"]}
              style={{ display: isOpen ? "block" : "none" }}
            >
              {locations.map((location, idx) => (
                <li
                  key={idx}
                  className={styles["search-content__option"]}
                  onClick={handleOptionClick}
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          className={`${styles["search-button"]} ${styles["search-icon-white"]}`}
          onClick={goSearch}
        >
          검색하기
        </Button>
      </div>
    </div>
  );
};
export default Search;
