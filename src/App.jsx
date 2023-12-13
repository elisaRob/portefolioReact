import { useState } from "react";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Portefolio } from "./pages/Portefolio";
import Knoweldges from "./pages/Knoweldges";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer"




function App() {
  return (
    <>
      <BrowserRouter>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/competence" component={Knoweldges} />
              <Route exact path="/portefolio" component={Portefolio} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
