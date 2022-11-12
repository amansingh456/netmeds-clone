import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Wellness from '../pages/Wellness';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Upload from '../pages/Upload';
import Cart from "../pages/Cart";
import CovidEssentialsPage from "../pages/CovidEssentialsPage";
import ProductPage from '../pages/ProductPage';
import PrivateAuth from "./PrivateAuth";
import Payment from "../pages/Payment";
import Success from '../pages/Success';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}  />
        <Route path="/" element={<Upload></Upload>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/wellness" element={<Wellness></Wellness>} />
        <Route
          path="/wellness/covidEssentials"
          element={<CovidEssentialsPage></CovidEssentialsPage>}
        />
        <Route
          path="/covidEssentials/productPage/:id"
          element={<ProductPage></ProductPage>}
        />
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/CovidEssentialsPage" element={<CovidEssentialsPage></CovidEssentialsPage>}></Route>
        <Route
          path="/checkout/payment-information"
          element={
            <PrivateAuth>
              <Payment></Payment>
            </PrivateAuth>
          }
        />

        <Route
          path="/success"
          element={
            <PrivateAuth>
              <Success></Success>
            </PrivateAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default AllRoutes


