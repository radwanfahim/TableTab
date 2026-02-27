import { Route, Router } from "@solidjs/router";
import "./App.css";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}
AOS.init();

export default App;
