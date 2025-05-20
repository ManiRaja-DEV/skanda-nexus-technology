import { Switch, Route } from "wouter";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Careers from "../pages/Careers/Careers";
import TrainingDevelopment from "../pages/TraningDevelopment/TraningDevelopment";

function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/skanda-nexus-technology" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/careers" component={Careers} />
        <Route path="/training-development" component={TrainingDevelopment} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
    </Layout>
  );
}

export default AppRoutes;
