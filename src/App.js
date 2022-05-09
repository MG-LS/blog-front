import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/configureStore";
import "./App.css";
import Main from "./components/pages/Main/Main.jsx";
import Reg from "./components/pages/Main/Login/Reg";
import Login from "./components/pages/Main/Login/Login";
import Blog from "./components/components/Blog/Blog";


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reg" element={<Reg />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
