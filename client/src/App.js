import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import Category from "./pages/Category";
import AddCategory from "./pages/AddCategory";
import UpdateCategory from "./pages/UpdateCategory";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addproduct">
            <AddProduct />
          </Route>
          <Route exact path="/updateproduct/:id">
            <UpdateProduct />
          </Route>

          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/addcategory">
            <AddCategory />
          </Route>
          <Route exact path="/updatecategory/:id">
            <UpdateCategory />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
