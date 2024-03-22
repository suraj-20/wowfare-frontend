import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedFligh from "./Pages/SearchedFlightPage/SearchedFligh";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchedFligh />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
