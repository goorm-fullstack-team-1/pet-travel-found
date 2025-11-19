import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <MyPage></MyPage>
      </BrowserRouter>
    </>
  );
}

export default App;
