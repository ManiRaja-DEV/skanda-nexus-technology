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
        <Route path="/skanda-nexus-technology/services" component={Services} />
        <Route path="/skanda-nexus-technology/careers" component={Careers} />
        <Route
          path="/skanda-nexus-technology/training-development"
          component={TrainingDevelopment}
        />
        <Route path="/skanda-nexus-technology/about-us" component={About} />
        <Route path="/skanda-nexus-technology/contact-us" component={Contact} />
      </Switch>
    </Layout>
  );
}

export default AppRoutes;
