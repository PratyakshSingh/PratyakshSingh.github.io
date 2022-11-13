import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
