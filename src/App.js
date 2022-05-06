import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/pages/Main/Main.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
