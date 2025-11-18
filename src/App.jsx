import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
// import AuthPage from "./pages/AuthPage/index";
// import Login from "./pages/AuthPage/Login/index";
// import Register from "./pages/AuthPage/Register/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        {/* <Routes>
          <Route path="auth" element={<AuthPage />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
