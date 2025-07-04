import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import PostDetail from "./components/PostDetail/PostDetail";
import Search from "./components/Search/Search";
import PrivateZone from "./components/Guards/PrivateZone";
import AdminZone from "./components/Guards/AdminZone";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <h2>Redux App</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/id/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminZone>
                <Admin />
              </AdminZone>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
