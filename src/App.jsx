import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage/index";
import Login from "./pages/AuthPage/Login/index";
import Register from "./pages/AuthPage/Register/index";
import MyPage from "./pages/MyPage";

function App() {
  console.log("PR 테스트");
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="auth" element={<AuthPage />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="my-page" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
