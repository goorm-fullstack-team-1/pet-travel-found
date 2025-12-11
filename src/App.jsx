import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage/index";
import Login from "./pages/AuthPage/Login/index";
import Register from "./pages/AuthPage/Register/index";
import ListPage from "./pages/ListPage/index";
import DetailPage from "./pages/DetailPage/index";
import BookingPage from "./pages/BookingPage/index";
import PaymentPage from "./pages/PaymentPage";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="auth" element={<AuthPage />}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="list" element={<ListPage />} />
            <Route path="detail" element={<DetailPage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="my" element={<MyPage />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
