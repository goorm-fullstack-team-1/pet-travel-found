import logo from "../assets/images/logo.png";
import searchLogo from "../assets/images/searchLogo.png";
import thumbnail from "../assets/images/thumbnail.png";
import star from "../assets/images/icons/star.svg";
import gps from "../assets/images/icons/gps.svg";
import calendar from "../assets/images/icons/calendar.svg";
import person from "../assets/images/icons/person.svg";
import wishTrue from "../assets/images/icons/wishTrue.svg";
import wishFalse from "../assets/images/icons/wishFalse.svg";
import petWithCalendar from "../assets/images/petWithCalendar.png";
import card_white from "../assets/images/icons/card_white.svg";
import card_black from "../assets/images/icons/card_black.svg";
import infoImage from "../assets/images/infoImage.png";
import introImage from "../assets/images/introImage.png";

export function getImage(imageId) {
  switch (imageId) {
    case "logo":
      return logo;
    case "thumbnail":
      return thumbnail;
    case "star":
      return star;
    case "gps":
      return gps;
    case "calendar":
      return calendar;
    case "person":
      return person;
    case "card_white":
      return card_white;
    case "card_black":
      return card_black;
    case "wishTrue":
      return wishTrue;
    case "wishFalse":
      return wishFalse;
    case "petWithCalendar":
      return petWithCalendar;
    case "searchLogo":
      return searchLogo;
    case "infoImage":
      return infoImage;
    case "introImage":
      return introImage;
    default:
      return null;
  }
}
