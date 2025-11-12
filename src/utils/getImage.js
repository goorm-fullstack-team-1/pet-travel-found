import logo from "../assets/images/logo.png";

export function getImage(imageId) {
  switch (imageId) {
    case "logo":
      return logo;
    default:
      return null;
  }
}
