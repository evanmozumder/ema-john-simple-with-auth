import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipping"
          element={
            <RequireAuth>
              <Shipping></Shipping>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;