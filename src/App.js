import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/configureStore";
import "./App.css";
import Main from "./components/pages/Main/Main.jsx";
import Reg from "./components/pages/Main/Login/Reg";
import Login from "./components/pages/Main/Login/Login";
import useLocalStorage from "use-local-storage";

import Blog from "./components/components/Blog/Blog";

import Profile from "./components/components/profile/Profile";
import ScrollToTop from "./components/components/ScrollToTop";
import About from "./components/pages/About.jsx/About";

import Footer from "./components/components/Footer/Footer";

import EditProfile from "./components/components/profile/EditProfile";
import WeatherApp from "./components/components/profile/Weather/WeatherApp";
import TapePage from "./components/Tape/TapePage";
import MainTapeBlog from "./components/Tape/MainTapeBlog";
import UserProfile from "./components/components/UserProfile/UserProfile";
import Messenger from "./components/pages/Messenger/Messenger";

function App() {
  const user = useSelector((state) => state.auth.userId);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
<<<<<<< HEAD
=======
      <button className="buttonSwitchTheme" onClick={switchTheme}>
        Сменить тему
      </button>
>>>>>>> 50ec5df9417bb3fd45c1cc1e5b75c2b3d115fbac
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main switchTheme={switchTheme}/>} />
            <Route path="/reg" element={<Reg />} />
            <Route path="/login" element={<Login />} />

            <Route path="/blog" element={<Blog />} />

            <Route path="/about" element={<About />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/edit/profile/:id" element={<EditProfile />} />
            <Route path="/weather" element={<WeatherApp />} />

            <Route path="/footer" element={<Footer />} />

            <Route path="/post" element={<MainTapeBlog />} />
            <Route path="/post/:id" element={<TapePage />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/messenger" element={!user ? <Login /> : <Messenger />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
