import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "../CartContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Headphones from "./Headphones";
import LaptopDetails from "./LaptopDetails";
import MobilesDetails from "./MobilesDetails";
import HeadphoneDetails from "./HeadphoneDetails";
import CartInvoice from "../CartInvoice";
import WatchDetails from "./WatchDetails";
import Podsdetails from "./Podsdetails"
import Watches from "./Watches";
import Pods from "./Pods"

const Master = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Laptops />} />
            <Route path="dashboard/laptops" element={<Laptops />} />
            <Route path="dashboard/mobiles" element={<Mobiles />} />
            <Route path="dashboard/headphones" element={<Headphones />} />
            <Route path="dashboard/watches" element={<Watches />} />
            <Route path="dashboard/pods" element={<Pods />} />
          </Route>
          <Route path="/error" element={<Error />} />
          <Route path="/laptopdetails" element={<LaptopDetails />} />
          <Route path="/mobiledetails" element={<MobilesDetails />} />
          <Route path="/headphonedetails" element={<HeadphoneDetails />} />
          <Route path="/watchesdetails" element={<WatchDetails />} />
          <Route path="/podsdetails" element={<Podsdetails />} />
          <Route path="/cart" element={<CartInvoice />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Master;

