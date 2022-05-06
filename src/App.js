import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/configureStore";
import "./App.css";
import Main from "./components/pages/Main/Main.jsx";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
