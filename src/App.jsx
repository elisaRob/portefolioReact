import { useState } from "react";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Portefolio } from "./pages/Portefolio";
import Knoweldges from "./pages/Knoweldges";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import { MentionLegales } from "./pages/MentionLegales";
import { PlanDuSite } from "./pages/PlanDuSite";
import { PolitiqueDeConfidentialite } from "./pages/PolitiqueDeConfidentialite";




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
              <Route exact path="/mentions-legales" component={MentionLegales}/>
              <Route exact path="/plan-du-site" component={PlanDuSite}/>
              <Route exact path="/politique-de-confidentialite" component={PolitiqueDeConfidentialite} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
