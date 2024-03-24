import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedFligh from "./Pages/SearchedFlightPage/SearchedFligh";
import Footer from "./Components/FooterSection/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchedFligh />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
