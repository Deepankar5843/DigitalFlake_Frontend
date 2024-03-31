import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import RequireUser from "./components/RequireUser";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import AddCategory from "./pages/addCategory/AddCategory";
import OnlyIfNotLoggedIn from "./components/onlyIfNotLoggedIn";
import AddProduct from "./pages/addProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Route>
        <Route element={<OnlyIfNotLoggedIn />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
