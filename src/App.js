import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
