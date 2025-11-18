import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
